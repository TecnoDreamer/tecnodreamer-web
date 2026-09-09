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

/**
 * Par de cores (fundo claro/escuro) para um tom de marca do produto.
 * Ex.: `primary` é a cor de destaque; `secondary` é o tom de apoio usado
 * em gradientes/realces.
 */
export interface ProductAccentTone {
  primary: string;
  secondary: string;
}

/**
 * Identidade visual própria de um produto, quando ele já tem uma (ex.:
 * logotipo oficial com paleta extraída por amostragem de pixel — nunca
 * escolhida livremente). Usada para um tingimento pontual em cards,
 * abas e páginas do produto — não substitui a marca da TecnoDreamer de
 * forma ampla (header, footer, CTAs seguem sempre a marca do site).
 * Produtos sem este campo usam a paleta padrão da TecnoDreamer (ver
 * `--product-accent*` em `src/app/globals.css`).
 */
export interface ProductAccentColor {
  /** Tons para uso sobre fundos claros (Section tone="background"/"surface"). */
  onLight: ProductAccentTone;
  /** Tons para uso sobre fundos escuros (Section tone="ink"). */
  onDark: ProductAccentTone;
}

/**
 * Progresso real e verificável do roadmap técnico do produto (fases
 * concluídas vs. total), quando o produto tem esse nível de detalhe
 * documentado. Nunca deve ser estimado — apenas refletir o que já foi
 * de fato implementado e testado.
 */
export interface ProductRoadmapProgress {
  completedPhases: number;
  totalPhases: number;
  /** Nomes curtos das fases ainda pendentes, para explicar o que falta. */
  pendingPhaseLabels: string[];
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
  /** Identidade visual própria do produto, quando existir. */
  accentColor?: ProductAccentColor;
  /** Progresso do roadmap técnico, quando documentado com esse detalhe. */
  roadmapProgress?: ProductRoadmapProgress;
  status: ProductStatus;
  audience: string[];
  problem: string;
  solution: string;
  features: string[];
  differentiators: string[];
  howItWorks: string[];
  faq: ProductFaqItem[];
}
