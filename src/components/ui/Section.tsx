import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

/**
 * Tons V3 (todos escuros): `background` é o fundo base, `surface` um degrau
 * acima (seções alternadas) e `ink` o mais profundo (CTA, rodapé).
 */
type SectionTone = "background" | "surface" | "ink";

const TONE_CLASSES: Record<SectionTone, string> = {
  background: "bg-background text-foreground",
  surface: "bg-surface text-foreground",
  ink: "bg-ink text-foreground",
};

interface SectionProps {
  children: ReactNode;
  tone?: SectionTone;
  /** Linha de 1px no topo, separando seções como no grid técnico. */
  divider?: boolean;
  className?: string;
  containerClassName?: string;
  id?: string;
  style?: CSSProperties;
  "aria-labelledby"?: string;
}

export function Section({
  children,
  tone = "background",
  divider = false,
  className,
  containerClassName,
  id,
  style,
  "aria-labelledby": labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      style={style}
      aria-labelledby={labelledBy}
      className={cn(
        "relative py-20 sm:py-28",
        TONE_CLASSES[tone],
        divider && "border-t border-border",
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
