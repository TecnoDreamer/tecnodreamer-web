import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

type SectionTone = "background" | "surface" | "ink";

const TONE_CLASSES: Record<SectionTone, string> = {
  background: "bg-background text-foreground",
  surface: "bg-surface text-foreground",
  ink: "bg-ink text-white",
};

interface SectionProps {
  children: ReactNode;
  tone?: SectionTone;
  className?: string;
  containerClassName?: string;
  id?: string;
}

export function Section({
  children,
  tone = "background",
  className,
  containerClassName,
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-24", TONE_CLASSES[tone], className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
