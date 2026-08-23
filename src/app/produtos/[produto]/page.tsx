import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Badge";
import { PRODUCTS, getProductBySlug } from "@/constants/products";

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

  return (
    <>
      <Section tone="ink" className="pt-20">
        <StatusBadge status={product.status} />
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{product.name}</h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80">{product.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/contato">Falar sobre este produto</ButtonLink>
          <ButtonLink
            href="/produtos"
            variant="secondary"
            className="border-white/40 text-white hover:bg-white/10"
          >
            Ver todos os produtos
          </ButtonLink>
        </div>
      </Section>

      <Section tone="background">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">O problema</h2>
            <p className="mt-3 text-foreground-muted">{product.problem}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground">A solução</h2>
            <p className="mt-3 text-foreground-muted">{product.solution}</p>
          </div>
        </div>

        {product.audience.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-foreground">Público-alvo</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {product.audience.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-surface px-4 py-2 text-sm text-foreground-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      {product.features.length > 0 && (
        <Section tone="surface">
          <h2 className="text-2xl font-semibold text-foreground">
            Funcionalidades planejadas
          </h2>
          <p className="mt-2 text-sm text-foreground-muted">
            Escopo previsto para o produto — ainda não representa recursos entregues (status
            atual: <StatusBadge status={product.status} />).
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-brand-primary-strong"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {product.differentiators.length > 0 && (
        <Section tone="background">
          <h2 className="text-2xl font-semibold text-foreground">Diferenciais</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {product.differentiators.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground-muted">
                <Sparkles
                  size={18}
                  className="mt-0.5 shrink-0 text-brand-secondary"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {product.howItWorks.length > 0 && (
        <Section tone="surface">
          <h2 className="text-2xl font-semibold text-foreground">Como funciona</h2>
          <ol className="mt-6 flex flex-col gap-4">
            {product.howItWorks.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary text-sm font-semibold text-ink">
                  {index + 1}
                </span>
                <p className="text-foreground-muted">{step}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {product.faq.length > 0 && (
        <Section tone="background">
          <h2 className="text-2xl font-semibold text-foreground">Perguntas frequentes</h2>
          <dl className="mt-6 flex flex-col gap-6">
            {product.faq.map((item) => (
              <div key={item.question}>
                <dt className="font-medium text-foreground">{item.question}</dt>
                <dd className="mt-1 text-sm text-foreground-muted">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      <Section tone="ink">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Quer saber mais sobre {product.name}?</h2>
            <p className="mt-2 max-w-xl text-white/70">
              Fale com a TecnoDreamer e acompanhe a evolução deste produto.
            </p>
          </div>
          <ButtonLink href="/contato">Entrar em contato</ButtonLink>
        </div>
      </Section>
    </>
  );
}
