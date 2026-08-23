import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { COMPANY } from "@/constants/company";

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "Conheça a história, os princípios e a tecnologia por trás da TecnoDreamer.",
};

export default function CompanyPage() {
  return (
    <>
      <Section tone="ink" className="pt-20">
        <h1 className="text-4xl font-semibold sm:text-5xl">A TecnoDreamer</h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80">{COMPANY.about}</p>
      </Section>

      <Section tone="background">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Nossa história</h2>
            <p className="mt-3 text-foreground-muted">{COMPANY.history}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-primary-strong">
                Propósito
              </h3>
              <p className="mt-2 text-sm text-foreground-muted">{COMPANY.purpose}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-primary-strong">
                Missão
              </h3>
              <p className="mt-2 text-sm text-foreground-muted">{COMPANY.mission}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-primary-strong">
                Visão
              </h3>
              <p className="mt-2 text-sm text-foreground-muted">{COMPANY.vision}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Valores</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {COMPANY.values.map((value) => (
                <li key={value} className="text-foreground-muted">
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Princípios</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {COMPANY.principles.map((principle) => (
                <li key={principle} className="text-foreground-muted">
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="background">
        <h2 className="text-2xl font-semibold text-foreground">Tecnologia</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {COMPANY.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-surface px-4 py-2 text-sm text-foreground-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface">
        <h2 className="text-2xl font-semibold text-foreground">Cultura</h2>
        <p className="mt-3 max-w-2xl text-foreground-muted">{COMPANY.culture}</p>
      </Section>

      <Section tone="background">
        <h2 className="text-2xl font-semibold text-foreground">Objetivos futuros</h2>
        <ul className="mt-4 flex flex-col gap-3">
          {COMPANY.futureGoals.map((goal) => (
            <li key={goal} className="text-foreground-muted">
              {goal}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="ink">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Quer conhecer nossos produtos?</h2>
            <p className="mt-2 max-w-xl text-white/70">
              Veja o portfólio completo da TecnoDreamer.
            </p>
          </div>
          <ButtonLink href="/produtos">Ver produtos</ButtonLink>
        </div>
      </Section>
    </>
  );
}
