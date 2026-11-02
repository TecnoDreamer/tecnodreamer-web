import { afterEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/contato/route";

const VALID_BODY = {
  name: "Maria Souza",
  email: "maria@example.com",
  company: "",
  phone: "",
  subject: "Quero saber mais",
  productInterest: "petconnect",
  message: "Gostaria de mais informações sobre o produto.",
  privacyConsent: true,
};

let requestCounter = 0;

function makeRequest(body: unknown): Request {
  requestCounter += 1;
  return new Request("http://localhost/api/contato", {
    method: "POST",
    // IP distinto por requisição para não esbarrar no rate limit entre testes.
    headers: { "Content-Type": "application/json", "x-forwarded-for": `10.0.0.${requestCounter}` },
    body: JSON.stringify(body),
  });
}

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("POST /api/contato", () => {
  it("rejeita dados inválidos com 400", async () => {
    vi.stubEnv("CONTACT_DELIVERY_MODE", "log");
    const response = await POST(makeRequest({ ...VALID_BODY, email: "nao-e-email" }));
    expect(response.status).toBe(400);
  });

  it("modo log: aceita sem chamar serviço de e-mail", async () => {
    vi.stubEnv("CONTACT_DELIVERY_MODE", "log");
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    vi.spyOn(console, "info").mockImplementation(() => {});

    const response = await POST(makeRequest(VALID_BODY));

    expect(response.status).toBe(200);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("modo e-mail: envia e responde 200", async () => {
    vi.stubEnv("RESEND_API_KEY", "re_test_key");
    vi.stubEnv("CONTACT_TO_EMAIL", "dono@example.com");
    const fetchMock = vi
      .fn()
      .mockResolvedValue(new Response(JSON.stringify({ id: "msg_1" }), { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);
    vi.spyOn(console, "info").mockImplementation(() => {});

    const response = await POST(makeRequest(VALID_BODY));

    expect(response.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("modo e-mail: responde 502 quando o serviço falha, sem vazar a mensagem no log", async () => {
    vi.stubEnv("RESEND_API_KEY", "re_test_key");
    vi.stubEnv("CONTACT_TO_EMAIL", "dono@example.com");
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("{}", { status: 500 })));
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const response = await POST(makeRequest(VALID_BODY));

    expect(response.status).toBe(502);
    expect(JSON.stringify(errorSpy.mock.calls)).not.toContain(VALID_BODY.message);
    expect(JSON.stringify(errorSpy.mock.calls)).not.toContain("re_test_key");
  });

  it("produção sem configuração: responde 503 em vez de perder a mensagem", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("RESEND_API_KEY", "");
    vi.stubEnv("CONTACT_TO_EMAIL", "");
    vi.stubEnv("CONTACT_DELIVERY_MODE", "");
    vi.spyOn(console, "error").mockImplementation(() => {});

    const response = await POST(makeRequest(VALID_BODY));

    expect(response.status).toBe(503);
  });
});
