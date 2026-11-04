import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    title: "Descobrir",
    description: "Entendemos o problema real antes de qualquer linha de código.",
  },
  {
    title: "Planejar",
    description: "Definimos escopo, prioridades e critérios de aceite.",
  },
  {
    title: "Projetar",
    description: "Desenhamos a experiência e a arquitetura da solução.",
  },
  {
    title: "Desenvolver",
    description: "Construímos com boas práticas de engenharia e segurança.",
  },
  {
    title: "Testar",
    description: "Validamos com testes automatizados antes de qualquer entrega.",
  },
  {
    title: "Evoluir",
    description: "Evoluímos o produto com base em uso real, não em suposições.",
  },
];

/**
 * Timeline das seis etapas. Desktop: linha horizontal que se preenche ao
 * entrar no viewport. Mobile: vertical, com a linha à esquerda. A linha
 * progressiva é decorativa e fica cheia sob prefers-reduced-motion.
 */
export function ProcessTimeline() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute left-[1.0625rem] top-0 h-full w-px bg-border lg:left-0 lg:top-[1.0625rem] lg:h-px lg:w-full" />
      <Reveal
        direction="none"
        aria-hidden="true"
        className="process-line absolute left-[1.0625rem] top-0 h-full w-px bg-gradient-to-b from-brand-cyan via-brand-cobalt to-brand-purple lg:left-0 lg:top-[1.0625rem] lg:h-px lg:w-full lg:bg-gradient-to-r"
      >
        {null}
      </Reveal>

      <ol className="relative grid gap-10 lg:grid-cols-6 lg:gap-6">
        {STEPS.map((step, index) => (
          <Reveal as="li" key={step.title} delay={index * 90} className="flex gap-5 lg:flex-col lg:gap-6">
            <span className="relative z-10 flex h-[2.125rem] w-[2.125rem] shrink-0 items-center justify-center rounded-full border border-brand-cyan/50 bg-background font-mono text-xs text-brand-cyan shadow-[0_0_18px_-4px_var(--brand-cyan)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="pb-1">
              <h3 className="text-lg font-semibold uppercase tracking-tight text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-foreground-muted">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
