"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../../../tecnodreamer.png";
import { COMPANY } from "@/constants/company";
import { NAV_ITEMS } from "@/constants/nav";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";

/**
 * Header fixo. Transparente sobre o topo de qualquer página (todas começam
 * com um herói escuro no Design System V3) e com superfície escura
 * translúcida depois de rolar. O estado fica em `data-state` para estilos
 * e testes não dependerem de classes utilitárias.
 */
export function Header() {
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // ESC fecha o menu, foco vai para o primeiro link e fica preso (focus
  // trap) dentro do overlay, e o scroll do body é bloqueado enquanto aberto.
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const firstNavLink = menuRef.current?.querySelector<HTMLElement>("nav a, nav button");
    firstNavLink?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        menuToggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;

      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        "a, button:not([disabled])"
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  // Fecha o menu se a tela crescer até o breakpoint desktop com ele aberto.
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const desktop = window.matchMedia("(min-width: 768px)");
    function handleChange(event: MediaQueryListEvent) {
      if (event.matches) setIsMobileMenuOpen(false);
    }
    desktop.addEventListener("change", handleChange);
    return () => desktop.removeEventListener("change", handleChange);
  }, [isMobileMenuOpen]);

  return (
    <header
      data-state={isScrolled ? "solid" : "transparent"}
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ease-standard",
        isScrolled
          ? "border-border bg-background/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[var(--header-height)] w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 rounded-full">
          <Image src={logo} alt="TecnoDreamer" width={36} height={36} priority />
          <span className="text-base font-semibold tracking-tight text-foreground">
            TecnoDreamer
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-border bg-surface/40 p-1 backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                      active
                        ? "bg-white/[0.08] text-foreground"
                        : "text-foreground-muted hover:text-foreground"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="/contato" variant="outline" className="px-5">
            Fale conosco
            <ArrowUpRight size={16} aria-hidden="true" />
          </ButtonLink>
        </div>

        <button
          ref={menuToggleRef}
          type="button"
          className="relative z-[51] inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-brand-cyan md:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="animate-menu-in fixed inset-0 z-50 flex flex-col overflow-y-auto bg-background/[0.98] backdrop-blur-xl md:hidden"
        >
          <div aria-hidden="true" className="tech-grid-bg pointer-events-none absolute inset-0" />
          <div className="relative flex h-[var(--header-height)] shrink-0 items-center px-4 sm:px-6">
            <Link href="/" onClick={closeMobileMenu} className="flex items-center gap-2.5">
              <Image src={logo} alt="TecnoDreamer" width={36} height={36} />
              <span className="text-base font-semibold text-foreground">TecnoDreamer</span>
            </Link>
          </div>

          <nav aria-label="Navegação mobile" className="relative flex flex-1 flex-col px-4 pb-8 pt-6 sm:px-6">
            <ul className="flex flex-col border-t border-border">
              {NAV_ITEMS.map((item, index) => (
                <li key={item.href} className="border-b border-border">
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "flex min-h-14 items-center justify-between gap-4 py-4 text-2xl font-semibold uppercase tracking-tight",
                      isActive(item.href) ? "text-brand-cyan" : "text-foreground"
                    )}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                    <span aria-hidden="true" className="font-mono text-micro text-foreground-subtle">
                      /{String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href="/contato" onClick={closeMobileMenu} className="w-full">
                Fale conosco
              </ButtonLink>
            </div>
            <ul className="mt-8 flex flex-col gap-2 text-sm text-foreground-muted">
              <li>
                <a href={`mailto:${COMPANY.contact.email}`} className="hover:text-foreground">
                  {COMPANY.contact.email}
                </a>
              </li>
              <li>
                <a href={COMPANY.contact.phoneHref} className="hover:text-foreground">
                  {COMPANY.contact.phoneDisplay}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
