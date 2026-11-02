import type { Product } from "@/types/product";

/**
 * Barra de progresso de um produto (roadmap, requisitos…) — só renderiza
 * quando `product.roadmapProgress` está definido (dado real, extraído
 * da documentação do próprio produto; nunca estimado). Produtos sem
 * esse nível de detalhe documentado simplesmente não mostram a barra.
 * Usa `--product-accent` (definido pelo ancestral via productAccentVars).
 */
export function RoadmapProgress({ product }: { product: Product }) {
  const progress = product.roadmapProgress;
  if (!progress) return null;

  const percent = Math.round((progress.completed / progress.total) * 100);
  const title = progress.title ?? "Progresso do roadmap técnico";

  return (
    <div className="rounded-lg border border-border bg-background p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <span className="font-mono text-micro font-medium uppercase text-foreground-muted">{title}</span>
        <span className="text-sm text-foreground">
          <span className="text-h3 font-semibold" style={{ color: "var(--product-accent)" }}>
            {progress.completed}/{progress.total}
          </span>{" "}
          {progress.unit ?? "fases concluídas"}
        </span>
      </div>
      <div
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${title} — ${product.name}`}
        className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-surface-2"
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${percent}%`,
            background: "linear-gradient(90deg, var(--product-accent), var(--brand-purple))",
            boxShadow: "0 0 16px -2px var(--product-accent)",
          }}
        />
      </div>
      {progress.pendingLabels.length > 0 && (
        <p className="mt-4 text-sm text-foreground-muted">
          <span className="text-foreground">Ainda pendente:</span> {progress.pendingLabels.join("; ")}.
        </p>
      )}
    </div>
  );
}
