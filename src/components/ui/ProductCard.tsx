import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/types/product";
import { StatusBadge } from "@/components/ui/Badge";
import { ProductLogoMark } from "@/components/ui/ProductLogoMark";
import { productAccentVars } from "@/lib/productAccent";

interface ProductCardProps {
  product: Product;
  /** Posição no portfólio, exibida como "01", "02"… */
  index: number;
  /** Nível do título do card (h2 na listagem, h3 dentro de seções). */
  headingLevel?: "h2" | "h3";
}

/**
 * Card grande de produto (V3): numeração, logo oficial, categoria, status,
 * público, diferencial principal e CTA. Todo o conteúdo fica visível; o
 * hover só acrescenta brilho e movimento. O card inteiro é clicável pelo
 * link "Conhecer {produto}" (pseudo-elemento cobrindo o card).
 */
export function ProductCard({ product, index, headingLevel = "h3" }: ProductCardProps) {
  const Heading = headingLevel;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      style={productAccentVars(product)}
      className="product-card-hover group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
        style={{ background: "radial-gradient(circle, var(--product-accent), transparent 70%)" }}
      />

      <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-border px-6 py-4">
        <span className="font-mono text-micro font-medium uppercase text-foreground-muted">
          <span style={{ color: "var(--product-accent)" }}>{number}</span> / {product.category}
        </span>
        <StatusBadge status={product.status} />
      </div>

      <div className="relative flex flex-1 flex-col gap-5 p-6">
        <ProductLogoMark product={product} size="lg" />

        <div>
          <Heading className="text-h3 font-semibold text-foreground">{product.name}</Heading>
          <p className="mt-2 text-sm text-foreground-muted">{product.tagline}</p>
        </div>

        <dl className="flex flex-col gap-4 border-t border-border pt-5 text-sm">
          {product.audience.length > 0 && (
            <div>
              <dt className="font-mono text-micro font-medium uppercase text-foreground-muted">Para</dt>
              <dd className="mt-1 text-foreground">{product.audience.join(", ")}</dd>
            </div>
          )}
          {product.differentiators[0] && (
            <div>
              <dt className="font-mono text-micro font-medium uppercase text-foreground-muted">
                Diferencial
              </dt>
              <dd className="mt-1 text-foreground-muted">{product.differentiators[0]}</dd>
            </div>
          )}
        </dl>

        <Link
          href={`/produtos/${product.slug}`}
          aria-label={`Conhecer ${product.name}`}
          className="mt-auto inline-flex min-h-11 w-fit items-center gap-3 text-sm font-semibold text-foreground after:absolute after:inset-0 after:rounded-lg"
        >
          Conhecer produto
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong transition-[transform,background-color,border-color,color] duration-300 ease-standard group-hover:rotate-45 group-hover:border-transparent group-hover:bg-[var(--product-accent)] group-hover:text-ink"
          >
            <ArrowUpRight size={16} />
          </span>
        </Link>
      </div>
    </article>
  );
}
