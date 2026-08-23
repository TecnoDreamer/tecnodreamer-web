import { Rocket, ShieldCheck, Layers, LineChart, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
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
      <Section tone="ink" className="pt-20 sm:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-brand-primary">
              TecnoDreamer
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              {COMPANY.shortPitch}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              {COMPANY.about}
            </p>
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
          </div>
          <div className="hidden justify-self-end lg:block">
            <div className="rounded-lg border border-white/10 bg-white/5 p-8 text-sm text-white/70">
              <p className="font-medium text-white">Portfólio TecnoDreamer</p>
              <ul className="mt-4 flex flex-col gap-3">
                {PRODUCTS.map((product) => (
                  <li key={product.slug} className="flex items-center gap-2">
                    <Rocket size={16} className="text-brand-primary" aria-hidden="true" />
                    {product.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="background">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold text-foreground">Sobre a TecnoDreamer</h2>
            <p className="mt-4 text-foreground-muted">{COMPANY.about}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-primary-strong">
                Valores
              </h3>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-foreground-muted">
                {COMPANY.values.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-primary-strong">
                Tecnologia
              </h3>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-foreground-muted">
                {COMPANY.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground">Nossos produtos</h2>
          <p className="mt-3 text-foreground-muted">
            Um portfólio em construção, com cada produto resolvendo um problema real do mercado
            pet ou de marketing orientado a dados.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>

      <Section tone="background">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground">Diferenciais</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIATORS.map(({ icon: Icon, title, description }) => (
            <div key={title}>
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-primary/10 text-brand-primary-strong">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-foreground-muted">{description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Quer conhecer melhor a TecnoDreamer?
            </h2>
            <p className="mt-2 max-w-xl text-white/70">
              Fale com a gente sobre qualquer um dos produtos do portfólio ou sobre parcerias.
            </p>
          </div>
          <ButtonLink href="/contato">Entrar em contato</ButtonLink>
        </div>
      </Section>
    </>
  );
}
