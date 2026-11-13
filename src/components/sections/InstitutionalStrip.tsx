import { PRODUCTS } from "@/constants/products";

/**
 * Faixa institucional logo abaixo do herói. Só rótulos verificáveis no
 * repositório: a contagem vem de `PRODUCTS` (todos "em-desenvolvimento").
 */
const inDevelopment = PRODUCTS.filter((product) => product.status === "em-desenvolvimento").length;

const ITEMS = [
  `${inDevelopment} produtos em desenvolvimento`,
  "Web + Mobile",
  "Mercado pet",
  "Segurança por padrão",
];

export function InstitutionalStrip() {
  return (
    <section aria-label="TecnoDreamer em resumo" className="border-b border-border bg-surface">
      <ul className="mx-auto grid w-full max-w-7xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {ITEMS.map((item, index) => (
          <li
            key={item}
            className="flex min-h-20 items-center gap-3 border-border px-4 py-5 font-mono text-micro font-medium uppercase text-foreground-muted max-sm:odd:border-r max-sm:[&:nth-child(n+3)]:border-t max-sm:last:col-span-2 max-sm:last:border-r-0 sm:max-lg:[&:not(:nth-child(3n))]:border-r sm:max-lg:[&:nth-child(n+4)]:border-t lg:border-r lg:last:border-r-0 sm:px-6"
          >
            <span aria-hidden="true" className="text-brand-cyan">
              {String(index + 1).padStart(2, "0")}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
