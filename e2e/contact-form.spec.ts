import { test, expect } from "@playwright/test";

test.describe("Formulário de contato", () => {
  test("exibe erros de validação ao enviar o formulário vazio", async ({ page }) => {
    await page.goto("/contato");
    await page.getByRole("button", { name: "Enviar mensagem" }).click();

    await expect(page.getByText("Informe seu nome completo.")).toBeVisible();
    await expect(page.getByText("Informe seu e-mail.")).toBeVisible();
    await expect(page.getByText("É necessário aceitar a política de privacidade.")).toBeVisible();
  });

  test("envia o formulário com dados válidos e exibe confirmação", async ({ page }) => {
    await page.goto("/contato");

    await page.getByLabel("Nome *").fill("Maria Souza");
    await page.getByLabel("E-mail *").fill("maria@example.com");
    await page.getByLabel("Assunto *").fill("Quero saber mais sobre o PetConnect");
    await page.getByLabel("Produto de interesse *").selectOption("petconnect");
    await page
      .getByLabel("Mensagem *")
      .fill("Gostaria de mais informações sobre o lançamento do PetConnect.");
    await page.getByLabel(/Li e concordo com a/).check();

    await page.getByRole("button", { name: "Enviar mensagem" }).click();

    await expect(page.getByText("Mensagem enviada com sucesso!")).toBeVisible();
  });
});
