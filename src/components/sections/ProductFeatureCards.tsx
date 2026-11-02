import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { PRODUCTS } from "@/constants/products";

/** Três cards grandes 01/02/03 com os produtos do portfólio. */
export function ProductFeatureCards() {
  return (
    <Section tone="surface" divider aria-labelledby="produtos-title">
      <SectionHeading
        index="02"
        eyebrow="Produtos"
        id="produtos-title"
        title="Nossos produtos"
        description="Os três estão em desenvolvimento. Na página de cada um você vê o problema, o público e o escopo atual."
        aside={
          <ButtonLink href="/produtos" variant="outline">
            Ver todos os produtos
            <ArrowRight size={16} aria-hidden="true" />
          </ButtonLink>
        }
      />
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product, index) => (
          <Reveal as="li" key={product.slug} delay={index * 90} className="h-full">
            <ProductCard product={product} index={index} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
