import type { Product } from "@/types/product";
import { cn } from "@/lib/utils";

const SIZE_CLASSES: Record<"sm" | "md" | "lg", string> = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-16 w-16",
};

const ICON_SIZES: Record<"sm" | "md" | "lg", number> = {
  sm: 16,
  md: 20,
  lg: 28,
};

interface ProductLogoMarkProps {
  product: Product;
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * Marca visual por produto — um anel em gradiente da marca (mesmas cores
 * do logotipo oficial) com o ícone do produto sobre fundo escuro, ecoando
 * a composição do logotipo da TecnoDreamer (anel colorido + centro
 * escuro). Não é uma logo desenhada externamente, mas reforça identidade
 * visual própria por produto nos cards, mockups e páginas de produto.
 */
export function ProductLogoMark({ product, size = "md", className }: ProductLogoMarkProps) {
  const Icon = product.icon;

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary p-[2px]",
        SIZE_CLASSES[size],
        className
      )}
    >
      <div className="flex h-full w-full items-center justify-center rounded-full bg-ink text-brand-primary">
        <Icon size={ICON_SIZES[size]} aria-hidden="true" strokeWidth={2.25} />
      </div>
    </div>
  );
}
