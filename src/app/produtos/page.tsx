import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { PRODUCTS } from "@/constants/products";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Conheça o portfólio de produtos da TecnoDreamer: gestão para pet shops e clínicas, identificação de pets por QR Code e analytics de marketing.",
};

export default function ProductsPage() {
  return (
    <Section tone="background" className="pt-16">
      <Reveal className="mb-10 max-w-2xl">
        <h1 className="text-4xl font-semibold text-foreground">Produtos</h1>
        <p className="mt-4 text-foreground-muted">
          O portfólio da TecnoDreamer está em construção. Cada produto abaixo resolve um problema
          específico do mercado pet ou de marketing orientado a dados — a estrutura do site já
          está preparada para receber novos produtos conforme forem definidos.
        </p>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((product, index) => (
          <Reveal key={product.slug} delay={index * 80}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
