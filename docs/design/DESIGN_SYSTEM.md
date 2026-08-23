# Design System — TecnoDreamer

Fonte: paleta extraída do logotipo oficial (`tecnodreamer.png`/`.jpeg`),
conforme `docs/auditoria/AUDITORIA_INICIAL.md` §5. O logotipo em si nunca é
alterado — este documento define como a identidade visual dele se estende
ao restante do site.

## 1. Cores

Implementadas como CSS custom properties em `src/app/globals.css`, expostas
ao Tailwind v4 via `@theme inline`.

| Token | Valor (claro) | Uso |
|---|---|---|
| `--color-brand-primary` | `#22D3EE` | Cor de marca principal (ciano do anel/nuvem do logo). CTAs primários, links, destaques, foco. |
| `--color-brand-primary-strong` | `#0E7490` | Variante escura do ciano — texto/ícone sobre fundo claro, hover de CTA. |
| `--color-brand-secondary` | `#7C3AED` | Roxo do gradiente do monograma "TD". Acentos secundários, gradientes, badges. |
| `--color-brand-secondary-alt` | `#4F46E5` | Índigo do gradiente do monograma. Usado junto com o roxo em gradientes (hero, ícones). |
| `--color-ink` | `#0B1220` | Azul-marinho quase preto do fundo do emblema. Seções de destaque (hero escuro), texto sobre fundo claro em variantes de alto contraste. |
| `--color-background` | `#FFFFFF` | Fundo principal do site (branco, conforme instrução do prompt mestre). |
| `--color-surface` | `#F8FAFC` | Fundo de seções alternadas/cards sobre o branco. |
| `--color-text` | `#0F172A` | Texto padrão. |
| `--color-text-muted` | `#475569` | Texto secundário/legendas. |
| `--color-border` | `#E2E8F0` | Bordas, divisores. |
| `--color-success` | `#16A34A` | Mensagens de sucesso (ex.: formulário enviado). |
| `--color-warning` | `#D97706` | Avisos (ex.: produto em desenvolvimento). |
| `--color-error` | `#DC2626` | Erros de validação. |

**Regra de contraste:** texto sobre `--color-brand-primary` usa
`--color-ink` (não branco), pois o ciano claro não garante AA com branco.
Texto sobre `--color-ink` usa branco.

**Modo escuro:** nesta fase o site é claro por padrão (branco predominante,
conforme instrução do prompt). Uma seção hero pode usar `--color-ink` como
fundo local para reproduzir o clima do logotipo, sem exigir um tema escuro
completo do site.

## 2. Tipografia

Mantém as fontes já configuradas no projeto (`next/font/google`):

- **Sans (padrão):** Geist — títulos e corpo de texto.
- **Mono:** Geist Mono — trechos técnicos (ex.: nomes de rota, código),
  usado com moderação.

| Estilo | Tamanho / peso | Uso |
|---|---|---|
| Display | `text-4xl` a `text-6xl`, `font-semibold` | Hero da Home e heros de produto. |
| H1 | `text-3xl` / `text-4xl`, `font-semibold` | Título principal de cada página. |
| H2 | `text-2xl` / `text-3xl`, `font-semibold` | Títulos de seção. |
| H3 | `text-xl`, `font-medium` | Subtítulos, títulos de card. |
| Body | `text-base`, `font-normal` | Parágrafos. |
| Small | `text-sm`, `text-[--color-text-muted]` | Legendas, metadados. |

## 3. Espaçamento e layout

- Escala de espaçamento padrão do Tailwind (`4px` base).
- Container principal: largura máxima `max-w-6xl` (72rem), padding
  horizontal `px-6` (mobile) / `px-8` (desktop).
- Seções (`<Section>`): padding vertical `py-16` (mobile) / `py-24`
  (desktop).

## 4. Breakpoints (padrão Tailwind)

| Nome | Largura mínima |
|---|---|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

## 5. Border-radius e sombras

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | `0.375rem` | Inputs, badges pequenos. |
| `--radius-md` | `0.75rem` | Cards, botões. |
| `--radius-lg` | `1.25rem` | Blocos de destaque (hero cards). |
| `--radius-full` | `9999px` | Botão CTA primário, avatares (ecoa a moldura circular do logo). |
| `--shadow-sm` | sombra sutil (`0 1px 2px rgb(0 0 0 / 0.05)`) | Cards em repouso. |
| `--shadow-md` | sombra média (`0 8px 24px rgb(15 23 42 / 0.08)`) | Cards em hover, elementos flutuantes. |

## 6. Componentes base (ver `src/components/ui`)

- **Button** — variantes `primary` (fundo `brand-primary`, texto `ink`),
  `secondary` (contorno, texto `brand-primary-strong`) e `ghost` (texto
  simples, usado em links de navegação).
- **Container** — largura máxima + padding responsivo.
- **Section** — wrapper de seção com padding vertical e variante de fundo
  (`background` | `surface` | `ink`).
- **ProductCard** — nome, descrição curta, problema resolvido, badge de
  status, CTA "Conhecer produto".
- **Badge** — indicador de status do produto (`Planejamento`,
  `Em desenvolvimento`, `Beta`, `Produção`).

## 7. Ícones

Biblioteca moderna leve, tree-shakeable (ex.: `lucide-react`), usada apenas
onde o ícone agrega clareza (navegação mobile, status, redes sociais) —
nunca decorativa sem propósito.

## 8. Estados

- **Foco:** anel visível (`outline`/`ring`) usando `--color-brand-primary`
  em todo elemento interativo — obrigatório para acessibilidade por
  teclado.
- **Hover:** leve escurecimento/realce da cor base, nunca mudança abrupta
  de layout.
- **Disabled:** opacidade reduzida (~50%) + `cursor-not-allowed`.
- **Erro (formulário):** borda `--color-error` + texto de erro abaixo do
  campo, associado via `aria-describedby`.
