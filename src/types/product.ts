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
 * Progresso real e verificável do produto (itens concluídos vs. total),
 * quando ele tem esse nível de detalhe documentado — fases de roadmap,
 * requisitos funcionais etc. Nunca deve ser estimado: apenas refletir o
 * que já foi de fato implementado.
 */
export interface ProductRoadmapProgress {
  /** O que está sendo contado. Padrão: "Progresso do roadmap técnico". */
  title?: string;
  /** Unidade exibida após "N/M". Padrão: "fases concluídas". */
  unit?: string;
  completed: number;
  total: number;
  /** O que ainda falta, em frases curtas, para explicar o que não está pronto. */
  pendingLabels: string[];
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
  /**
   * "light" quando o logotipo tem fundo transparente e partes escuras que
   * somem sobre o tema escuro (ex.: texto preto do Pet & Pet): o
   * ProductLogoMark põe uma placa clara atrás, sem alterar o arquivo.
   */
  logoPlate?: "light";
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
