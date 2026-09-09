import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/types/product";
import { StatusBadge } from "@/components/ui/Badge";
import { ProductLogoMark } from "@/components/ui/ProductLogoMark";
import { productAccentVars } from "@/lib/productAccent";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article
      style={productAccentVars(product, "onLight")}
      className="product-card-hover group relative flex h-full flex-col gap-4 rounded-lg border border-border bg-background p-6 shadow-sm"
    >
      <div className="flex items-start justify-between gap-3">
        <ProductLogoMark product={product} className="transition-transform duration-300 group-hover:scale-105" />
        <StatusBadge status={product.status} />
      </div>

      <div>
        <p
          className="text-xs font-semibold uppercase tracking-wide"
          style={{ color: "var(--product-accent-strong)" }}
        >
          {product.category}
        </p>
        <h3 className="mt-1 text-xl font-medium text-foreground">{product.name}</h3>
      </div>

      <p className="text-sm text-foreground-muted">{product.tagline}</p>
      <p className="text-sm text-foreground-muted">
        <span className="font-medium text-foreground">Problema: </span>
        {product.problem}
      </p>
      {product.audience.length > 0 && (
        <p className="text-sm text-foreground-muted">
          <span className="font-medium text-foreground">Para: </span>
          {product.audience.join(", ")}
        </p>
      )}

      <Link
        href={`/produtos/${product.slug}`}
        aria-label={`Conhecer ${product.name}`}
        style={{ color: "var(--product-accent-strong)" }}
        className="mt-auto inline-flex w-fit items-center gap-1 text-sm font-medium after:absolute after:inset-0 after:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
      >
        Conhecer produto
        <ArrowRight
          size={16}
          aria-hidden="true"
          className="transition-transform duration-150 ease-standard group-hover:translate-x-1 group-focus-within:translate-x-1"
        />
      </Link>
    </article>
  );
}
