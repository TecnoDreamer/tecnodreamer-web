import { ShieldCheck, Layers, LineChart, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/sections/Hero";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { COMPANY } from "@/constants/company";
import { PRODUCTS } from "@/constants/products";

const DIFFERENTIATORS = [
  {
    icon: Layers,
    title: "Produtos especializados",
    description:
      "Cada produto é construído para um problema real e específico — não sistemas genéricos adaptados.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança por padrão",
    description:
      "Validação, sanitização e boas práticas de segurança fazem parte da arquitetura desde o início.",
  },
  {
    icon: LineChart,
    title: "Decisões orientadas a dados",
    description:
      "Dashboards e indicadores acionáveis, não apenas números soltos.",
  },
  {
    icon: Sparkles,
    title: "Evolução contínua",
    description:
      "Portfólio pensado para crescer: novos produtos e funcionalidades sem retrabalho estrutural.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section tone="background">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <h2 className="text-3xl font-semibold text-foreground">Sobre a TecnoDreamer</h2>
            <p className="mt-4 text-foreground-muted">{COMPANY.about}</p>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-primary-strong">
              Valores
            </h3>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-foreground-muted">
              {COMPANY.values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="surface">
        <Reveal className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground">Nossos produtos</h2>
          <p className="mt-3 text-foreground-muted">
            Um portfólio em construção, com cada produto resolvendo um problema real do mercado
            pet ou de marketing orientado a dados.
          </p>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.slug} delay={index * 80}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </Section>

      <ProductShowcase />

      <Section tone="background">
        <Reveal className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground">Diferenciais</h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIATORS.map(({ icon: Icon, title, description }, index) => (
            <Reveal
              key={title}
              delay={index * 80}
              className="rounded-lg border border-border p-6 transition-all duration-300 ease-standard hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-primary/10 text-brand-primary-strong">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-foreground-muted">{description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <Reveal className="mb-14 max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground">Como trabalhamos</h2>
          <p className="mt-3 text-foreground-muted">
            Um processo simples, repetido em cada produto do portfólio — do primeiro rascunho à
            evolução contínua.
          </p>
        </Reveal>
        <ProcessTimeline />
      </Section>

      <Section tone="background">
        <Reveal className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground">Tecnologia</h2>
          <p className="mt-3 text-foreground-muted">
            Ferramentas modernas e estáveis, escolhidas para durar.
          </p>
        </Reveal>
        <Reveal delay={100} className="flex flex-wrap gap-3">
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

      <Section tone="ink">
        <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Quer conhecer melhor a TecnoDreamer?
            </h2>
            <p className="mt-2 max-w-xl text-white/70">
              Fale com a gente sobre qualquer um dos produtos do portfólio ou sobre parcerias.
            </p>
          </div>
          <ButtonLink href="/contato">Entrar em contato</ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
