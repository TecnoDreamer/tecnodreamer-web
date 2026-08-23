import { test, expect } from "@playwright/test";

test.describe("Destaque interativo de produtos (Home)", () => {
  test("clicar em uma aba troca o painel exibido", async ({ page }) => {
    await page.goto("/");

    const tablist = page.getByRole("tablist", { name: "Produtos TecnoDreamer" });
    const petconnectTab = tablist.getByRole("tab", { name: /PetConnect/ });

    await petconnectTab.click();
    await expect(petconnectTab).toHaveAttribute("aria-selected", "true");

    const panel = page.getByRole("tabpanel");
    await expect(panel.getByRole("heading", { name: "PetConnect", level: 3 })).toBeVisible();
  });

  test("setas do teclado navegam entre as abas", async ({ page }) => {
    await page.goto("/");

    const firstTab = page.getByRole("tab", { name: /Sistema de Gestão Pet/ });
    await firstTab.focus();
    await page.keyboard.press("ArrowDown");

    const secondTab = page.getByRole("tab", { name: /PetConnect/ });
    await expect(secondTab).toBeFocused();
    await expect(secondTab).toHaveAttribute("aria-selected", "true");
  });
});
