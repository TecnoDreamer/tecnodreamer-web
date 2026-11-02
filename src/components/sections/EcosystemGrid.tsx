import Link from "next/link";
import { ArrowUpRight, Code2, LineChart, PawPrint } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Product } from "@/types/product";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductLogoMark } from "@/components/ui/ProductLogoMark";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY } from "@/constants/company";
import { getProductBySlug } from "@/constants/products";
import { productAccentVars } from "@/lib/productAccent";
import { cn } from "@/lib/utils";

/**
 * Grade técnica do ecossistema: 3 células de produto (links para as páginas
 * reais) e 3 células de apoio com públicos e tecnologias tirados dos dados
 * do repositório. Desktop: 4 colunas × 2 linhas. Mobile: produtos primeiro,
 * células de apoio depois.
 */

function requireProduct(slug: string): Product {
  const product = getProductBySlug(slug);
  if (!product) throw new Error(`Produto ${slug} não encontrado em PRODUCTS`);
  return product;
}

const petEPet = requireProduct("pet-e-pet");
const petConnect = requireProduct("petconnect");
const lucratix = requireProduct("lucratix");

const petAudience = Array.from(new Set([...petEPet.audience, ...petConnect.audience.slice(0, 1)]));

type Cell =
  | { kind: "product"; product: Product; index: string; className: string }
  | { kind: "support"; icon: LucideIcon; label: string; title: string; items: readonly string[]; className: string };

const CELLS: Cell[] = [
  { kind: "product", product: petEPet, index: "01", className: "lg:col-span-2" },
  {
    kind: "support",
    icon: PawPrint,
    label: "Segmento",
    title: "Mercado pet",
    items: petAudience,
    className: "order-last lg:order-none",
  },
  { kind: "product", product: petConnect, index: "02", className: "" },
  {
    kind: "support",
    icon: Code2,
    label: "Tecnologia",
    title: "Web + Mobile",
    items: COMPANY.technologies,
    className: "order-last lg:order-none",
  },
  { kind: "product", product: lucratix, index: "03", className: "sm:col-span-2" },
  {
    kind: "support",
    icon: LineChart,
    label: "Segmento",
    title: "Marketing orientado a dados",
    items: lucratix.audience.slice(0, 2),
    // No tablet (2 colunas) é a 5ª célula de apoio sozinha na linha.
    className: "order-last sm:col-span-2 lg:order-none lg:col-span-1",
  },
];

export function EcosystemGrid() {
  return (
    <Section tone="background" aria-labelledby="ecossistema-title">
      <SectionHeading
        index="01"
        eyebrow="Ecossistema"
        id="ecossistema-title"
        title={
          <>
            Um portfólio. <span className="text-foreground-muted">Três problemas reais.</span>
          </>
        }
        description={COMPANY.principles[2]}
      />

      <Reveal className="corner-ticks">
        <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {CELLS.map((cell) =>
            cell.kind === "product" ? (
              <ProductCell key={cell.product.slug} {...cell} />
            ) : (
              <SupportCell key={cell.title} {...cell} />
            )
          )}
        </ul>
      </Reveal>
    </Section>
  );
}

function ProductCell({ product, index, className }: { product: Product; index: string; className: string }) {
  return (
    <li
      style={productAccentVars(product)}
      className={cn(
        "group relative flex min-h-52 flex-col justify-between gap-8 bg-background p-6 transition-colors sm:min-h-64 duration-300 hover:bg-surface sm:p-8",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="tech-grid-bg pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative flex items-start justify-between gap-4">
        <span className="font-mono text-micro font-medium uppercase text-foreground-muted">
          <span style={{ color: "var(--product-accent)" }}>/{index}</span> {product.category}
        </span>
        <ArrowUpRight
          size={20}
          aria-hidden="true"
          className="text-foreground-muted transition-[transform,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--product-accent)]"
        />
      </div>
      <div className="relative flex items-end gap-5">
        <ProductLogoMark product={product} size="lg" />
        <div className="min-w-0">
          <h3 className="text-h3 font-semibold text-foreground">
            <Link
              href={`/produtos/${product.slug}`}
              aria-label={`Ver ${product.name}`}
              className="after:absolute after:inset-0"
            >
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-foreground-muted">{product.tagline}</p>
        </div>
      </div>
    </li>
  );
}

function SupportCell({
  icon: Icon,
  label,
  title,
  items,
  className,
}: {
  icon: LucideIcon;
  label: string;
  title: string;
  items: readonly string[];
  className: string;
}) {
  return (
    <li className={cn("flex min-h-48 flex-col justify-between gap-8 sm:min-h-64 bg-background p-6 sm:p-8", className)}>
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-micro font-medium uppercase text-foreground-muted">{label}</span>
        <span
          aria-hidden="true"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-brand-cyan"
        >
          <Icon size={18} />
        </span>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border px-2.5 py-1 text-xs text-foreground-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
