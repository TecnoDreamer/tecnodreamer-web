import type { ProductStatus } from "@/types/product";
import { PRODUCT_STATUS_LABEL } from "@/constants/products";
import { cn } from "@/lib/utils";

const STATUS_CLASSES: Record<ProductStatus, string> = {
  planejamento: "bg-slate-100 text-slate-700",
  "em-desenvolvimento": "bg-brand-secondary/10 text-brand-secondary",
  beta: "bg-warning/10 text-warning",
  producao: "bg-success/10 text-success",
};

export function StatusBadge({ status }: { status: ProductStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        STATUS_CLASSES[status]
      )}
    >
      {PRODUCT_STATUS_LABEL[status]}
    </span>
  );
}
