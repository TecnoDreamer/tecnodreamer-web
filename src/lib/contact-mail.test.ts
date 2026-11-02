import { describe, expect, it, vi } from "vitest";
import {
  buildContactEmail,
  ContactDeliveryError,
  resolveDeliveryConfig,
  sendContactEmail,
} from "@/lib/contact-mail";
import type { ContactFormValues } from "@/schemas/contact";

const VALUES: ContactFormValues = {
  name: "Maria Souza",
  email: "maria@example.com",
  company: "Empresa X",
  phone: "(19) 99999-9999",
  subject: "Quero saber mais",
  productInterest: "petconnect",
  message: "Gostaria de mais informações sobre o produto.",
  privacyConsent: true,
};

const EMAIL_CONFIG = {
  mode: "email" as const,
  apiKey: "re_test_key",
  to: "dono@example.com",
  from: "TecnoDreamer <onboarding@resend.dev>",
};

describe("resolveDeliveryConfig", () => {
  it("usa e-mail quando chave e destino estão definidos", () => {
    const config = resolveDeliveryConfig({
      RESEND_API_KEY: "re_abc",
      CONTACT_TO_EMAIL: "dono@example.com",
      NODE_ENV: "production",
    });
    expect(config).toEqual({
      mode: "email",
      apiKey: "re_abc",
      to: "dono@example.com",
      from: "TecnoDreamer <onboarding@resend.dev>",
    });
  });

  it("respeita CONTACT_FROM_EMAIL quando definido", () => {
    const config = resolveDeliveryConfig({
      RESEND_API_KEY: "re_abc",
      CONTACT_TO_EMAIL: "dono@example.com",
      CONTACT_FROM_EMAIL: "TecnoDreamer <contato@tecnodreamer.com.br>",
    });
    expect(config).toMatchObject({ from: "TecnoDreamer <contato@tecnodreamer.com.br>" });
  });

  it("falha alto em produção sem configuração", () => {
    expect(resolveDeliveryConfig({ NODE_ENV: "production" })).toEqual({ mode: "unconfigured" });
  });

  it("não considera configurado se falta o destino", () => {
    expect(resolveDeliveryConfig({ RESEND_API_KEY: "re_abc", NODE_ENV: "production" })).toEqual({
      mode: "unconfigured",
    });
  });

  it("usa modo log fora de produção sem configuração", () => {
    expect(resolveDeliveryConfig({ NODE_ENV: "development" })).toEqual({ mode: "log" });
  });

  it("CONTACT_DELIVERY_MODE=log vence a configuração de e-mail", () => {
    expect(
      resolveDeliveryConfig({
        CONTACT_DELIVERY_MODE: "log",
        RESEND_API_KEY: "re_abc",
        CONTACT_TO_EMAIL: "dono@example.com",
        NODE_ENV: "production",
      })
    ).toEqual({ mode: "log" });
  });
});

describe("buildContactEmail", () => {
  it("monta assunto e corpo com todos os campos", () => {
    const { subject, text } = buildContactEmail(VALUES);
    expect(subject).toBe("[Site TecnoDreamer] Quero saber mais");
    expect(text).toContain("Nome: Maria Souza");
    expect(text).toContain("E-mail: maria@example.com");
    expect(text).toContain("Empresa: Empresa X");
    expect(text).toContain("Produto de interesse: PetConnect");
    expect(text).toContain(VALUES.message);
  });

  it("remove quebras de linha do assunto e do nome (sem injeção de cabeçalho)", () => {
    const { subject, text } = buildContactEmail({
      ...VALUES,
      subject: "Oi\r\nBcc: alguem@example.com",
      name: "Maria\nSouza",
    });
    expect(subject).not.toMatch(/[\r\n]/);
    expect(text).toContain("Nome: Maria Souza");
  });

  it("usa travessão para campos opcionais vazios", () => {
    const { text } = buildContactEmail({ ...VALUES, company: "", phone: "" });
    expect(text).toContain("Empresa: —");
    expect(text).toContain("Telefone: —");
  });
});

describe("sendContactEmail", () => {
  it("chama o Resend com autenticação, destino e reply_to do visitante", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ id: "msg_123" }), { status: 200 })
    );

    const result = await sendContactEmail(VALUES, EMAIL_CONFIG, fetchMock as unknown as typeof fetch);

    expect(result).toEqual({ id: "msg_123" });
    const [url, init] = fetchMock.mock.calls[0]!;
    expect(url).toBe("https://api.resend.com/emails");
    expect(init.headers.Authorization).toBe("Bearer re_test_key");
    const body = JSON.parse(init.body);
    expect(body).toMatchObject({
      from: EMAIL_CONFIG.from,
      to: ["dono@example.com"],
      reply_to: "maria@example.com",
    });
    expect(body.subject).toContain("Quero saber mais");
  });

  it("lança erro sem vazar chave nem mensagem quando o Resend recusa", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response("{}", { status: 403 }));

    const promise = sendContactEmail(VALUES, EMAIL_CONFIG, fetchMock as unknown as typeof fetch);

    await expect(promise).rejects.toBeInstanceOf(ContactDeliveryError);
    await expect(promise).rejects.toMatchObject({ status: 403 });
    await expect(promise).rejects.not.toThrow(/re_test_key|Gostaria/);
  });

  it("lança erro quando a rede falha", async () => {
    const fetchMock = vi.fn().mockRejectedValue(new TypeError("fetch failed"));

    await expect(
      sendContactEmail(VALUES, EMAIL_CONFIG, fetchMock as unknown as typeof fetch)
    ).rejects.toBeInstanceOf(ContactDeliveryError);
  });
});
