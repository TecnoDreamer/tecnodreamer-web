import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  /** Índice da seção (ex.: "02"), exibido antes do rótulo como "/02". */
  index?: string;
  className?: string;
}

/** Micro-label técnico: mono, caixa alta, com índice e sinal luminoso. */
export function Eyebrow({ children, index, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 font-mono text-micro font-medium uppercase text-foreground-muted",
        className
      )}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-cyan shadow-[0_0_10px_var(--brand-cyan)]" />
      {index && <span className="text-brand-cyan">/{index}</span>}
      <span>{children}</span>
    </p>
  );
}
