import type { Product } from "@/types/product";
import { StatusBadge } from "@/components/ui/Badge";
import { ProductLogoMark } from "@/components/ui/ProductLogoMark";
import { productAccentVars } from "@/lib/productAccent";

/**
 * Mockup conceitual e abstrato (não uma screenshot real do produto, que
 * ainda não existe) — barras e blocos representando uma interface de
 * dashboard genérica, apenas para comunicar "isto é um software", sem
 * inventar telas ou funcionalidades específicas. Ver docs §12 do prompt
 * de UX/UI ("mockups conceituais, dashboards demonstrativos").
 */
export function ProductMockup({ product }: { product: Product }) {
  return (
    <div
      aria-hidden="true"
      style={productAccentVars(product, "onDark")}
      className="overflow-hidden rounded-lg border border-white/10 bg-ink-elevated backdrop-blur-md"
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="ml-3 text-xs text-white/50">{product.name}</span>
      </div>
      <div className="flex gap-4 p-5">
        <ProductLogoMark product={product} size="sm" />
        <div className="flex-1">
          <div className="h-3 w-2/3 rounded-full bg-white/15" />
          <div className="mt-2 h-2.5 w-1/2 rounded-full bg-white/10" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 px-5 pb-5">
        {[0, 1, 2].map((column) => (
          <div key={column} className="rounded-md bg-white/5 p-3">
            <div className="h-2 w-3/4 rounded-full bg-white/15" />
            <div
              className="mt-3 h-8 rounded-sm"
              style={{
                opacity: 0.5 + column * 0.2,
                background:
                  "linear-gradient(to top, color-mix(in srgb, var(--product-accent) 40%, transparent), color-mix(in srgb, var(--product-accent-secondary) 30%, transparent))",
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-white/10 px-5 py-3">
        <span className="text-xs text-white/50">{product.category}</span>
        <StatusBadge status={product.status} />
      </div>
    </div>
  );
}
