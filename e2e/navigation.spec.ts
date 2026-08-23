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
    await page.getByRole("link", { name: "Conhecer produto" }).nth(1).click();
    await expect(page).toHaveURL("/produtos/petconnect");
    await expect(page.getByRole("heading", { name: "PetConnect", level: 1 })).toBeVisible();
  });

  test("Home → Sistema de Gestão Pet", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Conhecer produto" }).first().click();
    await expect(page).toHaveURL("/produtos/gestao-pet");
    await expect(
      page.getByRole("heading", { name: "Sistema de Gestão Pet", level: 1 })
    ).toBeVisible();
  });

  test("Home → Marketing Analytics", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Conhecer produto" }).nth(2).click();
    await expect(page).toHaveURL("/produtos/marketing-analytics");
    await expect(
      page.getByRole("heading", { name: "Marketing Analytics", level: 1 })
    ).toBeVisible();
  });

  test("Home → Empresa → Equipe", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Empresa", exact: true }).first().click();
    await expect(page).toHaveURL("/empresa");

    await page.getByRole("link", { name: "Equipe", exact: true }).first().click();
    await expect(page).toHaveURL("/equipe");
  });
});
