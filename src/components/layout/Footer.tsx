import Image from "next/image";
import Link from "next/link";
import logo from "../../../tecnodreamer.png";
import { COMPANY } from "@/constants/company";
import { FOOTER_LEGAL_LINKS, NAV_ITEMS } from "@/constants/nav";
import { PRODUCTS } from "@/constants/products";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="TecnoDreamer" width={32} height={32} />
            <span className="text-lg font-semibold text-foreground">{COMPANY.name}</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-foreground-muted">{COMPANY.shortPitch}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Navegação</h3>
          <ul className="mt-3 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-foreground-muted hover:text-brand-primary-strong">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Produtos</h3>
          <ul className="mt-3 flex flex-col gap-2">
            {PRODUCTS.map((product) => (
              <li key={product.slug}>
                <Link
                  href={`/produtos/${product.slug}`}
                  className="text-sm text-foreground-muted hover:text-brand-primary-strong"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-foreground-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {COMPANY.name}. Todos os direitos reservados.
          </p>
          <ul className="flex gap-4">
            {FOOTER_LEGAL_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand-primary-strong">
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
