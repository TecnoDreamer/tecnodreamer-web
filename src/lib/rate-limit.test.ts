import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { isRateLimited } from "@/lib/rate-limit";

describe("isRateLimited", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-01T00:00:00Z"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("permite até 5 requisições por janela para o mesmo identificador", () => {
    const id = "1.2.3.4-test-a";
    for (let i = 0; i < 5; i += 1) {
      expect(isRateLimited(id)).toBe(false);
    }
    expect(isRateLimited(id)).toBe(true);
  });

  it("não afeta identificadores diferentes", () => {
    const idA = "1.2.3.4-test-b";
    const idB = "5.6.7.8-test-b";

    for (let i = 0; i < 5; i += 1) {
      isRateLimited(idA);
    }

    expect(isRateLimited(idA)).toBe(true);
    expect(isRateLimited(idB)).toBe(false);
  });

  it("libera novamente após a janela de tempo expirar", () => {
    const id = "1.2.3.4-test-c";
    for (let i = 0; i < 5; i += 1) {
      isRateLimited(id);
    }
    expect(isRateLimited(id)).toBe(true);

    vi.advanceTimersByTime(61_000);

    expect(isRateLimited(id)).toBe(false);
  });
});
