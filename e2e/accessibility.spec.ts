import { test, expect } from "@playwright/test";

test.describe("Acessibilidade", () => {
  test("prefers-reduced-motion: conteúdo com Reveal já nasce visível, sem depender de scroll", async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    // Título da seção "Diferenciais", bem abaixo do viewport inicial —
    // sob reduced motion deve ficar com opacidade 1 assim que o React
    // hidrata, mesmo sem ter cruzado o viewport ainda (toHaveCSS re-
    // tenta automaticamente até a hidratação assentar).
    const heading = page.getByRole("heading", { name: "Diferenciais" });
    await expect(heading.locator("..")).toHaveCSS("opacity", "1");
  });

  test("Tab percorre o formulário de contato na ordem esperada", async ({ page }) => {
    await page.goto("/contato");

    await page.getByLabel("Nome *").focus();
    const order = ["Nome *", "E-mail *", "Empresa", "Telefone", "Assunto *"];

    for (const label of order) {
      await expect(page.getByLabel(label, { exact: true })).toBeFocused();
      await page.keyboard.press("Tab");
    }
  });

  test("skip de foco não fica preso em nenhum elemento sem outline visível", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    const outline = await page.evaluate(() => {
      const el = document.activeElement as HTMLElement;
      return getComputedStyle(el).outlineStyle;
    });
    expect(outline).not.toBe("none");
  });
});
