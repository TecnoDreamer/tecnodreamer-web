"use client";

import { useState, type KeyboardEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { ProductMockup } from "@/components/ui/ProductMockup";
import { ProductLogoMark } from "@/components/ui/ProductLogoMark";
import { Reveal } from "@/components/ui/Reveal";
import { PRODUCTS } from "@/constants/products";
import { cn } from "@/lib/utils";

export function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = PRODUCTS[activeIndex]!;

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const direction = event.key === "ArrowDown" ? 1 : -1;
    const nextIndex = (activeIndex + direction + PRODUCTS.length) % PRODUCTS.length;
    setActiveIndex(nextIndex);
    document.getElementById(`product-tab-${nextIndex}`)?.focus();
  }

  return (
    <Section tone="ink">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-wide text-brand-primary">
          Destaque
        </p>
        <h2 className="mt-2 text-3xl font-semibold">Explore cada produto</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Selecione um produto do portfólio para ver seus benefícios principais.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,320px)_1fr]">
        <Reveal
          as="div"
          role="tablist"
          aria-label="Produtos TecnoDreamer"
          aria-orientation="vertical"
          className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:overflow-visible"
        >
          {PRODUCTS.map((product, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={product.slug}
                id={`product-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="product-tabpanel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={handleTabKeyDown}
                className={cn(
                  "flex shrink-0 items-center gap-3 rounded-md px-4 py-3 text-left transition-colors duration-150",
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white/90"
                )}
              >
                <ProductLogoMark product={product} size="sm" />
                <span className="text-sm font-medium">{product.name}</span>
              </button>
            );
          })}
        </Reveal>

        <div
          id="product-tabpanel"
          role="tabpanel"
          aria-labelledby={`product-tab-${activeIndex}`}
          key={activeProduct.slug}
          className="animate-fade-in grid gap-8 md:grid-cols-2 md:items-center"
        >
          <ProductMockup product={activeProduct} />

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">
              {activeProduct.category}
            </p>
            <h3 className="mt-1 text-2xl font-semibold">{activeProduct.name}</h3>
            <p className="mt-3 text-white/70">{activeProduct.solution}</p>

            {activeProduct.differentiators.length > 0 && (
              <ul className="mt-5 flex flex-col gap-2">
                {activeProduct.differentiators.slice(0, 3).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-brand-primary"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            <ButtonLink href={`/produtos/${activeProduct.slug}`} className="mt-6">
              Conhecer {activeProduct.name}
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
