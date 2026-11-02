import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a TecnoDreamer trata os dados coletados no site institucional.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Documento legal"
        title="Política de Privacidade"
        intro={<p className="font-mono text-sm">Última atualização: 2026-11-02</p>}
      />
      <Section tone="background">
        <div className="mx-auto flex max-w-3xl flex-col gap-10 text-foreground-muted">
          <section className="border-t border-border pt-8">
            <h2 className="text-h3 font-semibold text-foreground">1. Quais dados coletamos</h2>
            <p className="mt-3 leading-relaxed">
              Coletamos dados apenas quando você preenche o formulário de{" "}
              <a href="/contato" className="text-brand-cyan underline-offset-4 hover:underline">
                contato
              </a>
              : nome, e-mail, empresa (opcional), telefone (opcional), assunto, produto de
              interesse e a mensagem enviada. Não utilizamos cookies de rastreamento nem
              formulários de captura em outras páginas do site nesta fase.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="text-h3 font-semibold text-foreground">2. Para que usamos seus dados</h2>
            <p className="mt-3 leading-relaxed">
              Os dados enviados pelo formulário de contato são usados exclusivamente para
              responder à sua mensagem e, quando aplicável, dar continuidade a uma conversa
              comercial sobre os produtos da TecnoDreamer. Não vendemos nem compartilhamos seus
              dados com terceiros para fins de marketing.
            </p>
            <p className="mt-3 leading-relaxed">
              A mensagem é entregue à equipe por e-mail, por meio de um serviço de envio de
              e-mails (Resend), e fica armazenada na caixa de e-mail da TecnoDreamer. TODO:
              REVISÃO JURÍDICA — enquadramento desse serviço como operador de dados.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="text-h3 font-semibold text-foreground">3. Como protegemos seus dados</h2>
            <p className="mt-3 leading-relaxed">
              O envio do formulário é validado e sanitizado no servidor, protegido por limite de
              tentativas (rate limiting) e nunca temos o conteúdo da sua mensagem registrado em
              logs de forma legível — apenas metadados técnicos necessários para identificar
              abuso (ver{" "}
              <span className="text-foreground">docs/seguranca/LGPD.md</span> no repositório do
              projeto).
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="text-h3 font-semibold text-foreground">4. Retenção e exclusão</h2>
            <p className="mt-3 leading-relaxed">
              TODO: REVISÃO JURÍDICA — prazo de retenção dos dados de contato e processo formal de
              exclusão ainda não foram definidos com o Product Owner/jurídico.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="text-h3 font-semibold text-foreground">5. Seus direitos (LGPD)</h2>
            <p className="mt-3 leading-relaxed">
              Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode
              solicitar confirmação da existência de tratamento, acesso, correção, anonimização,
              portabilidade ou eliminação dos seus dados. TODO: REVISÃO JURÍDICA — canal formal e
              prazo de resposta para exercício desses direitos.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="text-h3 font-semibold text-foreground">6. Contato sobre privacidade</h2>
            <p className="mt-3 leading-relaxed">
              Para dúvidas sobre esta política, utilize o{" "}
              <a href="/contato" className="text-brand-cyan underline-offset-4 hover:underline">
                formulário de contato
              </a>
              . TODO: DEFINIR COM PRODUCT OWNER — canal dedicado (e-mail do encarregado/DPO), caso
              venha a existir.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
