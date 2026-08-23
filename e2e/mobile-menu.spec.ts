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

  test("ESC fecha o menu e devolve o foco ao botão de alternância", async ({ page }) => {
    await page.goto("/");

    const menuButton = page.getByRole("button", { name: "Abrir menu" });
    await menuButton.click();

    const mobileNav = page.getByRole("navigation", { name: "Navegação mobile" });
    await expect(mobileNav).toBeVisible();

    await page.keyboard.press("Escape");

    await expect(mobileNav).toBeHidden();
    await expect(page.getByRole("button", { name: "Abrir menu" })).toBeFocused();
  });

  test("bloqueia o scroll do body enquanto o menu está aberto", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Abrir menu" }).click();
    await expect(page.getByRole("navigation", { name: "Navegação mobile" })).toBeVisible();

    const overflow = await page.evaluate(() => document.body.style.overflow);
    expect(overflow).toBe("hidden");
  });
});
