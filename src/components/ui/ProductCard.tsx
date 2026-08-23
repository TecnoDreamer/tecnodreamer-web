import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/types/product";
import { StatusBadge } from "@/components/ui/Badge";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-lg border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-medium text-foreground">{product.name}</h3>
        <StatusBadge status={product.status} />
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
        className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-brand-primary-strong hover:underline"
      >
        Conhecer produto
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}
