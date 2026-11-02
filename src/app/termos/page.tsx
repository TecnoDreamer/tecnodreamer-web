import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso provisórios do site institucional da TecnoDreamer.",
  alternates: { canonical: "/termos" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Documento legal"
        title="Termos de Uso"
        intro={<p className="font-mono text-sm">Última atualização: 2026-08-23</p>}
      />
      <Section tone="background">
        <div className="mx-auto flex max-w-3xl flex-col gap-10 text-foreground-muted">
          <section className="border-t border-border pt-8">
            <h2 className="text-h3 font-semibold text-foreground">1. Sobre este site</h2>
            <p className="mt-3 leading-relaxed">
              Este site é o canal institucional da TecnoDreamer, apresentando a empresa e o
              portfólio de produtos em desenvolvimento. Ao utilizá-lo, você concorda com estes
              termos.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="text-h3 font-semibold text-foreground">2. Uso do conteúdo</h2>
            <p className="mt-3 leading-relaxed">
              O conteúdo deste site (textos, logotipo, identidade visual) pertence à TecnoDreamer.
              TODO: REVISÃO JURÍDICA — licença específica de uso/reprodução de conteúdo.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="text-h3 font-semibold text-foreground">
              3. Estágio dos produtos apresentados
            </h2>
            <p className="mt-3 leading-relaxed">
              Os produtos listados neste site podem estar em fase de planejamento,
              desenvolvimento, beta ou produção — o status de cada um é indicado em sua respectiva
              página. Funcionalidades descritas para produtos em planejamento/desenvolvimento
              ainda não estão disponíveis para uso.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="text-h3 font-semibold text-foreground">4. Formulário de contato</h2>
            <p className="mt-3 leading-relaxed">
              Ao enviar o formulário de contato, você declara que as informações fornecidas são
              verdadeiras. O tratamento dos dados enviados segue nossa{" "}
              <a href="/privacidade" className="text-brand-cyan underline-offset-4 hover:underline">
                Política de Privacidade
              </a>
              .
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="text-h3 font-semibold text-foreground">5. Alterações</h2>
            <p className="mt-3 leading-relaxed">
              Estes termos podem ser atualizados conforme o site e os produtos evoluem. TODO:
              REVISÃO JURÍDICA — processo formal de notificação de alterações relevantes.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="text-h3 font-semibold text-foreground">6. Contato</h2>
            <p className="mt-3 leading-relaxed">
              Dúvidas sobre estes termos podem ser enviadas pelo{" "}
              <a href="/contato" className="text-brand-cyan underline-offset-4 hover:underline">
                formulário de contato
              </a>
              .
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
