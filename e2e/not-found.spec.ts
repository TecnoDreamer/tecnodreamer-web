import { test, expect } from "@playwright/test";

test("exibe a página 404 customizada para rota inexistente", async ({ page }) => {
  await page.goto("/rota-que-nao-existe");

  await expect(page.getByRole("heading", { name: "Página não encontrada" })).toBeVisible();
  await page.getByRole("link", { name: "Voltar para a Home" }).click();
  await expect(page).toHaveURL("/");
});
