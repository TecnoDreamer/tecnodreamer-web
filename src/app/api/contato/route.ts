import { NextResponse } from "next/server";
import { contactFormSchema } from "@/schemas/contact";
import { isRateLimited } from "@/lib/rate-limit";

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
  console.info("[contato] novo envio", {
    subject,
    productInterest,
    hasCompany: Boolean(result.data.company),
    emailDomain: email.split("@")[1] ?? "desconhecido",
    nameLength: name.length,
  });

  // TODO: DEFINIR COM PRODUCT OWNER — destino real do lead (e-mail, CRM ou
  // persistência em banco). Nesta fase o envio é apenas validado e logado.

  return NextResponse.json({ ok: true });
}
