import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroSpotlight } from "@/components/sections/HeroSpotlight";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { COMPANY } from "@/constants/company";
import { PRODUCTS } from "@/constants/products";
import { cn } from "@/lib/utils";

/**
 * Módulos flutuantes ao redor da arte. Só categorias verificáveis no
 * portfólio (nada de métricas): Pet & Pet e PetConnect (pet tech),
 * sistemas web e app mobile e os produtos em desenvolvimento.
 */
const HERO_PANELS = [
  { label: "Pet tech", detail: "Gestão e identificação de pets", position: "lg:left-0 lg:top-[12%]" },
  { label: "Web + Mobile", detail: "Sistemas web e app mobile", position: "lg:left-[2%] lg:bottom-[14%]" },
  { label: "Em desenvolvimento", detail: `${PRODUCTS.length} produtos no portfólio`, position: "lg:right-[4%] lg:bottom-[6%]", live: true },
];

const delay = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-x-clip border-b border-border bg-background"
    >
      <div aria-hidden="true" className="tech-grid-bg absolute inset-0" />
      <HeroSpotlight />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--brand-purple) 16%, transparent), transparent 70%)" }}
      />

      <Container className="relative grid items-center gap-14 pb-20 pt-[calc(var(--header-height)+3.5rem)] sm:pb-28 lg:grid-cols-12 lg:gap-8 lg:pt-[calc(var(--header-height)+5rem)]">
        <div className="lg:col-span-7">
          <div className="hero-fade" style={delay(0)}>
            <Eyebrow>TecnoDreamer · Empresa de tecnologia em formação</Eyebrow>
          </div>

          <h1
            id="hero-title"
            className="hero-rise mt-7 text-display font-semibold uppercase text-foreground"
            style={delay(60)}
          >
            Tecnologia para problemas <span className="text-gradient-brand">reais.</span>
          </h1>

          <div className="hero-fade mt-8 max-w-xl" style={delay(200)}>
            <p className="text-h3 font-medium text-foreground">Do mercado pet à inteligência de dados.</p>
            <p className="mt-4 text-lead text-foreground-muted">{COMPANY.shortPitch}</p>
          </div>

          <div className="hero-fade mt-10 flex flex-wrap gap-3" style={delay(320)}>
            <ButtonLink href="/produtos" className="group">
              Explorar produtos
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </ButtonLink>
            <ButtonLink href="/empresa" variant="outline">
              Conhecer a TecnoDreamer
            </ButtonLink>
          </div>
        </div>

        <div className="hero-fade relative lg:col-span-5" style={delay(180)}>
          <div className="mx-auto max-w-[22rem] sm:max-w-[26rem] lg:max-w-none">
            <HeroVisual />
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-3 lg:mt-0 lg:block">
            {HERO_PANELS.map((panel) => (
              <li
                key={panel.label}
                className={cn(
                  "glass rounded-md px-3.5 py-3 lg:absolute lg:max-w-[13.5rem]",
                  panel.position
                )}
              >
                <p className="flex items-center gap-2 font-mono text-micro font-medium uppercase text-brand-cyan">
                  {panel.live ? (
                    <span aria-hidden="true" className="relative flex h-2 w-2">
                      <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-brand-purple-light" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-purple-light" />
                    </span>
                  ) : (
                    <span aria-hidden="true" className="h-px w-3 bg-brand-cyan" />
                  )}
                  {panel.label}
                </p>
                <p className="mt-1.5 text-xs text-foreground-muted">{panel.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
