import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import logo from "../../../tecnodreamer.png";
import { COMPANY } from "@/constants/company";
import { FOOTER_LEGAL_LINKS, NAV_ITEMS } from "@/constants/nav";
import { PRODUCTS } from "@/constants/products";

const linkClasses =
  "inline-flex min-h-8 items-center text-sm text-foreground-muted transition-colors hover:text-foreground";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-ink text-foreground">
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-5">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <Image src={logo} alt="TecnoDreamer" width={32} height={32} />
            <span className="text-base font-semibold">{COMPANY.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-foreground-muted">{COMPANY.shortPitch}</p>
          <ul className="mt-6 flex flex-col gap-1">
            <li>
              <a href={`mailto:${COMPANY.contact.email}`} className={linkClasses}>
                {COMPANY.contact.email}
              </a>
            </li>
            <li>
              <a href={COMPANY.contact.phoneHref} className={linkClasses}>
                {COMPANY.contact.phoneDisplay}
              </a>
            </li>
          </ul>
          <Link
            href="/contato"
            className="mt-6 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-brand-cyan hover:underline"
          >
            Falar com a gente
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <FooterColumn title="Navegação" className="md:col-span-2 md:col-start-7">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={linkClasses}>
                {item.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Produtos" className="md:col-span-2">
          {PRODUCTS.map((product) => (
            <li key={product.slug}>
              <Link href={`/produtos/${product.slug}`} className={linkClasses}>
                {product.name}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Ajuda" className="md:col-span-2">
          {FOOTER_LEGAL_LINKS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={linkClasses}>
                {item.label}
              </Link>
            </li>
          ))}
        </FooterColumn>
      </div>

      <div className="relative border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-6 font-mono text-micro uppercase text-foreground-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {COMPANY.name}. Todos os direitos reservados.
          </p>
          <p>Empresa de tecnologia em formação</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <p className="font-mono text-micro font-medium uppercase text-foreground-subtle">{title}</p>
      <ul className="mt-4 flex flex-col gap-1">{children}</ul>
    </div>
  );
}
