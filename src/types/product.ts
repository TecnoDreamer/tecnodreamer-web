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
  status: ProductStatus;
  audience: string[];
  problem: string;
  solution: string;
  features: string[];
  differentiators: string[];
  howItWorks: string[];
  faq: ProductFaqItem[];
}
