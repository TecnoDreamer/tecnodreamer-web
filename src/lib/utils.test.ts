import { describe, expect, it } from "vitest";
import { cn } from "@/lib/utils";

describe("cn", () => {
  it("junta classes truthy com espaço", () => {
    expect(cn("a", "b", "c")).toBe("a b c");
  });

  it("ignora valores falsy", () => {
    expect(cn("a", false, null, undefined, "b")).toBe("a b");
  });
});
