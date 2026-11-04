import type { ProductStatus } from "@/types/product";
import { PRODUCT_STATUS_LABEL } from "@/constants/products";
import { cn } from "@/lib/utils";

const STATUS_CLASSES: Record<ProductStatus, string> = {
  planejamento: "border-border-strong text-foreground-muted",
  "em-desenvolvimento": "border-brand-purple/40 text-brand-purple-light",
  beta: "border-warning/40 text-warning",
  producao: "border-success/40 text-success",
};

const DOT_CLASSES: Record<ProductStatus, string> = {
  planejamento: "bg-foreground-muted",
  "em-desenvolvimento": "bg-brand-purple-light",
  beta: "bg-warning",
  producao: "bg-success",
};

export function StatusBadge({ status }: { status: ProductStatus }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.12em]",
        STATUS_CLASSES[status]
      )}
    >
      <span aria-hidden="true" className={cn("h-1.5 w-1.5 rounded-full", DOT_CLASSES[status])} />
      {PRODUCT_STATUS_LABEL[status]}
    </span>
  );
}
