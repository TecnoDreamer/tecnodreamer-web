import { test, expect, devices } from "@playwright/test";

test.use({ ...devices["Pixel 5"] });

test.describe("Menu mobile", () => {
  test("abre, navega e fecha o menu mobile", async ({ page }) => {
    await page.goto("/");

    const menuButton = page.getByRole("button", { name: "Abrir menu" });
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    const mobileNav = page.getByRole("navigation", { name: "Navegação mobile" });
    await expect(mobileNav).toBeVisible();

    await mobileNav.getByRole("link", { name: "Contato" }).click();
    await expect(page).toHaveURL("/contato");

    await expect(page.getByRole("navigation", { name: "Navegação mobile" })).toBeHidden();
  });
});
