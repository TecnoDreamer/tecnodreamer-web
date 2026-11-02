import type { Metadata } from "next";
import { Compass, Eye, Target } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { COMPANY } from "@/constants/company";

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "Conheça a história, os princípios e a tecnologia por trás da TecnoDreamer.",
  alternates: { canonical: "/empresa" },
};

const PILLARS = [
  { icon: Target, label: "Propósito", text: COMPANY.purpose },
  { icon: Compass, label: "Missão", text: COMPANY.mission },
  { icon: Eye, label: "Visão", text: COMPANY.vision },
];

function NumberedList({ items }: { items: readonly string[] }) {
  return (
    <ol className="mt-8 border-b border-border">
      {items.map((item, index) => (
        <li key={item} className="hairline-glow flex gap-5 border-t border-border py-5 text-foreground-muted">
          <span aria-hidden="true" className="font-mono text-sm text-brand-cyan">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default function CompanyPage() {
  return (
    <>
      <PageHero eyebrow="Empresa" title="A TecnoDreamer" intro={COMPANY.about} />

      <Section tone="background">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Primeira dobra: sem Reveal, para não atrasar o LCP. */}
          <div className="lg:col-span-5">
            <Eyebrow index="01">Origem</Eyebrow>
            <h2 className="mt-5 text-h2 font-semibold uppercase text-foreground">Nossa história</h2>
            <p className="mt-6 text-lead text-foreground-muted">{COMPANY.history}</p>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3 lg:col-span-7">
            {PILLARS.map(({ icon: Icon, label, text }, index) => (
              <Reveal
                as="li"
                key={label}
                delay={index * 80}
                className="flex flex-col gap-5 bg-background p-6 transition-colors duration-300 hover:bg-surface"
              >
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-brand-cyan"
                >
                  <Icon size={18} />
                </span>
                <h3 className="font-mono text-micro font-medium uppercase text-brand-cyan">{label}</h3>
                <p className="text-sm text-foreground">{text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="surface" divider>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow index="02">O que nos guia</Eyebrow>
            <h2 className="mt-5 text-h2 font-semibold uppercase text-foreground">Valores</h2>
            <NumberedList items={COMPANY.values} />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow index="03">Como decidimos</Eyebrow>
            <h2 className="mt-5 text-h2 font-semibold uppercase text-foreground">Princípios</h2>
            <NumberedList items={COMPANY.principles} />
          </Reveal>
        </div>
      </Section>

      <Section tone="background" divider>
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-8">
          <div className="lg:col-span-4">
            <Eyebrow index="04">Stack</Eyebrow>
            <h2 className="mt-5 text-h2 font-semibold uppercase text-foreground">Tecnologia</h2>
          </div>
          <ul className="flex flex-wrap gap-2 lg:col-span-8 lg:pt-2">
            {COMPANY.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border-strong px-4 py-2 font-mono text-sm text-foreground transition-colors duration-200 hover:border-brand-cyan hover:text-brand-cyan"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section tone="surface" divider>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {COMPANY.culture && (
            <Reveal className="lg:col-span-5">
              <h2 className="text-h2 font-semibold uppercase text-foreground">Cultura</h2>
              <p className="mt-6 text-foreground-muted">{COMPANY.culture}</p>
            </Reveal>
          )}
          <Reveal delay={100} className={COMPANY.culture ? "lg:col-span-7" : "lg:col-span-12"}>
            <Eyebrow index="05">Próximos passos</Eyebrow>
            <h2 className="mt-5 text-h2 font-semibold uppercase text-foreground">Objetivos futuros</h2>
            <NumberedList items={COMPANY.futureGoals} />
          </Reveal>
        </div>
      </Section>

      <FinalCta
        eyebrow="Portfólio"
        title="Quer conhecer nossos produtos?"
        description="Veja o portfólio completo da TecnoDreamer."
        ctaLabel="Ver produtos"
        ctaHref="/produtos"
      />
    </>
  );
}
