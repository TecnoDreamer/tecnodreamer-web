import type { CSSProperties, ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  /** CTAs, badges ou metadados abaixo da introdução. */
  children?: ReactNode;
  /** Elemento à direita no desktop (ex.: logo do produto). */
  aside?: ReactNode;
  /** Títulos de produto mantêm a grafia original da marca. */
  preserveCase?: boolean;
  className?: string;
  style?: CSSProperties;
}

/**
 * Herói das páginas internas: grade técnica, um único brilho atmosférico,
 * micro-label e H1 editorial. Reserva a altura do header fixo no topo.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  aside,
  preserveCase = false,
  className,
  style,
}: PageHeroProps) {
  return (
    <section
      style={style}
      className={cn(
        "relative overflow-hidden border-b border-border bg-background pb-16 pt-[calc(var(--header-height)+4rem)] sm:pb-20 sm:pt-[calc(var(--header-height)+6rem)]",
        className
      )}
    >
      <div aria-hidden="true" className="tech-grid-bg absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-15%] h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--product-accent-secondary) 28%, transparent), transparent 70%)",
        }}
      />
      <Container className="relative">
        <div className={cn("grid gap-12", Boolean(aside) &&"lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center")}>
          {/* Entrada só com CSS e sem opacidade: o H1 costuma ser o LCP. */}
          <div className="hero-rise">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1
              className={cn(
                "mt-6 max-w-4xl text-h1 font-semibold text-foreground text-balance",
                !preserveCase && "uppercase"
              )}
            >
              {title}
            </h1>
            {intro && <div className="mt-6 max-w-2xl text-lead text-foreground-muted">{intro}</div>}
            {children && <div className="mt-8">{children}</div>}
          </div>
          {aside && (
            <div
              className="hero-rise justify-self-start lg:justify-self-end"
              style={{ "--rise-delay": "120ms" } as CSSProperties}
            >
              {aside}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
