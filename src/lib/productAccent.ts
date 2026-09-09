import type { CSSProperties } from "react";
import type { Product } from "@/types/product";

/**
 * Variáveis CSS de tingimento por produto, para spread no `style` do
 * elemento raiz de um card/seção/página de produto (`--product-accent`,
 * `--product-accent-strong`, `--product-accent-secondary`, ver
 * `src/app/globals.css`). Elementos descendentes leem essas variáveis
 * via `var(--product-accent)` (inline `style`, para especificidade
 * garantida) em vez de referenciar a marca da TecnoDreamer diretamente.
 *
 * Quando o produto não tem `accentColor` definido, retorna as mesmas
 * variáveis apontando para a paleta padrão da TecnoDreamer — o visual
 * não muda para produtos sem marca própria (Pet & Pet, PetConnect).
 *
 * @param mode "onLight" para seções claras (texto precisa de contraste
 *   AA); "onDark" para seções escuras (`Section tone="ink"`).
 */
export function productAccentVars(product: Product, mode: "onLight" | "onDark"): CSSProperties {
  const tone = product.accentColor?.[mode];
  const strongFallback = mode === "onLight" ? "var(--color-brand-primary-strong)" : "var(--color-brand-primary)";

  return {
    "--product-accent": tone?.primary ?? "var(--color-brand-primary)",
    "--product-accent-strong": tone?.primary ?? strongFallback,
    "--product-accent-secondary": tone?.secondary ?? "var(--color-brand-secondary)",
  } as CSSProperties;
}
