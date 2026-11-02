import { NextResponse } from "next/server";
import { contactFormSchema } from "@/schemas/contact";
import { isRateLimited } from "@/lib/rate-limit";
import {
  ContactDeliveryError,
  resolveDeliveryConfig,
  sendContactEmail,
} from "@/lib/contact-mail";

const MAX_BODY_BYTES = 10_000;

function getClientIdentifier(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]!.trim();
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  const identifier = getClientIdentifier(request);

  if (isRateLimited(identifier)) {
    return NextResponse.json(
      { ok: false, error: "Muitas tentativas. Tente novamente em alguns instantes." },
      { status: 429 }
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { ok: false, error: "Requisição muito grande." },
      { status: 413 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Corpo da requisição inválido." },
      { status: 400 }
    );
  }

  const result = contactFormSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Dados inválidos.",
        fieldErrors: result.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const { name, email, subject, productInterest } = result.data;

  // Log seguro: nunca registra o corpo completo da mensagem do usuário.
  const safeMetadata = {
    subject,
    productInterest,
    hasCompany: Boolean(result.data.company),
    emailDomain: email.split("@")[1] ?? "desconhecido",
    nameLength: name.length,
  };

  const delivery = resolveDeliveryConfig(process.env);

  if (delivery.mode === "unconfigured") {
    // Falha alto em vez de aceitar a mensagem e perdê-la em silêncio.
    console.error("[contato] entrega não configurada — mensagem NÃO enviada", safeMetadata);
    return NextResponse.json(
      { ok: false, error: "O envio de mensagens está indisponível no momento." },
      { status: 503 }
    );
  }

  if (delivery.mode === "email") {
    try {
      const { id } = await sendContactEmail(result.data, delivery);
      console.info("[contato] mensagem enviada por e-mail", { ...safeMetadata, messageId: id });
    } catch (error) {
      console.error("[contato] falha ao enviar por e-mail", {
        ...safeMetadata,
        reason: error instanceof ContactDeliveryError ? error.message : "erro inesperado",
      });
      return NextResponse.json(
        { ok: false, error: "Não foi possível enviar sua mensagem agora." },
        { status: 502 }
      );
    }
  } else {
    console.info("[contato] novo envio (modo log, sem e-mail)", safeMetadata);
  }

  return NextResponse.json({ ok: true });
}
