import { test, expect } from "@playwright/test";

test.describe("Header", () => {
  for (const path of ["/", "/empresa", "/contato", "/produtos/petconnect"]) {
    test(`transição de transparente para sólido ao rolar em ${path}`, async ({ page }) => {
      await page.goto(path);
      const header = page.locator("header");

      await expect(header).toHaveClass(/bg-transparent/);

      await page.mouse.wheel(0, 400);
      await page.waitForTimeout(300);

      await expect(header).not.toHaveClass(/bg-transparent/);
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
