import { test, expect } from "@playwright/test";

test.describe("Header", () => {
  for (const path of ["/", "/empresa", "/produtos", "/equipe", "/contato", "/produtos/petconnect"]) {
    test(`transparente no topo e sólido ao rolar em ${path}`, async ({ page }) => {
      await page.goto(path);
      const header = page.locator("header");

      // Todas as páginas V3 começam com um herói escuro: header transparente.
      await expect(header).toHaveAttribute("data-state", "transparent");

      await page.mouse.wheel(0, 400);
      await expect(header).toHaveAttribute("data-state", "solid");
    });
  }

  test("links do menu ficam legíveis sobre o herói", async ({ page, isMobile }) => {
    test.skip(isMobile, "navegação desktop fica oculta no viewport mobile");
    await page.goto("/");
    const link = page
      .getByRole("navigation", { name: "Navegação principal" })
      .getByRole("link", { name: "Empresa" });
    // --foreground-muted (#9aa8bc): contraste 8,3:1 sobre o fundo.
    await expect(link).toHaveCSS("color", "rgb(154, 168, 188)");
  });

  test("indica a rota ativa e permite navegação por teclado", async ({ page, isMobile }) => {
    test.skip(isMobile, "navegação desktop fica oculta no viewport mobile");
    await page.goto("/produtos");

    const activeLink = page.getByRole("navigation", { name: "Navegação principal" }).getByRole(
      "link",
      { name: "Produtos" }
    );
    await expect(activeLink).toHaveAttribute("aria-current", "page");

    // 1º Tab: link "Pular para o conteúdo"; 2º Tab: marca no header.
    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Pular para o conteúdo" })).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("banner").getByRole("link", { name: "TecnoDreamer TecnoDreamer" })
    ).toBeFocused();
  });

  test("link de pular conteúdo leva o foco ao main", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#conteudo$/);
    await expect(page.locator("main#conteudo")).toBeFocused();
  });
});
