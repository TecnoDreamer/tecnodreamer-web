import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY } from "@/constants/company";

interface FinalCtaProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

/**
 * CTA final expressivo (um dos poucos lugares com glow) com os meios de
 * contato reais. Reutilizado no fim da home e das páginas internas.
 */
export function FinalCta({
  eyebrow = "Contato",
  title = "Vamos conversar sobre o seu problema.",
  description = "Fale com a TecnoDreamer sobre qualquer produto do portfólio ou tire suas dúvidas. Respondemos por e-mail.",
  ctaLabel = "Falar conosco",
  ctaHref = "/contato",
}: FinalCtaProps) {
  const contacts = [
    { icon: Mail, label: COMPANY.contact.email, href: `mailto:${COMPANY.contact.email}`, external: false },
    { icon: Phone, label: COMPANY.contact.phoneDisplay, href: COMPANY.contact.phoneHref, external: false },
    { icon: MessageCircle, label: "WhatsApp", href: COMPANY.contact.whatsappHref, external: true },
  ];

  return (
    <section aria-labelledby="cta-final-title" className="relative overflow-hidden border-t border-border bg-ink py-20 sm:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-lg border border-border bg-background px-6 py-14 sm:px-12 sm:py-20">
          <div aria-hidden="true" className="tech-grid-bg absolute inset-0" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[48rem] max-w-[140%] -translate-x-1/2 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse, color-mix(in srgb, var(--brand-cyan) 30%, transparent), color-mix(in srgb, var(--brand-purple) 22%, transparent) 50%, transparent 75%)",
            }}
          />

          <div className="relative grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Eyebrow>{eyebrow}</Eyebrow>
              <h2 id="cta-final-title" className="mt-6 text-h2 font-semibold uppercase text-foreground text-balance">
                {title}
              </h2>
              <p className="mt-5 max-w-xl text-lead text-foreground-muted">{description}</p>
              <ButtonLink href={ctaHref} className="glow-cyan mt-10 px-8">
                {ctaLabel}
                <ArrowRight size={16} aria-hidden="true" />
              </ButtonLink>
            </div>

            <ul className="flex flex-col gap-1 lg:col-span-4">
              {contacts.map(({ icon: Icon, label, href, external }) => (
                <li key={href} className="border-t border-border first:border-t-0 lg:first:border-t">
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex min-h-12 items-center gap-3 py-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
                  >
                    <Icon size={16} aria-hidden="true" className="shrink-0 text-brand-cyan" />
                    <span className="break-all">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
