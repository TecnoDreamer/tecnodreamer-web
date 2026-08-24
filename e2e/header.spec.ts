import { test, expect } from "@playwright/test";

test.describe("Header", () => {
  for (const path of ["/", "/empresa", "/contato", "/produtos/petconnect"]) {
    test(`transição de transparente para sólido ao rolar em ${path}`, async ({
      page,
      isMobile,
    }) => {
      await page.goto(path);
      const header = page.locator("header");

      await expect(header).toHaveClass(/from-ink\/70/);

      // Regressão: o texto do menu precisa ser realmente legível (branco
      // sólido, não só a classe CSS certa) sobre o Hero escuro — ver
      // histórico de bug de contraste no header transparente.
      if (!isMobile) {
        const firstLink = page
          .getByRole("navigation", { name: "Navegação principal" })
          .getByRole("link")
          .first();
        await expect(firstLink).toHaveCSS("color", "rgb(255, 255, 255)");
      }

      await page.mouse.wheel(0, 400);
      await page.waitForTimeout(300);

      await expect(header).not.toHaveClass(/from-ink\/70/);
      await expect(header).toHaveClass(/bg-background\/90/);
    });
  }

  test("header sólido desde o início em páginas sem hero escuro", async ({ page }) => {
    await page.goto("/equipe");
    await expect(page.locator("header")).toHaveClass(/bg-background\/90/);
  });

  test("indica a rota ativa e permite navegação por teclado", async ({ page, isMobile }) => {
    test.skip(isMobile, "navegação desktop fica oculta no viewport mobile");
    await page.goto("/produtos");

    const activeLink = page.getByRole("navigation", { name: "Navegação principal" }).getByRole(
      "link",
      { name: "Produtos" }
    );
    await expect(activeLink).toHaveAttribute("aria-current", "page");

    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("banner").getByRole("link", { name: "TecnoDreamer TecnoDreamer" })
    ).toBeFocused();
  });
});
