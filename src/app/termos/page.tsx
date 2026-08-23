import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso provisórios do site institucional da TecnoDreamer.",
};

export default function TermsPage() {
  return (
    <Section tone="background" className="pt-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold text-foreground">Termos de Uso</h1>
        <p className="mt-3 text-sm text-foreground-muted">Última atualização: 2026-08-23</p>

        <div className="mt-10 flex flex-col gap-8 text-foreground-muted">
          <section>
            <h2 className="text-xl font-medium text-foreground">1. Sobre este site</h2>
            <p className="mt-2">
              Este site é o canal institucional da TecnoDreamer, apresentando a empresa e o
              portfólio de produtos em desenvolvimento. Ao utilizá-lo, você concorda com estes
              termos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground">2. Uso do conteúdo</h2>
            <p className="mt-2">
              O conteúdo deste site (textos, logotipo, identidade visual) pertence à TecnoDreamer.
              TODO: REVISÃO JURÍDICA — licença específica de uso/reprodução de conteúdo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground">
              3. Estágio dos produtos apresentados
            </h2>
            <p className="mt-2">
              Os produtos listados neste site podem estar em fase de planejamento,
              desenvolvimento, beta ou produção — o status de cada um é indicado em sua respectiva
              página. Funcionalidades descritas para produtos em planejamento/desenvolvimento
              ainda não estão disponíveis para uso.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground">4. Formulário de contato</h2>
            <p className="mt-2">
              Ao enviar o formulário de contato, você declara que as informações fornecidas são
              verdadeiras. O tratamento dos dados enviados segue nossa{" "}
              <a href="/privacidade" className="text-brand-primary-strong hover:underline">
                Política de Privacidade
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground">5. Alterações</h2>
            <p className="mt-2">
              Estes termos podem ser atualizados conforme o site e os produtos evoluem. TODO:
              REVISÃO JURÍDICA — processo formal de notificação de alterações relevantes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground">6. Contato</h2>
            <p className="mt-2">
              Dúvidas sobre estes termos podem ser enviadas pelo{" "}
              <a href="/contato" className="text-brand-primary-strong hover:underline">
                formulário de contato
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
