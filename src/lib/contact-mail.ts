import { PRODUCT_INTEREST_OPTIONS, type ContactFormValues } from "@/schemas/contact";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const REQUEST_TIMEOUT_MS = 10_000;
const DEFAULT_FROM = "TecnoDreamer <onboarding@resend.dev>";

/**
 * Como o formulário de contato entrega as mensagens:
 * - `email`: envia por e-mail via Resend (RESEND_API_KEY + CONTACT_TO_EMAIL).
 * - `log`: só valida e registra metadados — para desenvolvimento/testes,
 *   ou quando CONTACT_DELIVERY_MODE=log é definido de propósito.
 * - `unconfigured`: produção sem destino configurado. A rota responde 503
 *   em vez de aceitar a mensagem e perdê-la em silêncio.
 */
export type ContactDeliveryConfig =
  | { mode: "email"; apiKey: string; to: string; from: string }
  | { mode: "log" }
  | { mode: "unconfigured" };

export class ContactDeliveryError extends Error {
  constructor(
    message: string,
    readonly status?: number
  ) {
    super(message);
    this.name = "ContactDeliveryError";
  }
}

export function resolveDeliveryConfig(
  env: Record<string, string | undefined>
): ContactDeliveryConfig {
  if (env.CONTACT_DELIVERY_MODE === "log") {
    return { mode: "log" };
  }

  const apiKey = env.RESEND_API_KEY?.trim();
  const to = env.CONTACT_TO_EMAIL?.trim();

  if (apiKey && to) {
    return { mode: "email", apiKey, to, from: env.CONTACT_FROM_EMAIL?.trim() || DEFAULT_FROM };
  }

  return env.NODE_ENV === "production" ? { mode: "unconfigured" } : { mode: "log" };
}

function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export function buildContactEmail(values: ContactFormValues): { subject: string; text: string } {
  const productLabel =
    PRODUCT_INTEREST_OPTIONS.find((option) => option.value === values.productInterest)?.label ??
    values.productInterest;

  const subject = `[Site TecnoDreamer] ${singleLine(values.subject)}`;

  const text = [
    "Nova mensagem enviada pelo formulário de contato do site.",
    "",
    `Nome: ${singleLine(values.name)}`,
    `E-mail: ${values.email}`,
    `Empresa: ${values.company ? singleLine(values.company) : "—"}`,
    `Telefone: ${values.phone ? singleLine(values.phone) : "—"}`,
    `Produto de interesse: ${productLabel}`,
    "",
    "Mensagem:",
    values.message,
    "",
    "—",
    "Responda a este e-mail para falar diretamente com quem escreveu.",
  ].join("\n");

  return { subject, text };
}

/**
 * Envia a mensagem pelo Resend. Lança `ContactDeliveryError` em qualquer
 * falha (rede, timeout, resposta não-2xx). A mensagem do erro nunca inclui
 * o conteúdo enviado pelo visitante nem a chave de API.
 */
export async function sendContactEmail(
  values: ContactFormValues,
  config: Extract<ContactDeliveryConfig, { mode: "email" }>,
  fetchImpl: typeof fetch = fetch
): Promise<{ id: string | null }> {
  const { subject, text } = buildContactEmail(values);

  let response: Response;
  try {
    response = await fetchImpl(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: config.from,
        to: [config.to],
        reply_to: values.email,
        subject,
        text,
      }),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
  } catch {
    throw new ContactDeliveryError("Falha de rede ou timeout ao chamar o serviço de e-mail.");
  }

  if (!response.ok) {
    throw new ContactDeliveryError(
      `O serviço de e-mail recusou o envio (HTTP ${response.status}).`,
      response.status
    );
  }

  const payload = (await response.json().catch(() => null)) as { id?: unknown } | null;
  return { id: typeof payload?.id === "string" ? payload.id : null };
}
