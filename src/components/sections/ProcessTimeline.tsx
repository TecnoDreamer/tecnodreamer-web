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

export function ProcessTimeline() {
  return (
    <ol className="relative grid gap-10 md:grid-cols-6 md:gap-6">
      <div
        aria-hidden="true"
        className="absolute left-4 top-4 hidden h-px w-[calc(100%-2rem)] bg-border md:block"
      />
      {STEPS.map((step, index) => (
        <Reveal
          as="li"
          key={step.title}
          delay={index * 70}
          className="relative flex gap-4 md:flex-col md:gap-4"
        >
          <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-primary/40 bg-background font-mono text-sm text-brand-primary-strong">
            {index + 1}
          </span>
          <div>
            <h3 className="font-medium text-foreground">{step.title}</h3>
            <p className="mt-1 text-sm text-foreground-muted">{step.description}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
