import Image from "next/image";
import type { Product } from "@/types/product";
import { cn } from "@/lib/utils";

type LogoSize = "sm" | "md" | "lg" | "xl";

const PIXEL_SIZES: Record<LogoSize, number> = {
  sm: 36,
  md: 48,
  lg: 72,
  xl: 128,
};

const ICON_SIZES: Record<LogoSize, number> = {
  sm: 16,
  md: 20,
  lg: 30,
  xl: 48,
};

interface ProductLogoMarkProps {
  product: Product;
  size?: LogoSize;
  className?: string;
  /** Carrega a imagem com prioridade (só quando é o LCP da página). */
  priority?: boolean;
}

/**
 * Marca visual por produto. Com logotipo real (`product.logoSrc`), mostra a
 * imagem inteira (`object-contain`, sem recorte nem distorção). Logos com
 * `logoPlate: "light"` ganham uma placa clara circular para continuar
 * legíveis no tema escuro. Sem logotipo, cai para um anel em gradiente da
 * marca com o ícone do produto.
 */
export function ProductLogoMark({
  product,
  size = "md",
  className,
  priority = false,
}: ProductLogoMarkProps) {
  const pixelSize = PIXEL_SIZES[size];

  if (product.logoSrc) {
    const hasPlate = product.logoPlate === "light";
    return (
      <div
        className={cn(
          "relative shrink-0",
          hasPlate && "rounded-full bg-[#f6f2ec] ring-1 ring-white/20",
          className
        )}
        style={{ width: pixelSize, height: pixelSize }}
      >
        <Image
          src={product.logoSrc}
          alt={`Logotipo ${product.name}`}
          fill
          sizes={`${pixelSize}px`}
          priority={priority}
          // O PNG do Pet & Pet tem margem transparente ao redor do círculo;
          // o zoom uniforme (o círculo ocupa ~61% do PNG) aproveita a placa
          // sem cortar nem distorcer o desenho.
          className={cn("object-contain", hasPlate && "scale-[1.3]")}
        />
      </div>
    );
  }

  const Icon = product.icon;

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-purple p-[2px]",
        className
      )}
      style={{ width: pixelSize, height: pixelSize }}
    >
      <div className="flex h-full w-full items-center justify-center rounded-full bg-ink text-brand-cyan">
        <Icon size={ICON_SIZES[size]} aria-hidden="true" strokeWidth={2.25} />
      </div>
    </div>
  );
}
