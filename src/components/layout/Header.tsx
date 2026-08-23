"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import logo from "../../../tecnodreamer.png";
import { NAV_ITEMS } from "@/constants/nav";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
          <Image src={logo} alt="TecnoDreamer" width={40} height={40} priority />
          <span className="text-lg font-semibold text-foreground">TecnoDreamer</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-primary-strong",
                    isActive(item.href) ? "text-brand-primary-strong" : "text-foreground"
                  )}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="/contato" className="px-5 py-2.5">
            Fale conosco
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav id="mobile-menu" aria-label="Navegação mobile" className="border-t border-border md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-base font-medium",
                    isActive(item.href)
                      ? "bg-surface text-brand-primary-strong"
                      : "text-foreground hover:bg-surface"
                  )}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
