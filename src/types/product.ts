import type { LucideIcon } from "lucide-react";

export type ProductStatus =
  | "planejamento"
  | "em-desenvolvimento"
  | "beta"
  | "producao";

export interface ProductFaqItem {
  question: string;
  answer: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  /** Categoria curta usada em badges/cards (ex.: "Gestão", "Mobile"). */
  category: string;
  icon: LucideIcon;
  /**
   * Caminho (em /public) do logotipo real do produto, quando existir.
   * Quando ausente, ProductLogoMark usa o `icon` acima como fallback.
   */
  logoSrc?: string;
  status: ProductStatus;
  audience: string[];
  problem: string;
  solution: string;
  features: string[];
  differentiators: string[];
  howItWorks: string[];
  faq: ProductFaqItem[];
}
