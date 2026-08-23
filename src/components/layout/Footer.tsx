import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import logo from "../../../tecnodreamer.png";
import { COMPANY } from "@/constants/company";
import { FOOTER_LEGAL_LINKS, NAV_ITEMS } from "@/constants/nav";
import { PRODUCTS } from "@/constants/products";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="tech-grid-bg absolute inset-0 opacity-60" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="TecnoDreamer" width={32} height={32} />
            <span className="text-lg font-semibold text-white">{COMPANY.name}</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm text-white/60">{COMPANY.shortPitch}</p>
          <Link
            href="/contato"
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-primary hover:underline"
          >
            Falar com a gente
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Navegação</p>
          <ul className="mt-3 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/60 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Produtos</p>
          <ul className="mt-3 flex flex-col gap-2">
            {PRODUCTS.map((product) => (
              <li key={product.slug}>
                <Link
                  href={`/produtos/${product.slug}`}
                  className="text-sm text-white/60 hover:text-white"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {COMPANY.name}. Todos os direitos reservados.
          </p>
          <ul className="flex gap-4">
            {FOOTER_LEGAL_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
