import { Layers, LineChart, ShieldCheck, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

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
    description: "Dashboards e indicadores acionáveis, não apenas números soltos.",
  },
  {
    icon: Sparkles,
    title: "Evolução contínua",
    description:
      "Portfólio pensado para crescer: novos produtos e funcionalidades sem retrabalho estrutural.",
  },
];

/**
 * Diferenciais em composição editorial: título fixo à esquerda (sticky no
 * desktop) e quatro linhas numeradas com divisórias de 1px que acendem no
 * hover, em vez de quatro cards iguais.
 */
export function Differentiators() {
  return (
    <Section tone="background" aria-labelledby="diferenciais-title">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:sticky lg:top-[calc(var(--header-height)+3rem)] lg:col-span-5 lg:self-start">
          <Eyebrow index="03">Diferenciais</Eyebrow>
          <h2 id="diferenciais-title" className="mt-5 text-h2 font-semibold uppercase text-foreground">
            O que nos <span className="text-gradient-brand">diferencia.</span>
          </h2>
          <p className="mt-5 max-w-md text-lead text-foreground-muted">
            Quatro compromissos que valem para todos os produtos do portfólio.
          </p>
        </Reveal>

        <ol className="border-b border-border lg:col-span-7">
          {DIFFERENTIATORS.map(({ icon: Icon, title, description }, index) => (
            <Reveal
              as="li"
              key={title}
              delay={index * 80}
              className="hairline-glow grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-t border-border py-8 sm:grid-cols-[4.5rem_1fr_auto] sm:gap-x-8"
            >
              <span aria-hidden="true" className="font-mono text-sm text-brand-cyan sm:row-span-2 sm:pt-1.5">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-h3 font-semibold text-foreground">{title}</h3>
              <Icon
                size={22}
                aria-hidden="true"
                className="hidden text-foreground-muted sm:col-start-3 sm:row-span-2 sm:row-start-1 sm:block"
              />
              <p className="col-start-2 max-w-xl text-foreground-muted">{description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
