import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a TecnoDreamer sobre qualquer produto do portfólio ou parcerias.",
};

export default function ContactPage() {
  return (
    <Section tone="background" className="pt-16">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-semibold text-foreground">Contato</h1>
          <p className="mt-4 text-foreground-muted">
            Preencha o formulário para falar com a TecnoDreamer sobre qualquer produto do
            portfólio, parcerias ou dúvidas gerais. Seus dados são tratados conforme nossa{" "}
            <a href="/privacidade" className="text-brand-primary-strong hover:underline">
              Política de Privacidade
            </a>
            .
          </p>
        </div>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
