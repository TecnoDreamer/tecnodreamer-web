# Design System V3 — TecnoDreamer (futurista dark)

Data: 2026-11-02. Substitui o V1/V2 (site claro com seções escuras): o site
inteiro passa a ser escuro. Implementação em `src/app/globals.css`
(tokens em `:root`, expostos ao Tailwind v4 via `@theme inline`).
Auditoria de origem: `docs/design/AUDITORIA_REDESIGN_TECNODREAMER.md`.

Referência visual: landing page futurista escura (fundo preto, grafite,
tipografia editorial grande, linhas de 1px, micro-labels numeradas, cards
translúcidos). Transposta para a TecnoDreamer com arte original e as cores
do logotipo. Nada da referência foi copiado (marca, textos, rosto, gráficos).

## 1. Cores

### 1.1 Marca — amostradas por pixel do logotipo oficial

| Token | HEX | Origem no logo (`tecnodreamer.png`, 500×500) |
|---|---|---|
| `--brand-cyan` | `#28E1F7` | Anel externo, topo (250,28) |
| `--brand-blue` | `#1B92C7` | Monograma "D", parte superior (300,170) |
| `--brand-cobalt` | `#2655AD` | Monograma "T", parte superior (170,170) |
| `--brand-indigo` | `#382DAB` | Anel inferior direito (340,460) |
| `--brand-violet` | `#861ED0` | Monograma, parte inferior (300,340) |
| `--brand-purple` | `#A935F0` | Anel inferior esquerdo (160,460) |
| `--brand-navy` | `#0B2941` | Fundo do emblema (250,420) |

### 1.2 Gradações derivadas (não estão no logo)

| Token | HEX | Por quê |
|---|---|---|
| `--brand-purple-light` | `#C77DFF` | Roxo clareado para texto: `#A935F0` dá só 4,2:1 sobre o fundo. |

### 1.3 Superfícies, texto, linhas e feedback

| Token | Valor | Uso | Contraste |
|---|---|---|---|
| `--background` | `#05080F` | Fundo base (navy do logo escurecido) | — |
| `--surface` | `#0A101C` | Seções alternadas, cards | — |
| `--surface-2` | `#101828` | Superfície elevada, trilho de progresso | — |
| `--ink` | `#020409` | CTA final e rodapé | — |
| `--foreground` | `#EEF4FA` | Títulos e texto principal | 17,9:1 sobre `--background` |
| `--foreground-muted` | `#9AA8BC` | Texto de apoio | 8,3:1 (`--background`); 7,4:1 (`--surface-2`) |
| `--foreground-subtle` | `#6B7A90` | Só decorativo ou rótulos sobre `--background`/`--ink` | 4,6:1 (`--background`); **4,1:1 sobre `--surface-2`: não usar ali** |
| `--border` | `rgba(154,190,230,.12)` | Linhas de 1px, grids | — |
| `--border-strong` | `rgba(154,190,230,.24)` | Contorno de botões e chips | — |
| `--color-success` | `#34D399` | Envio do formulário | — |
| `--color-warning` | `#FBBF24` | Avisos | — |
| `--color-error` | `#F87171` | Erros de validação | 6,4:1 sobre `--surface-2` |

Combinações-chave:
- Texto `--ink`/`--background` sobre `--brand-cyan` (botão primário): **12,7:1**.
- `--brand-cyan` como texto sobre `--background`: **12,7:1**.
- `--brand-blue` como texto sobre `--background`: **5,7:1**.
- Texto em gradiente (`.text-gradient-brand`) só em títulos ≥ 30px: o ponto
  mais escuro (`#C77DFF`) tem 7,5:1.
- Lucratix usa a própria paleta no escuro (`#3B82F6`, 5,5:1).

### 1.4 Aliases V1/V2

`--color-brand-primary` → cyan, `--color-brand-primary-strong` → blue,
`--color-brand-secondary` → purple, `--color-brand-secondary-alt` → indigo,
`--color-brand-glow` → cyan. Mantidos para não quebrar código antigo; código
novo usa os nomes V3 (`brand-cyan`, `brand-purple`…).

### 1.5 Estados

- **Hover:** texto muted → foreground; bordas → `--brand-cyan`; botão
  primário → fundo branco com glow ciano.
- **Focus:** `outline: 2px solid --brand-cyan`, `offset 3px` em todo
  elemento focável (`:focus-visible`).
- **Active:** botões `scale(0.98)`.
- **Erro em campo:** borda `--color-error` via `aria-invalid="true"`.

## 2. Tipografia

Família: **Geist** (sans) e **Geist Mono** (micro-labels, números),
self-hosted pelo `next/font`. Nenhuma fonte nova foi adicionada.

| Token (utilitário) | Tamanho fluido | Line-height | Tracking | Uso |
|---|---|---|---|---|
| `text-display` | `clamp(2.5rem, 1.35rem + 5.6vw, 6.25rem)` | 0.92 | −0.045em | H1 da home, "404" |
| `text-h1` | `clamp(2.25rem, 1.5rem + 3.6vw, 4.5rem)` | 0.98 | −0.04em | H1 das páginas internas |
| `text-h2` | `clamp(1.875rem, 1.3rem + 2.6vw, 3.5rem)` | 1 | −0.035em | Títulos de seção |
| `text-h3` | `clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)` | 1.2 | — | Títulos de card |
| `text-lead` | `clamp(1.0625rem, 1rem + 0.35vw, 1.25rem)` | 1.6 | — | Introduções |
| `text-micro` | `0.6875rem` | 1.4 | 0.16em | Micro-labels mono em caixa alta |

