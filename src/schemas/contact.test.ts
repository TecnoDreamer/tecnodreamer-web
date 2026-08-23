import { describe, expect, it } from "vitest";
import { contactFormSchema } from "@/schemas/contact";

const validPayload = {
  name: "Maria Souza",
  email: "maria@example.com",
  company: "",
  phone: "",
  subject: "Quero saber mais",
  productInterest: "petconnect" as const,
  message: "Gostaria de mais informações sobre o produto, por favor.",
  privacyConsent: true as const,
};

describe("contactFormSchema", () => {
  it("aceita um payload válido completo", () => {
    const result = contactFormSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
  });

  it("rejeita nome vazio", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, name: "" });
    expect(result.success).toBe(false);
  });

  it("rejeita e-mail inválido", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, email: "não-é-email" });
    expect(result.success).toBe(false);
  });

  it("rejeita mensagem muito curta", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, message: "oi" });
    expect(result.success).toBe(false);
  });

  it("rejeita produto de interesse fora da lista permitida", () => {
    const result = contactFormSchema.safeParse({
      ...validPayload,
      productInterest: "produto-inexistente",
    });
    expect(result.success).toBe(false);
  });

  it("exige o consentimento de privacidade marcado", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, privacyConsent: false });
    expect(result.success).toBe(false);
  });

  it("rejeita telefone com formato inválido", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, phone: "não é telefone" });
    expect(result.success).toBe(false);
  });

  it("aceita telefone com formato válido", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, phone: "(11) 91234-5678" });
    expect(result.success).toBe(true);
  });

  describe("entradas maliciosas são tratadas como texto comum, nunca interpretadas", () => {
    const maliciousInputs = [
      "<script>alert(1)</script>",
      "' OR '1'='1",
      "../../etc/passwd",
    ];

    it.each(maliciousInputs)("aceita '%s' como texto válido no campo mensagem", (payload) => {
      const result = contactFormSchema.safeParse({
        ...validPayload,
        message: `Mensagem de teste ${payload} com conteúdo suficiente.`,
      });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.message).toContain(payload);
      }
    });

    it.each(maliciousInputs)("aceita '%s' como texto válido no campo nome", (payload) => {
      const result = contactFormSchema.safeParse({ ...validPayload, name: payload });
      expect(result.success).toBe(true);
    });
  });
});
