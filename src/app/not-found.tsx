import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <Section tone="background" className="flex flex-1 items-center justify-center py-32 text-center">
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-brand-primary-strong">
          Erro 404
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
          Página não encontrada
        </h1>
        <p className="mt-4 text-foreground-muted">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/">Voltar para a Home</ButtonLink>
          <ButtonLink href="/produtos" variant="secondary">
            Ver produtos
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
