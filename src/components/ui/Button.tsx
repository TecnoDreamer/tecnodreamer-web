import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * - primary: ciano sólido do logo com texto quase preto (12,7:1).
 * - outline: contornado, para CTAs secundários e o CTA do header.
 * - ghost: só texto, para links de ação dentro de seções.
 */
type ButtonVariant = "primary" | "outline" | "ghost";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-cyan text-ink hover:bg-white hover:shadow-[0_0_32px_-6px_var(--brand-cyan)]",
  outline:
    "border border-border-strong text-foreground hover:border-brand-cyan hover:text-brand-cyan hover:bg-brand-cyan/5",
  ghost: "px-0 text-foreground hover:text-brand-cyan",
};

const BASE_CLASSES =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-standard active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
}

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(BASE_CLASSES, VARIANT_CLASSES[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  variant = "primary",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(BASE_CLASSES, VARIANT_CLASSES[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
