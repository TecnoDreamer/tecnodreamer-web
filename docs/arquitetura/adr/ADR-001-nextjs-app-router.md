# ADR-001 — Uso do App Router do Next.js

## Contexto
O projeto foi criado com `create-next-app` já usando o App Router
(`src/app/`), na versão 16.3.2 do Next.js. O prompt mestre do projeto
recomenda explicitamente o App Router.

## Decisão
Manter e usar exclusivamente o App Router (`src/app`), sem introduzir o
Pages Router. Páginas institucionais são majoritariamente Server
Components; Client Components são usados apenas onde há interatividade
real (menu mobile, formulário de contato).

## Alternativas consideradas
- **Pages Router:** descartado — o projeto já nasceu no App Router e o
  prompt mestre recomenda o App Router; migrar para trás não traria
  benefício.
- **Framework diferente (ex. Astro, Remix):** descartado — fora do escopo
  definido (stack prioriza Next.js/React/TypeScript).

## Consequências
- `params`/`searchParams` são `Promise` (necessário `await`).
- Uso dos helpers globais `PageProps<'/rota'>` e `LayoutProps<'/rota'>`
  gerados por `next dev`/`next build`/`next typegen` para tipagem de rotas.
- Metadata via Metadata API (`export const metadata` / `generateMetadata`),
  nunca `<head>` manual no root layout.
- Formulário de contato implementado como Route Handler
  (`app/api/contato/route.ts`), não como Pages API Route.
