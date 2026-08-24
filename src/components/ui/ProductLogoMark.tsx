import Image from "next/image";
import type { Product } from "@/types/product";
import { cn } from "@/lib/utils";

const SIZE_CLASSES: Record<"sm" | "md" | "lg", string> = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-16 w-16",
};

const IMAGE_SIZES: Record<"sm" | "md" | "lg", number> = {
  sm: 36,
  md: 44,
  lg: 64,
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
 * Marca visual por produto. Quando o produto tem um logotipo real
 * (`product.logoSrc`, PNG com fundo transparente em /public/logos),
 * exibe a imagem diretamente. Sem logotipo definido ainda, cai para um
 * anel em gradiente da marca com o ícone do produto sobre fundo escuro
 * — ecoa a composição do logotipo oficial da TecnoDreamer (anel colorido
 * + centro escuro) até que um logotipo real exista.
 */
export function ProductLogoMark({ product, size = "md", className }: ProductLogoMarkProps) {
  if (product.logoSrc) {
    const pixelSize = IMAGE_SIZES[size];
    return (
      <div
        className={cn("relative shrink-0", SIZE_CLASSES[size], className)}
        style={{ width: pixelSize, height: pixelSize }}
      >
        <Image
          src={product.logoSrc}
          alt={`Logotipo ${product.name}`}
          fill
          sizes={`${pixelSize}px`}
          className="object-contain"
        />
      </div>
    );
  }

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
