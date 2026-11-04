import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ContactFormSkeleton } from "./ContactFormSkeleton";
import { COMPANY } from "@/constants/company";
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
  alternates: { canonical: "/contato" },
};

const DIRECT_CHANNELS = [
  { icon: Mail, label: "E-mail", value: COMPANY.contact.email, href: `mailto:${COMPANY.contact.email}`, external: false },
  { icon: Phone, label: "Telefone", value: COMPANY.contact.phoneDisplay, href: COMPANY.contact.phoneHref, external: false },
  { icon: MessageCircle, label: "WhatsApp", value: COMPANY.contact.phoneDisplay, href: COMPANY.contact.whatsappHref, external: true },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-background pb-20 pt-[calc(var(--header-height)+4rem)] sm:pb-28 sm:pt-[calc(var(--header-height)+6rem)]">
      <div aria-hidden="true" className="tech-grid-bg absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--brand-purple) 18%, transparent), transparent 70%)" }}
      />

      <Container className="relative grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-10">
        <div className="lg:col-span-5">
          <div className="hero-rise">
            <Eyebrow>Contato</Eyebrow>
            <h1 className="mt-6 text-h1 font-semibold uppercase text-foreground text-balance">
              Vamos conversar sobre o seu problema
            </h1>
            <p className="mt-6 text-lead text-foreground-muted">
              Preencha o formulário para falar com a TecnoDreamer sobre qualquer produto do
              portfólio, parcerias ou dúvidas gerais. Seus dados são tratados conforme nossa{" "}
              <Link href="/privacidade" className="text-brand-cyan underline-offset-4 hover:underline">
                Política de Privacidade
              </Link>
              .
            </p>
          </div>

          <Reveal delay={100} className="mt-10">
            <h2 className="font-mono text-micro font-medium uppercase text-foreground-muted">
              Fale direto com a gente
            </h2>
            <p className="mt-3 text-sm text-foreground-muted">
              O formulário é o canal principal — respondemos por e-mail. Se preferir, use um dos
              contatos abaixo.
            </p>
            <ul className="mt-5 border-b border-border">
              {DIRECT_CHANNELS.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label} className="border-t border-border">
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex min-h-16 items-center gap-4 py-3"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-brand-cyan transition-colors group-hover:border-brand-cyan"
                    >
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-micro uppercase text-foreground-muted">{label}</span>
                      <span className="block break-all text-sm text-foreground group-hover:text-brand-cyan">
                        {value}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="shrink-0 text-foreground-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-mono text-micro font-medium uppercase text-foreground-muted">
              Sobre qual produto?
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {PRODUCTS.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/produtos/${product.slug}`}
                    className="inline-flex min-h-11 items-center rounded-full border border-border-strong px-4 text-sm text-foreground transition-colors hover:border-brand-cyan hover:text-brand-cyan"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-7">
          <div className="corner-ticks rounded-lg border border-border bg-surface p-5 sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-border pb-5">
              <h2 className="text-lg font-semibold text-foreground">Enviar mensagem</h2>
              <span className="font-mono text-micro uppercase text-foreground-muted">* obrigatório</span>
            </div>
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
