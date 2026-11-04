import type { CSSProperties } from "react";
import type { Product } from "@/types/product";

/**
 * Variáveis CSS de tingimento por produto, para spread no `style` do
 * elemento raiz de um card/seção/página de produto (`--product-accent`,
 * `--product-accent-strong`, `--product-accent-secondary`, ver
 * `src/app/globals.css`). Elementos descendentes leem essas variáveis
 * via `var(--product-accent)` em vez de referenciar a marca diretamente.
 *
 * Quando o produto não tem `accentColor`, as variáveis apontam para a
 * paleta da TecnoDreamer (ciano/roxo do logo).
 *
 * @param mode O site V3 é todo escuro, então o padrão é "onDark". "onLight"
 *   continua disponível para superfícies claras pontuais.
 */
export function productAccentVars(
  product: Product,
  mode: "onLight" | "onDark" = "onDark"
): CSSProperties {
  const tone = product.accentColor?.[mode];
  const strongFallback = mode === "onLight" ? "var(--brand-blue)" : "var(--brand-cyan)";

  return {
    "--product-accent": tone?.primary ?? "var(--brand-cyan)",
    "--product-accent-strong": tone?.primary ?? strongFallback,
    "--product-accent-secondary": tone?.secondary ?? "var(--brand-purple)",
  } as CSSProperties;
}
