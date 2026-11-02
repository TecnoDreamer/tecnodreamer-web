import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  index?: string;
  title: ReactNode;
  /** id do h2, para `aria-labelledby` da seção. */
  id?: string;
  description?: ReactNode;
  className?: string;
  /** Conteúdo à direita do título (ex.: link "ver todos"). */
  aside?: ReactNode;
}

/** Cabeçalho editorial de seção: micro-label, título curto em caixa alta, apoio. */
export function SectionHeading({
  eyebrow,
  index,
  title,
  id,
  description,
  className,
  aside,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 flex flex-col gap-6 sm:mb-16 lg:flex-row lg:items-end lg:justify-between",
        className
      )}
    >
      <div className="max-w-3xl">
        <Eyebrow index={index}>{eyebrow}</Eyebrow>
        <h2 id={id} className="mt-5 text-h2 font-semibold uppercase text-foreground text-balance">
          {title}
        </h2>
        {description && (
          <p className="mt-5 max-w-2xl text-lead text-foreground-muted">{description}</p>
        )}
      </div>
      {aside && <div className="shrink-0">{aside}</div>}
    </Reveal>
  );
}
