"use client";

import { useEffect, useRef, useState } from "react";
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
  const isHome = pathname === "/";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Transição de fundo do header: transparente sobre o Hero escuro da Home
  // (ainda não rolado), sólido em todas as outras situações.
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = isHome && !isScrolled;
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // ESC fecha o menu, foco vai para o primeiro link e trava (focus trap)
  // dentro do overlay, e o scroll do body é bloqueado enquanto aberto.
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

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300 ease-standard",
        isTransparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-border bg-background/90 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="TecnoDreamer" width={40} height={40} priority />
          <span
            className={cn(
              "text-lg font-semibold transition-colors duration-300",
              isTransparent ? "text-white" : "text-foreground"
            )}
          >
            TecnoDreamer
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative py-1 text-sm font-medium transition-colors duration-150",
                      "after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-brand-primary after:transition-transform after:duration-300 after:ease-standard hover:after:scale-x-100",
                      active && "after:scale-x-100",
                      isTransparent
                        ? active
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                        : active
                          ? "text-brand-primary-strong"
                          : "text-foreground hover:text-brand-primary-strong"
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
          <ButtonLink href="/contato" className="px-5 py-2.5">
            Fale conosco
          </ButtonLink>
        </div>

        <button
          ref={menuToggleRef}
          type="button"
          className={cn(
            "relative z-[51] inline-flex min-h-11 min-w-11 items-center justify-center rounded-md transition-colors md:hidden",
            isMobileMenuOpen ? "text-white" : isTransparent ? "text-white" : "text-foreground"
          )}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="animate-menu-in fixed inset-0 z-50 bg-ink/98 backdrop-blur-md md:hidden"
        >
          <div className="flex items-center px-6 py-4">
            <Link href="/" onClick={closeMobileMenu} className="flex items-center gap-2">
              <Image src={logo} alt="TecnoDreamer" width={36} height={36} />
              <span className="text-lg font-semibold text-white">TecnoDreamer</span>
            </Link>
          </div>

          <nav aria-label="Navegação mobile" className="px-6 py-8">
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "block min-h-11 rounded-md px-3 py-3 text-lg font-medium",
                      isActive(item.href)
                        ? "bg-white/10 text-brand-primary"
                        : "text-white/90 hover:bg-white/5"
                    )}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <ButtonLink href="/contato" onClick={closeMobileMenu} className="w-full justify-center">
                Fale conosco
              </ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
