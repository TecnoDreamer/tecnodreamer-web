import type { Product } from "@/types/product";

/**
 * Barra de progresso do roadmap técnico de um produto — só renderiza
 * quando `product.roadmapProgress` está definido (dado real, extraído
 * da documentação do próprio produto; nunca estimado). Produtos sem
 * esse nível de detalhe documentado (ex.: Pet & Pet, PetConnect, ainda
 * em planejamento) simplesmente não mostram a barra.
 */
export function RoadmapProgress({ product }: { product: Product }) {
  const progress = product.roadmapProgress;
  if (!progress) return null;

  const percent = Math.round((progress.completedPhases / progress.totalPhases) * 100);
  const accent = product.accentColor?.onLight.primary;

  return (
    <div className="mt-4 max-w-md">
      <div className="flex items-baseline justify-between gap-4 text-sm">
        <span className="font-medium text-foreground">Progresso do roadmap técnico</span>
        <span className="shrink-0 text-foreground-muted">
          {progress.completedPhases}/{progress.totalPhases} fases concluídas
        </span>
      </div>
      <div
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Progresso do roadmap técnico de ${product.name}`}
        className="mt-2 h-2 w-full overflow-hidden rounded-full bg-surface"
      >
        <div
          className="h-full rounded-full transition-[width] duration-700 ease-standard"
          style={{ width: `${percent}%`, backgroundColor: accent ?? "var(--color-brand-primary-strong)" }}
        />
      </div>
      {progress.pendingPhaseLabels.length > 0 && (
        <p className="mt-2 text-xs text-foreground-muted">
          Ainda pendente: {progress.pendingPhaseLabels.join("; ")}.
        </p>
      )}
    </div>
  );
}
