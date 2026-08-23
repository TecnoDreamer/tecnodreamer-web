import { test, expect } from "@playwright/test";

/**
 * QA responsivo (Etapas 10-12 do prompt de UX/UI): smoke test nos
 * breakpoints sugeridos na seção 32, verificando ausência de scroll
 * horizontal indesejado, visibilidade dos elementos-chave e área mínima
 * de toque (~44px) em controles interativos.
 */
const VIEWPORTS = [
  { name: "mobile (390x844)", width: 390, height: 844 },
  { name: "tablet (768x1024)", width: 768, height: 1024 },
  { name: "desktop (1440x900)", width: 1440, height: 900 },
  { name: "desktop grande (1920x1080)", width: 1920, height: 1080 },
];

const PAGES = ["/", "/produtos", "/produtos/petconnect", "/empresa", "/equipe", "/contato"];

test.describe("QA responsivo", () => {
  // Os viewports são definidos manualmente por teste (ver VIEWPORTS abaixo),
  // então rodar esta suíte nos dois projetos (Desktop/Mobile Chrome)
  // apenas duplicaria trabalho sem cobrir nada novo.
  test.beforeEach(({}, testInfo) => {
    test.skip(testInfo.project.name !== "Desktop Chrome");
  });

  for (const viewport of VIEWPORTS) {
    test.describe(viewport.name, () => {
      test.use({ viewport: { width: viewport.width, height: viewport.height } });

      for (const path of PAGES) {
        test(`${path} não tem scroll horizontal indesejado`, async ({ page }) => {
          await page.goto(path);
          const { scrollWidth, clientWidth } = await page.evaluate(() => ({
            scrollWidth: document.documentElement.scrollWidth,
            clientWidth: document.documentElement.clientWidth,
          }));
          expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
        });
      }

      test("Home: header, hero e footer visíveis", async ({ page }) => {
        await page.goto("/");
        await expect(page.locator("header")).toBeVisible();
        await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
        await expect(page.locator("footer")).toBeVisible();
      });
    });
  }

  test("botão do menu mobile tem área de toque confortável (390px)", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    const box = await page.getByRole("button", { name: "Abrir menu" }).boundingBox();
    expect(box?.width).toBeGreaterThanOrEqual(44);
    expect(box?.height).toBeGreaterThanOrEqual(44);
  });

  test("CTA principal tem altura confortável em mobile (390px)", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    const box = await page.getByRole("link", { name: "Conhecer os produtos" }).boundingBox();
    expect(box?.height).toBeGreaterThanOrEqual(44);
  });
});
