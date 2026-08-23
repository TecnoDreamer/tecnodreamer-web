import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Mail, MessageCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ContactFormSkeleton } from "./ContactFormSkeleton";
import { PRODUCTS } from "@/constants/products";

// Code-split o formulário (React Hook Form + Zod) em um chunk separado do
// resto da página, reduzindo o JavaScript avaliado no carregamento inicial
// (ver docs/design/PERFORMANCE.md).
const ContactForm = dynamic(() => import("./ContactForm").then((mod) => mod.ContactForm), {
  loading: () => <ContactFormSkeleton />,
});

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a TecnoDreamer sobre qualquer produto do portfólio ou parcerias.",
};

export default function ContactPage() {
  return (
    <Section tone="ink" className="relative overflow-hidden pt-24">
      <div aria-hidden="true" className="tech-grid-bg absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 left-[-10%] h-72 w-72 rounded-full bg-brand-secondary/20 blur-3xl"
      />

      <div className="relative grid gap-12 lg:grid-cols-5 lg:items-start">
        <div className="lg:col-span-2">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-wide text-brand-primary">
              Contato
            </p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Vamos conversar sobre o seu problema
            </h1>
            <p className="mt-4 text-white/70">
              Preencha o formulário para falar com a TecnoDreamer sobre qualquer produto do
              portfólio, parcerias ou dúvidas gerais. Seus dados são tratados conforme nossa{" "}
              <a href="/privacidade" className="text-brand-primary hover:underline">
                Política de Privacidade
              </a>
              .
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-10 flex flex-col gap-4">
            <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-ink-elevated p-4 backdrop-blur-md">
              <MessageCircle size={20} className="mt-0.5 shrink-0 text-brand-primary" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-white">Canal oficial</p>
                <p className="mt-1 text-sm text-white/60">
                  Nesta fase, o formulário ao lado é o canal oficial de contato com a
                  TecnoDreamer — respondemos por e-mail.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-ink-elevated p-4 backdrop-blur-md">
              <Mail size={20} className="mt-0.5 shrink-0 text-brand-primary" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-white">Sobre qual produto?</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {PRODUCTS.map((product) => (
                    <span
                      key={product.slug}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
                    >
                      {product.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-3">
          <div className="rounded-lg border border-white/10 bg-background p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
