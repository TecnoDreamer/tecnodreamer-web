import { test, expect } from "@playwright/test";

test("FAQ geral é acessível pelo footer e lista as perguntas", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("contentinfo").getByRole("link", { name: "FAQ" }).click();

  await expect(page).toHaveURL("/faq");
  await expect(page.getByRole("heading", { name: "Perguntas Frequentes", level: 1 })).toBeVisible();
  await expect(
    page.getByText("A TecnoDreamer já tem produtos disponíveis para uso?")
  ).toBeVisible();
});
