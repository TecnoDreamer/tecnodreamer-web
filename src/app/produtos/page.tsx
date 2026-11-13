import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { PRODUCTS } from "@/constants/products";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Conheça o portfólio de produtos da TecnoDreamer: gestão para pet shops e clínicas e identificação de pets por QR Code.",
  alternates: { canonical: "/produtos" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfólio"
        title="Produtos"
        intro="O portfólio da TecnoDreamer está em construção. Cada produto abaixo resolve um problema específico do mercado pet — a estrutura do site já está preparada para receber novos produtos conforme forem definidos."
      />
      <Section tone="background">
        <ul className="grid gap-5 md:grid-cols-2">
          {PRODUCTS.map((product, index) => (
            <Reveal as="li" key={product.slug} delay={index * 90} className="h-full">
              <ProductCard product={product} index={index} headingLevel="h2" />
            </Reveal>
          ))}
        </ul>
      </Section>
      <FinalCta
        eyebrow="Interesse em algum produto?"
        title="Acompanhe a evolução do portfólio."
        description="Escreva para a TecnoDreamer contando qual produto interessa a você."
        ctaLabel="Entrar em contato"
      />
    </>
  );
}
