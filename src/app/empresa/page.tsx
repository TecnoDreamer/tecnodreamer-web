import type { Metadata } from "next";
import { Target, Compass, Eye, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY } from "@/constants/company";

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "Conheça a história, os princípios e a tecnologia por trás da TecnoDreamer.",
};

const PILLARS = [
  { icon: Target, label: "Propósito", text: COMPANY.purpose },
  { icon: Compass, label: "Missão", text: COMPANY.mission },
  { icon: Eye, label: "Visão", text: COMPANY.vision },
];

export default function CompanyPage() {
  return (
    <>
      <Section tone="ink" className="relative overflow-hidden pt-24">
        <div aria-hidden="true" className="tech-grid-bg absolute inset-0" />
        <div
          aria-hidden="true"
          className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-brand-secondary/20 blur-3xl"
        />
        <div className="relative">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-wide text-brand-primary">
              Empresa
            </p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">A TecnoDreamer</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">{COMPANY.about}</p>
          </Reveal>
        </div>
      </Section>

      <Section tone="background">
        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-foreground">Nossa história</h2>
            <p className="mt-3 text-foreground-muted">{COMPANY.history}</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-3">
            {PILLARS.map(({ icon: Icon, label, text }, index) => (
              <Reveal
                key={label}
                delay={index * 80}
                className="rounded-lg border border-border p-5 transition-all duration-300 ease-standard hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-primary/10 text-brand-primary-strong">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mt-3 text-sm font-semibold uppercase tracking-wide text-brand-primary-strong">
                  {label}
                </h3>
                <p className="mt-2 text-sm text-foreground-muted">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-semibold text-foreground">Valores</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {COMPANY.values.map((value) => (
                <li key={value} className="flex items-start gap-2 text-foreground-muted">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-brand-primary-strong"
                    aria-hidden="true"
                  />
                  {value}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-2xl font-semibold text-foreground">Princípios</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {COMPANY.principles.map((principle) => (
                <li key={principle} className="flex items-start gap-2 text-foreground-muted">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-brand-primary-strong"
                    aria-hidden="true"
                  />
                  {principle}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="background">
        <Reveal className="mb-6">
          <h2 className="text-2xl font-semibold text-foreground">Tecnologia</h2>
        </Reveal>
        <Reveal delay={80} className="flex flex-wrap gap-3">
          {COMPANY.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-4 py-2 text-sm text-foreground-muted transition-colors duration-150 hover:border-brand-primary/40 hover:text-foreground"
            >
              {tech}
            </span>
          ))}
        </Reveal>
      </Section>

      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-foreground">Cultura</h2>
            <p className="mt-3 text-foreground-muted">{COMPANY.culture}</p>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-3">
            <h2 className="text-2xl font-semibold text-foreground">Objetivos futuros</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {COMPANY.futureGoals.map((goal) => (
                <li key={goal} className="flex items-start gap-2 text-foreground-muted">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-brand-primary-strong"
                    aria-hidden="true"
                  />
                  {goal}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Quer conhecer nossos produtos?</h2>
            <p className="mt-2 max-w-xl text-white/70">
              Veja o portfólio completo da TecnoDreamer.
            </p>
          </div>
          <ButtonLink href="/produtos">Ver produtos</ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
