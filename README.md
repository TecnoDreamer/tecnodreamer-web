# TecnoDreamer

Site institucional da TecnoDreamer — empresa de tecnologia focada em
produtos digitais para o mercado pet e para marketing orientado a dados.

## Sobre

Este repositório contém o site institucional que apresenta a TecnoDreamer,
seu portfólio de produtos, a equipe e o canal de contato. É construído como
um projeto profissional de Engenharia de Software, com documentação de
produto, arquitetura, segurança e testes versionada em `docs/`.

## Produtos apresentados

- **Sistema de Gestão Pet** — gestão para pet shops, clínicas veterinárias
  e agropecuárias.
- **PetConnect** — identificação e localização de pets por QR Code.
- **Marketing Analytics** — inteligência de dados para decisões de
  marketing.
- **Produto 04** — espaço reservado para o próximo produto do portfólio.

Todos em fase de planejamento — ver o status real de cada um em
`/produtos` no site.

## Tecnologias

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19 + TypeScript (`strict`)
- Tailwind CSS v4
- Zod + React Hook Form (validação do formulário de contato)
- Vitest (testes unitários) + Playwright (testes E2E)

> Este projeto usa uma versão do Next.js mais recente que o comum em bases
> de conhecimento de modelos de IA — ver `AGENTS.md` antes de alterar
> convenções de rotas/metadata.

## Arquitetura

```text
Browser
   ↓
Next.js (App Router, Server Components por padrão)
   ↓
Route Handler (app/api/contato) — único endpoint com entrada externa
   ↓
Service (validação Zod, sanitização)
   ↓
Rate limiter em memória + Logger seguro
```

Sem banco de dados nesta fase — ver `docs/diagramas/ARQUITETURA.md` e
`docs/arquitetura/adr/`.

## Instalação

```bash
npm install
```

## Configuração

Copie `.env.example` para `.env.local` e ajuste conforme necessário:

```bash
cp .env.example .env.local
```

### Variáveis de ambiente

| Variável | Descrição | Padrão |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL pública usada em metadata, sitemap e robots.txt — opcional na Vercel (ver `docs/DEPLOY.md`) | `http://localhost:3000` |

Nunca versione um `.env` real — apenas `.env.example` é versionado.

## Banco de dados

Não há banco de dados nesta fase do projeto — ver
`docs/auditoria/AUDITORIA_INICIAL.md` §8 e `docs/produto/ROADMAP.md`.

## Scripts

```bash
npm run dev        # servidor de desenvolvimento (Turbopack)
npm run build      # build de produção
npm run start       # serve o build de produção
npm run lint        # ESLint
npm run test         # testes unitários (Vitest)
npm run test:watch   # testes unitários em modo watch
npm run test:e2e     # testes E2E (Playwright)
```

## Testes

Ver `docs/testes/ESTRATEGIA_DE_TESTES.md` para a estratégia completa.
Resumo:

```bash
npm run test       # unitários — schemas, rate limiter, utils
npm run test:e2e   # E2E — navegação, menu mobile, contato, 404 (desktop + mobile)
```

## Segurança

Ver `docs/seguranca/SEGURANCA.md` (análise OWASP Top 10) e
`docs/seguranca/LGPD.md` (tratamento de dados do formulário de contato).
Vulnerabilidades devem ser reportadas conforme `SECURITY.md`.

## Estrutura

```text
src/
├── app/            # rotas (App Router)
├── components/
│   ├── ui/          # componentes reutilizáveis (Button, Card, etc.)
│   └── layout/       # Header, Footer
├── constants/         # dados de conteúdo (produtos, empresa, equipe, nav)
├── lib/                # utilitários (rate limiter, cn)
├── schemas/             # validação Zod
└── types/                # tipos de domínio

e2e/            # testes Playwright
docs/           # documentação de produto, arquitetura, segurança, testes
```

## Git Workflow

Branch principal: `main`. Desenvolvimento sempre em branches `feature/*`,
`fix/*`, `docs/*` ou `test/*`, seguindo Conventional Commits. Ver
`CONTRIBUTING.md`.

## Documentação

- `docs/auditoria/AUDITORIA_INICIAL.md` — auditoria inicial do projeto.
- `docs/produto/` — visão, backlog e roadmap.
- `docs/requisitos/` — requisitos funcionais e não funcionais.
- `docs/diagramas/` — diagramas de contexto, casos de uso, sequência e
  arquitetura (Mermaid).
- `docs/arquitetura/adr/` — decisões arquiteturais.
- `docs/design/DESIGN_SYSTEM.md` — tokens de marca e componentes.
- `docs/seguranca/` — segurança (OWASP) e LGPD.
- `docs/testes/` — estratégia de testes.
- `docs/PROGRESSO.md` — estado atual do projeto.
- `docs/RELATORIO_FINAL.md` — relatório final de entrega.
- `docs/DEPLOY.md` — passo a passo de deploy (Vercel).

## Deploy

Deploy recomendado na Vercel — ver `docs/DEPLOY.md` para o passo a passo
completo (import do repositório pelo painel, sem CLI necessária).
`NEXT_PUBLIC_SITE_URL` é opcional: sem ela, o site detecta automaticamente
o domínio de produção que a Vercel atribui.

## Licença

Ver `LICENSE` — repositório proprietário da TecnoDreamer.
