import { test, expect } from "@playwright/test";

test.describe("Navegação principal", () => {
  test("Home → Produtos", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Produtos", exact: true }).first().click();
    await expect(page).toHaveURL("/produtos");
    await expect(page.getByRole("heading", { name: "Produtos", level: 1 })).toBeVisible();
  });

  test("Home → PetConnect", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Conhecer PetConnect" }).click();
    await expect(page).toHaveURL("/produtos/petconnect");
    await expect(page.getByRole("heading", { name: "PetConnect", level: 1 })).toBeVisible();
  });

  test("Home → Pet & Pet", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Conhecer Pet & Pet" }).first().click();
    await expect(page).toHaveURL("/produtos/pet-e-pet");
    await expect(page.getByRole("heading", { name: "Pet & Pet", level: 1 })).toBeVisible();
  });

  test("Home → MarketIQ", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Conhecer MarketIQ" }).click();
    await expect(page).toHaveURL("/produtos/marketing-analytics");
    await expect(page.getByRole("heading", { name: "MarketIQ", level: 1 })).toBeVisible();
  });

  test("Home → Empresa → Equipe", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Empresa", exact: true }).first().click();
    await expect(page).toHaveURL("/empresa");

    await page.getByRole("link", { name: "Equipe", exact: true }).first().click();
    await expect(page).toHaveURL("/equipe");
  });
});
