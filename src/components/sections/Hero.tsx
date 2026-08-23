import Link from "next/link";
import { ChevronDown, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { HeroSpotlight } from "@/components/sections/HeroSpotlight";
import { COMPANY } from "@/constants/company";
import { PRODUCTS } from "@/constants/products";

const HEADLINE_KEYWORDS = /(pets|marketing)/i;

function HighlightedHeadline({ text }: { text: string }) {
  const parts = text.split(HEADLINE_KEYWORDS);
  return (
    <>
      {parts.map((part, index) =>
        HEADLINE_KEYWORDS.test(part) && part.length > 0 ? (
          <span key={index} className="text-brand-primary">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
}

const TRUST_INDICATORS = [
  "3 produtos em desenvolvimento",
  "Web + Mobile",
  "Arquitetura escalável",
  "Segurança by design",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="tech-grid-bg absolute inset-0" />
      <HeroSpotlight />
      <div
        aria-hidden="true"
        className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-brand-secondary/25 blur-3xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-15%] left-[10%] h-64 w-64 rounded-full bg-brand-primary/15 blur-3xl"
      />

      <Container className="relative pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-wide text-brand-primary">
                {COMPANY.name}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                <HighlightedHeadline text={COMPANY.shortPitch} />
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg text-white/80">{COMPANY.about}</p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/produtos">Conhecer os produtos</ButtonLink>
                <ButtonLink
                  href="/contato"
                  variant="secondary"
                  className="border-white/40 text-white hover:bg-white/10"
                >
                  Falar com a TecnoDreamer
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
                {TRUST_INDICATORS.map((indicator) => (
                  <li key={indicator} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-brand-primary" aria-hidden="true" />
                    {indicator}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal direction="left" delay={200} className="hidden lg:block justify-self-end">
            <div className="w-full max-w-sm animate-float rounded-lg border border-white/10 bg-ink-elevated p-6 backdrop-blur-md">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-primary" />
                </span>
                Portfólio TecnoDreamer
              </div>
              <ul className="mt-5 flex flex-col gap-1">
                {PRODUCTS.map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={`/produtos/${product.slug}`}
                      className="flex items-center justify-between gap-3 rounded-md px-2 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      <span className="flex items-center gap-2">
                        <Rocket size={15} className="text-brand-primary" aria-hidden="true" />
                        {product.name}
                      </span>
                      <StatusBadge status={product.status} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 hidden justify-center sm:flex">
          <ChevronDown
            size={20}
            className="animate-bounce text-white/30"
            aria-hidden="true"
          />
        </div>
      </Container>
    </section>
  );
}
