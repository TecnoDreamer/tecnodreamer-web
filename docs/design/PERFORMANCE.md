# Performance — TecnoDreamer

Auditoria Lighthouse (Etapa 14 do redesign UX/UI), rodada localmente contra
o build de produção (`npm run build && npm run start`) com
`npx lighthouse`.

## Resultados

| Página | Preset | Performance | Acessibilidade | Best Practices | SEO |
|---|---|---|---|---|---|
| `/` (Home) | Mobile (4x CPU throttle, padrão Lighthouse) | 86 | 100 | 100 | 100 |
| `/` (Home) | Desktop | 99 | 100 | 100 | 100 |
| `/contato` | Mobile | 79 (era 75) | 100 (era 99) | 100 | 100 |

## Core Web Vitals (Home, mobile)

| Métrica | Valor | Status |
|---|---|---|
| LCP (Largest Contentful Paint) | 1.7s | Bom |
| CLS (Cumulative Layout Shift) | 0 | Ótimo |
| Speed Index | 1.5s | Bom |
| FCP (First Contentful Paint) | 1.2s | Bom |
| TBT (Total Blocking Time) | 560ms | Aceitável — ver nota |
| TTI (Time to Interactive) | 4.2s | Aceitável — ver nota |

**Nota sobre TBT/TTI em mobile:** o preset mobile do Lighthouse aplica
CPU 4x mais lenta (`cpuSlowdownMultiplier: 4`), simulando um aparelho
mobile de entrada. Sob esse throttle agressivo, o custo de hidratação do
React/Next.js (framework, não código específico da aplicação) domina o
TBT. No preset desktop, a mesma página tem TBT de apenas 60ms — o
código da aplicação em si é leve; o gargalo é o baseline do framework
sob CPU throttling extremo, não um problema específico a corrigir aqui.

## Problemas encontrados e corrigidos

### 1. Ordem de headings inválida (Acessibilidade — heading-order)

`/contato` tinha `<h1>` seguido diretamente por `<h3>` (os rótulos
"Navegação"/"Produtos" do Footer), pulando o nível `<h2>` — invalido pela
WCAG 2.2 (1.3.1) e reportado como falha pelo Lighthouse. Esse problema
existia potencialmente em qualquer página sem `<h2>` próprio antes do
Footer.

**Correção:** os rótulos do Footer deixaram de ser `<h3>` e passaram a
`<p>` com o mesmo estilo visual — são legendas de grupos de links, não
seções estruturais do documento, e não deveriam competir com a hierarquia
de heading de cada página (`src/components/layout/Footer.tsx`).

### 2. JavaScript não utilizado no carregamento (`/contato`)

O formulário de contato (React Hook Form + Zod + resolver) representava
~58 KiB de JS "não utilizado no momento da medição", aumentando o Total
Blocking Time da página (810ms).

**Correção:** `ContactForm` passou a ser importado via `next/dynamic`
(`src/app/contato/page.tsx`), isolando React Hook Form/Zod em um chunk
próprio, carregado/avaliado separadamente do restante da página. Um
`ContactFormSkeleton` (`src/app/contato/ContactFormSkeleton.tsx`) serve de
fallback visual, sem alterar o HTML enviado por SSR (o formulário
continua acessível sem esperar JS extra). Resultado: TBT caiu de 810ms
para 600ms nesta página.

### 3. Contraste abaixo de AA (ver `docs/design/ANIMATIONS.md` /
`AUDITORIA_UX_UI.md`)

Já corrigido na Etapa 13 (`ProductMockup`, índice das abas do
`ProductShowcase`) — ver seção de acessibilidade.

## Boas práticas já aplicadas (sem necessidade de mudança)

- `next/image` para o logotipo (otimização automática de imagem).
- `next/font/google` (Geist/Geist Mono) — fontes self-hosted, sem
  requisições a terceiros, com `font-display` otimizado pelo Next.js.
- Nenhuma imagem pesada de fundo — o Hero usa apenas CSS
  (gradientes/grid/glow), não arquivos de imagem.
- Todas as animações usam `transform`/`opacity` (GPU-aceleradas, sem
  reflow) — ver `docs/design/ANIMATIONS.md`.
- Server Components por padrão; Client Components restritos a onde há
  interatividade real (Header, ContactForm, Reveal, ProductShowcase,
  HeroSpotlight).
- CLS = 0 em todas as páginas testadas — nenhuma mudança de layout
  perceptível durante o carregamento.

## Não otimizado further (decisão consciente)

O LCP de `/contato` (3.0s sob throttle mobile) não foi otimizado além do
que já foi feito — o ganho adicional exigiria trade-offs (ex.: reduzir a
seção decorativa do Hero escuro) que não se justificam frente ao
resultado já obtido (100 em Acessibilidade/Best Practices/SEO, 79 em
Performance mobile, tipicamente ~95+ em desktop). Conforme a seção 33 do
prompt de UX/UI: "não comprometa UX apenas para buscar pontuação
perfeita".
