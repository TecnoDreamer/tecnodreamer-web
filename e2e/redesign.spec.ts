import { test, expect } from "@playwright/test";

/**
 * Redesign V3 (docs/design/DESIGN_SYSTEM_V3.md): estrutura da home, cards
 * dos produtos, logos íntegros, ausência de scroll horizontal nas larguras
 * pedidas e conteúdo acessível sem animação.
 */

const PRODUCTS = [
  { name: "Pet & Pet", slug: "pet-e-pet" },
  { name: "PetConnect", slug: "petconnect" },
  { name: "Lucratix", slug: "lucratix" },
];

const PAGES = [
  "/",
  "/empresa",
  "/produtos",
  "/produtos/pet-e-pet",
  "/produtos/petconnect",
  "/produtos/lucratix",
  "/equipe",
  "/contato",
  "/faq",
  "/privacidade",
  "/termos",
];

const WIDTHS = [320, 360, 375, 390, 430, 768, 1024, 1280, 1440, 1920];

test.describe("Home V3", () => {
  // Várias navegações por teste: em modo dev (Turbopack compila sob
  // demanda) o timeout padrão de 30s fica apertado no perfil mobile.
  test.describe.configure({ timeout: 90_000 });

  test("tem um único H1 e as seções principais", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Tecnologia para problemas reais.");

    for (const name of [
      "Um portfólio. Três problemas reais.",
      "Nossos produtos",
      "O que nos diferencia.",
      "Como trabalhamos",
      "Sobre a TecnoDreamer",
      "Vamos conversar sobre o seu problema.",
    ]) {
      await expect(page.getByRole("heading", { level: 2, name })).toBeVisible();
    }
  });

  test("CTAs do herói levam às páginas reais", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Explorar produtos" }).click();
    await expect(page).toHaveURL("/produtos");

    await page.goto("/");
    await page.getByRole("link", { name: "Conhecer a TecnoDreamer" }).click();
    await expect(page).toHaveURL("/empresa");
  });

  for (const product of PRODUCTS) {
    test(`grid do ecossistema e card 0X levam a ${product.name}`, async ({ page }) => {
      await page.goto("/");
      await page.getByRole("link", { name: `Ver ${product.name}` }).click();
      // 1º acesso à rota compila sob demanda em modo dev: pode passar de 15s.
      await expect(page).toHaveURL(`/produtos/${product.slug}`, { timeout: 45_000 });
      await expect(page.getByRole("heading", { level: 1, name: product.name })).toBeVisible();

      await page.goto("/");
      await page.getByRole("link", { name: `Conhecer ${product.name}` }).click();
      // 1º acesso à rota compila sob demanda em modo dev: pode passar de 15s.
      await expect(page).toHaveURL(`/produtos/${product.slug}`, { timeout: 45_000 });
    });
  }

  test("cards de produto mostram status, público e diferencial sem depender de hover", async ({
    page,
  }) => {
    await page.goto("/");
    const cards = page.locator("#produtos-title").locator("xpath=ancestor::section").getByRole("article");
    await expect(cards).toHaveCount(3);
    for (let index = 0; index < 3; index++) {
      const card = cards.nth(index);
      await card.scrollIntoViewIfNeeded();
      await expect(card.getByText("Em desenvolvimento")).toBeVisible();
      await expect(card.getByText("Para", { exact: true })).toBeVisible();
      await expect(card.getByText("Diferencial", { exact: true })).toBeVisible();
    }
  });
});

test.describe("Logos", () => {
  test("logos dos produtos carregam inteiros (object-contain, sem distorção)", async ({ page }) => {
    await page.goto("/produtos");
    for (const product of PRODUCTS) {
      const logo = page.getByRole("img", { name: `Logotipo ${product.name}` }).first();
      await logo.scrollIntoViewIfNeeded();
      await expect(logo).toBeVisible();
      await expect(logo).toHaveCSS("object-fit", "contain");
      await expect
        .poll(() => logo.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0))
        .toBe(true);
    }
  });

  test("logo oficial no header aparece com proporção preservada", async ({ page }) => {
    await page.goto("/");
    const logo = page.getByRole("banner").getByRole("img", { name: "TecnoDreamer" });
    await expect(logo).toBeVisible();
    const box = await logo.boundingBox();
    expect(box?.width).toBe(box?.height);
  });
});

test.describe("Responsividade nas larguras do redesign", () => {
  test.beforeEach(({}, testInfo) => {
    test.skip(testInfo.project.name !== "Desktop Chrome", "viewports definidos manualmente");
  });

  for (const width of WIDTHS) {
    test(`sem scroll horizontal em ${width}px`, async ({ page }) => {
      test.setTimeout(120_000);
      await page.setViewportSize({ width, height: 800 });
      for (const path of PAGES) {
        await page.goto(path);
        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth
        );
        expect(overflow, `${path} em ${width}px`).toBeLessThanOrEqual(1);
      }
    });
  }

  test("viewport baixa (paisagem 844×390): CTAs do herói alcançáveis", async ({ page }) => {
    await page.setViewportSize({ width: 844, height: 390 });
    await page.goto("/");
    const cta = page.getByRole("link", { name: "Explorar produtos" });
    await cta.scrollIntoViewIfNeeded();
    await expect(cta).toBeInViewport();
  });
});

test.describe("Movimento e acesso sem JavaScript", () => {
  test.describe.configure({ timeout: 60_000 });

  test("com reduced motion, todo conteúdo com Reveal aparece sem rolar", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    const hidden = await page.evaluate(
      () =>
        [...document.querySelectorAll("[data-reveal]")].filter(
          (el) => getComputedStyle(el).opacity !== "1"
        ).length
    );
    expect(hidden).toBe(0);
  });

  test("sem JavaScript, o conteúdo continua visível", async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    // Sem JS o Chromium ignora loading="lazy" e baixa todas as imagens antes
    // do "load"; o teste só precisa do HTML e do CSS do SSR.
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("heading", { level: 2, name: "Como trabalhamos" })).toHaveCSS(
      "opacity",
      "1"
    );
    const hidden = await page.evaluate(
      () =>
        [...document.querySelectorAll("[data-reveal]")].filter(
          (el) => getComputedStyle(el).opacity !== "1"
        ).length
    );
    expect(hidden).toBe(0);
    await context.close();
  });
});
