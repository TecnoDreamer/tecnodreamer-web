import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProductLogoMark } from "@/components/ui/ProductLogoMark";
import { RoadmapProgress } from "@/components/ui/RoadmapProgress";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { PRODUCTS, getProductBySlug } from "@/constants/products";
import { productAccentVars } from "@/lib/productAccent";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ produto: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/produtos/[produto]">): Promise<Metadata> {
  const { produto } = await params;
  const product = getProductBySlug(produto);

  if (!product) {
    return { title: "Produto não encontrado" };
  }

  return {
    title: product.name,
    description: product.tagline,
    alternates: { canonical: `/produtos/${product.slug}` },
    openGraph: { title: `${product.name} | TecnoDreamer`, description: product.tagline },
  };
}

export default async function ProductDetailPage({
  params,
}: PageProps<"/produtos/[produto]">) {
  const { produto } = await params;
  const product = getProductBySlug(produto);

  if (!product) {
    notFound();
  }

  const index = PRODUCTS.findIndex((item) => item.slug === product.slug);
  const accent = productAccentVars(product);
  let sectionNumber = 0;
  const nextNumber = () => String(++sectionNumber).padStart(2, "0");

  return (
    <div style={accent}>
      <PageHero
        eyebrow={`Produto ${String(index + 1).padStart(2, "0")} · ${product.category}`}
        title={product.name}
        preserveCase
        intro={product.tagline}
        aside={
          <div className="corner-ticks flex h-56 w-56 items-center justify-center rounded-lg border border-border bg-surface/60 backdrop-blur-md sm:h-64 sm:w-64">
            <div
              aria-hidden="true"
              className="absolute inset-8 rounded-full blur-2xl"
              style={{ background: "color-mix(in srgb, var(--product-accent) 22%, transparent)" }}
            />
            <ProductLogoMark product={product} size="xl" priority className="relative" />
          </div>
        }
      >
        <StatusBadge status={product.status} />
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contato">Falar sobre este produto</ButtonLink>
          <ButtonLink href="/produtos" variant="outline">
            <ArrowLeft size={16} aria-hidden="true" />
            Ver todos os produtos
          </ButtonLink>
        </div>
      </PageHero>

      <Section tone="background">
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-2">
          {/* Primeira dobra no desktop: sem Reveal, para não atrasar o LCP. */}
          <div className="bg-background p-6 sm:p-10">
            <Eyebrow index={nextNumber()}>Contexto</Eyebrow>
            <h2 className="mt-5 text-h3 font-semibold uppercase text-foreground">O problema</h2>
            <p className="mt-4 text-foreground-muted">{product.problem}</p>
          </div>
          <div className="bg-background p-6 sm:p-10">
            <Eyebrow index={nextNumber()}>Proposta</Eyebrow>
            <h2 className="mt-5 text-h3 font-semibold uppercase text-foreground">A solução</h2>
            <p className="mt-4 text-foreground-muted">{product.solution}</p>
          </div>
        </div>

        {product.audience.length > 0 && (
          <Reveal delay={150} className="mt-12 flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
            <h2 className="shrink-0 font-mono text-micro font-medium uppercase text-foreground-muted">
              Público-alvo
            </h2>
            <ul className="flex flex-wrap gap-2">
              {product.audience.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border-strong px-4 py-2 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </Section>

      {product.features.length > 0 && (
        <Section tone="surface" divider>
          <Reveal className="mb-10 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <Eyebrow index={nextNumber()}>Escopo</Eyebrow>
              <h2 className="mt-5 text-h2 font-semibold uppercase text-foreground">
                {product.status === "planejamento" ? "Funcionalidades planejadas" : "Funcionalidades"}
              </h2>
              <p className="mt-4 text-sm text-foreground-muted">
                {product.status === "planejamento"
                  ? "Escopo previsto para o produto — ainda não representa recursos entregues"
                  : "Escopo do produto em evolução — nem todas as funcionalidades estão concluídas"}{" "}
                (status atual: <StatusBadge status={product.status} />).
              </p>
            </div>
            {product.roadmapProgress && (
              <div className="lg:col-span-6">
                <RoadmapProgress product={product} />
              </div>
            )}
          </Reveal>
          <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature, featureIndex) => (
              <Reveal
                key={feature}
                as="li"
                delay={Math.min(featureIndex * 40, 400)}
                className="flex items-start gap-3 bg-surface p-5 text-sm text-foreground"
              >
                <Check
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--product-accent)" }}
                  aria-hidden="true"
                />
                {feature}
              </Reveal>
            ))}
            {/* Células vazias que completam a última linha da grade, para a
                cor das linhas (bg-border) não aparecer como um bloco. */}
            {Array.from({ length: (2 - (product.features.length % 2)) % 2 }, (_, fill) => (
              <li key={`sm-fill-${fill}`} aria-hidden="true" className="hidden bg-surface sm:block lg:hidden" />
            ))}
            {Array.from({ length: (3 - (product.features.length % 3)) % 3 }, (_, fill) => (
              <li key={`lg-fill-${fill}`} aria-hidden="true" className="hidden bg-surface lg:block" />
            ))}
          </ul>
        </Section>
      )}

      {product.differentiators.length > 0 && (
        <Section tone="background" divider>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-4">
              <Eyebrow index={nextNumber()}>Por que</Eyebrow>
              <h2 className="mt-5 text-h2 font-semibold uppercase text-foreground">Diferenciais</h2>
            </Reveal>
            <ol className="border-b border-border lg:col-span-8">
              {product.differentiators.map((item, itemIndex) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={itemIndex * 80}
                  className="hairline-glow flex gap-6 border-t border-border py-6 text-foreground-muted"
                >
                  <span aria-hidden="true" className="font-mono text-sm" style={{ color: "var(--product-accent)" }}>
                    {String(itemIndex + 1).padStart(2, "0")}
                  </span>
                  <p>{item}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </Section>
      )}

      {product.howItWorks.length > 0 && (
        <Section tone="surface" divider>
          <Reveal>
            <Eyebrow index={nextNumber()}>Fluxo</Eyebrow>
            <h2 className="mt-5 text-h2 font-semibold uppercase text-foreground">Como funciona</h2>
          </Reveal>
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {product.howItWorks.map((step, stepIndex) => (
              <Reveal
                as="li"
                key={step}
                delay={stepIndex * 90}
                className="relative rounded-lg border border-border bg-background p-6"
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full border font-mono text-xs"
                  style={{
                    color: "var(--product-accent)",
                    borderColor: "color-mix(in srgb, var(--product-accent) 50%, transparent)",
                  }}
                >
                  {String(stepIndex + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 text-foreground-muted">{step}</p>
              </Reveal>
            ))}
          </ol>
        </Section>
      )}

      {product.faq.length > 0 && (
        <Section tone="background" divider>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-4">
              <Eyebrow index={nextNumber()}>Dúvidas</Eyebrow>
              <h2 className="mt-5 text-h2 font-semibold uppercase text-foreground">Perguntas frequentes</h2>
            </Reveal>
            <dl className="border-b border-border lg:col-span-8">
              {product.faq.map((item, faqIndex) => (
                <Reveal as="div" key={item.question} delay={faqIndex * 80} className="hairline-glow border-t border-border py-6">
                  <dt className="text-lg font-semibold text-foreground">{item.question}</dt>
                  <dd className="mt-2 text-foreground-muted">{item.answer}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </Section>
      )}

      <FinalCta
        eyebrow={product.name}
        title={`Quer saber mais sobre ${product.name}?`}
        description="Fale com a TecnoDreamer e acompanhe a evolução deste produto."
        ctaLabel="Entrar em contato"
      />
    </div>
  );
}
