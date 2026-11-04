import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <section className="relative flex flex-1 items-center overflow-hidden bg-background pb-24 pt-[calc(var(--header-height)+5rem)]">
      <div aria-hidden="true" className="tech-grid-bg absolute inset-0" />
      <Container className="relative text-center">
        <Eyebrow className="justify-center">Erro 404</Eyebrow>
        <p aria-hidden="true" className="mt-6 font-mono text-display font-semibold text-gradient-brand">
          404
        </p>
        <h1 className="mt-4 text-h2 font-semibold uppercase text-foreground">Página não encontrada</h1>
        <p className="mt-4 text-lead text-foreground-muted">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Voltar para a Home</ButtonLink>
          <ButtonLink href="/produtos" variant="outline">
            Ver produtos
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
