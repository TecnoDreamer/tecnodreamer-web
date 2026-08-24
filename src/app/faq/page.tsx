import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FAQ_ITEMS } from "@/constants/faq";

export const metadata: Metadata = {
  title: "Perguntas Frequentes",
  description: "Dúvidas comuns sobre a TecnoDreamer, seus produtos e o formulário de contato.",
};

export default function FaqPage() {
  return (
    <Section tone="background" className="pt-16">
      <Reveal className="mb-10 max-w-2xl">
        <h1 className="text-4xl font-semibold text-foreground">Perguntas Frequentes</h1>
        <p className="mt-4 text-foreground-muted">
          Dúvidas comuns sobre a empresa. Para perguntas específicas de cada produto, veja a
          página do produto correspondente.
        </p>
      </Reveal>

      <dl className="mx-auto flex max-w-3xl flex-col gap-6">
        {FAQ_ITEMS.map((item, index) => (
          <Reveal
            as="div"
            key={item.question}
            delay={Math.min(index * 60, 300)}
            className="rounded-lg border border-border p-5"
          >
            <dt className="font-medium text-foreground">{item.question}</dt>
            <dd className="mt-2 text-sm text-foreground-muted">{item.answer}</dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
