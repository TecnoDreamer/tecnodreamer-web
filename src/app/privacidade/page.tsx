import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a TecnoDreamer trata os dados coletados no site institucional.",
};

export default function PrivacyPage() {
  return (
    <Section tone="background" className="pt-16">
      <Reveal as="div" className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold text-foreground">Política de Privacidade</h1>
        <p className="mt-3 text-sm text-foreground-muted">Última atualização: 2026-08-23</p>

        <div className="mt-10 flex flex-col gap-8 text-foreground-muted">
          <section>
            <h2 className="text-xl font-medium text-foreground">1. Quais dados coletamos</h2>
            <p className="mt-2">
              Coletamos dados apenas quando você preenche o formulário de{" "}
              <a href="/contato" className="text-brand-primary-strong hover:underline">
                contato
              </a>
              : nome, e-mail, empresa (opcional), telefone (opcional), assunto, produto de
              interesse e a mensagem enviada. Não utilizamos cookies de rastreamento nem
              formulários de captura em outras páginas do site nesta fase.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground">2. Para que usamos seus dados</h2>
            <p className="mt-2">
              Os dados enviados pelo formulário de contato são usados exclusivamente para
              responder à sua mensagem e, quando aplicável, dar continuidade a uma conversa
              comercial sobre os produtos da TecnoDreamer. Não vendemos nem compartilhamos seus
              dados com terceiros para fins de marketing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground">3. Como protegemos seus dados</h2>
            <p className="mt-2">
              O envio do formulário é validado e sanitizado no servidor, protegido por limite de
              tentativas (rate limiting) e nunca temos o conteúdo da sua mensagem registrado em
              logs de forma legível — apenas metadados técnicos necessários para identificar
              abuso (ver{" "}
              <span className="text-foreground">docs/seguranca/LGPD.md</span> no repositório do
              projeto).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground">4. Retenção e exclusão</h2>
            <p className="mt-2">
              TODO: REVISÃO JURÍDICA — prazo de retenção dos dados de contato e processo formal de
              exclusão ainda não foram definidos com o Product Owner/jurídico.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground">5. Seus direitos (LGPD)</h2>
            <p className="mt-2">
              Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode
              solicitar confirmação da existência de tratamento, acesso, correção, anonimização,
              portabilidade ou eliminação dos seus dados. TODO: REVISÃO JURÍDICA — canal formal e
              prazo de resposta para exercício desses direitos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground">6. Contato sobre privacidade</h2>
            <p className="mt-2">
              Para dúvidas sobre esta política, utilize o{" "}
              <a href="/contato" className="text-brand-primary-strong hover:underline">
                formulário de contato
              </a>
              . TODO: DEFINIR COM PRODUCT OWNER — canal dedicado (e-mail do encarregado/DPO), caso
              venha a existir.
            </p>
          </section>
        </div>
      </Reveal>
    </Section>
  );
}