Regras:
- Títulos editoriais em **caixa alta via CSS** (`uppercase`), curtos, peso 600.
  O texto no DOM continua em caixa normal (leitores de tela e buscas).
- **Nomes de produto mantêm a grafia da marca** (`preserveCase` no `PageHero`).
- Corpo em `text-base`/`text-sm`, peso 400.

## 3. Espaçamento, grid e layout

- Container: `max-w-7xl` (1280px), gutter **16px** no mobile, 24px no `sm`,
  32px no `lg`.
- Seções: `py-20` / `sm:py-28`. Divisória opcional de 1px no topo (`divider`).
- Grid de 12 colunas no desktop para composições assimétricas (7/5, 5/7, 4/8).
- **Grid técnico de células:** `gap-px` sobre `bg-border` (linhas de 1px
  reais), com células vazias de preenchimento quando a última linha não
  fecha.
- Breakpoints Tailwind padrão: `sm` 640, `md` 768, `lg` 1024, `xl` 1280.
- Header fixo de `--header-height` (4.5rem). Heróis reservam esse espaço;
  `scroll-padding-top` evita que âncoras fiquem sob o header.

## 4. Raio, sombras, glow e z-index

- Raios: `--radius-sm` 6px, `--radius-md` 12px, `--radius-lg` 20px; pílulas
  (`rounded-full`) em botões e chips.
- Sombras: quase nenhuma; profundidade vem de superfícies e linhas.
- **Glow (reservado):** herói (arte e halo), CTA final (`.glow-cyan`), hover
  de cards de produto (`.product-card-hover`, na cor do produto), botão
  primário no hover. Não usar em listas, textos ou seções comuns.
- z-index: header 40, menu mobile 50, botão do menu 51, link "pular para o
  conteúdo" 60.

## 5. Motion

| Item | Valor |
|---|---|
| Durações | 150–200ms (cor/hover), 300ms (cards), 700ms (reveal), 900ms (entrada do herói), 1600ms (linha do processo) |
| Easing | `--ease-standard` `cubic-bezier(0.2,0,0,1)`; `--ease-emphasized` `cubic-bezier(0.3,0,0.1,1)` |
| Stagger | 80–90ms entre itens (máx. 400ms) |
| Loops | Só dois, decorativos: anel do herói (90s por volta) e pontos pulsantes (2.4s) |

Regras:
- Só `transform` e `opacity` (sem animar layout).
- **Reveal sem dependência de JS:** o estado escondido só vale com
  `<html class="js">` (script inline no layout). Sem JS, tudo aparece.
- **H1 de entrada não anima opacidade** (só `transform`) para não atrasar o LCP.
- `prefers-reduced-motion: reduce` desliga animações e transições e mostra
  todo o conteúdo do Reveal de imediato.
- Logo oficial **nunca** gira nem se deforma; só a arte ao redor se move.

## 6. Iconografia e imagens

- Ícones: `lucide-react`, traço linear, 16–22px, sempre `aria-hidden` quando
  decorativos.
- Símbolos geométricos: marcas de canto (`.corner-ticks`), sinais luminosos
  (ponto ciano do `Eyebrow`), grade técnica (`.tech-grid-bg`).
- Logos: `next/image` com `object-contain`, sem recorte e sem distorção. Logos
  com partes escuras sobre fundo transparente usam placa clara
  (`Product.logoPlate = "light"`, hoje só o Pet & Pet).
- Arte do herói: SVG original (`HeroVisual`), sem imagens de terceiros.
- Fotos da equipe: só pessoas reais com autorização (`src/constants/team.ts`).

## 7. Componentes

| Componente | Arquivo | Papel |
|---|---|---|
| `Eyebrow` | `ui/Eyebrow.tsx` | Micro-label mono com índice `/0N` e sinal luminoso |
| `SectionHeading` | `ui/SectionHeading.tsx` | Eyebrow + H2 editorial + apoio + ação à direita |
| `PageHero` | `ui/PageHero.tsx` | Herói das páginas internas (H1 único) |
| `Section` | `ui/Section.tsx` | Tons `background`/`surface`/`ink`, `divider` |
| `Button`/`ButtonLink` | `ui/Button.tsx` | `primary` (ciano), `outline`, `ghost`; altura mínima 44px |
| `StatusBadge` | `ui/Badge.tsx` | Status do produto em mono, com ponto |
| `ProductCard` | `ui/ProductCard.tsx` | Card grande 01/02/03 |
| `ProductLogoMark` | `ui/ProductLogoMark.tsx` | Logo íntegro (sm/md/lg/xl), placa clara opcional |
| `RoadmapProgress` | `ui/RoadmapProgress.tsx` | Progresso real (só quando documentado) |
| `TeamMemberCard` | `ui/TeamMemberCard.tsx` | Foto + dados reais |
| `Reveal` | `ui/Reveal.tsx` | Entrada ao scroll, sem esconder conteúdo sem JS |
| `Hero`, `HeroVisual` | `sections/` | Herói da home e arte SVG |
| `InstitutionalStrip` | `sections/` | Faixa de rótulos verificáveis |
| `EcosystemGrid` | `sections/` | Grade técnica 3 produtos + 3 apoios |
| `ProductFeatureCards` | `sections/` | Seção dos cards 01/02/03 |
| `Differentiators` | `sections/` | 4 diferenciais em linhas editoriais |
| `ProcessTimeline` | `sections/` | 6 etapas com linha progressiva |
| `AboutTeam` | `sections/` | Sobre + equipe |
| `FinalCta` | `sections/` | CTA final reutilizável com contatos reais |

Removidos no V3: `ProductShowcase` (abas) e `ProductMockup` (mockup abstrato).
O conteúdo deles (solução, diferenciais) continua nas páginas de produto.
