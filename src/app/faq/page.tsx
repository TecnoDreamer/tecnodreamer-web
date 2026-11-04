import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { FAQ_ITEMS } from "@/constants/faq";
import { PRODUCTS } from "@/constants/products";

export const metadata: Metadata = {
  title: "Perguntas Frequentes",
  description: "Dúvidas comuns sobre a TecnoDreamer, seus produtos e o formulário de contato.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Perguntas Frequentes"
        intro="Dúvidas comuns sobre a empresa. Para perguntas específicas de cada produto, veja a página do produto correspondente."
      >
        <ul className="flex flex-wrap gap-2">
          {PRODUCTS.map((product) => (
            <li key={product.slug}>
              <Link
                href={`/produtos/${product.slug}`}
                className="inline-flex min-h-11 items-center rounded-full border border-border-strong px-4 text-sm text-foreground transition-colors hover:border-brand-cyan hover:text-brand-cyan"
              >
                FAQ do {product.name}
              </Link>
            </li>
          ))}
        </ul>
      </PageHero>

      <Section tone="background">
        <dl className="mx-auto max-w-4xl border-b border-border">
          {FAQ_ITEMS.map((item, index) => (
            <Reveal
              as="div"
              key={item.question}
              delay={Math.min(index * 60, 300)}
              className="hairline-glow border-t border-border py-8"
            >
              <dt className="flex gap-5 text-lg font-semibold text-foreground">
                <span aria-hidden="true" className="w-8 shrink-0 pt-1 font-mono text-sm font-normal text-brand-cyan">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item.question}</span>
              </dt>
              <dd className="mt-3 pl-[3.25rem] text-foreground-muted">{item.answer}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>
      <FinalCta
        eyebrow="Ainda com dúvidas?"
        title="Pergunte direto para a gente."
        description="Se a sua dúvida não está aqui, escreva para a TecnoDreamer."
      />
    </>
  );
}
