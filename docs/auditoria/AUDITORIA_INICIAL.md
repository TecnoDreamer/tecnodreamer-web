# Auditoria Inicial — TecnoDreamer Web

Data: 2026-08-23
Responsável: Engenharia (assistida por IA), conta GitHub `AleksGustavo`

## 1. Situação atual

O projeto é um scaffold puro de `create-next-app`, sem conteúdo institucional
próprio. Estrutura mínima do App Router, sem páginas, componentes, testes ou
documentação além do README padrão gerado pela CLI.

Diretório de trabalho: `C:\Users\Aleksander\Projetos\Sites\tecnodreamer`

## 2. Tecnologias encontradas

| Item | Versão | Observação |
|---|---|---|
| Node.js | v24.12.0 | |
| npm | 10.8.3 | |
| Next.js | 16.3.2 | App Router. Versão recente com breaking changes em relação a treinamento do modelo — ver `AGENTS.md` e `node_modules/next/dist/docs/`. `params`/`searchParams` são `Promise`; existem os helpers globais `PageProps<'/rota'>` e `LayoutProps<'/rota'>` gerados em build/dev. |
| React | 19.2.8 | |
| React DOM | 19.2.8 | |
| TypeScript | ^5 | `strict: true` já habilitado |
| Tailwind CSS | ^4 (`@tailwindcss/postcss`) | Config via `@theme inline` em `globals.css`, sem `tailwind.config.js` (modelo CSS-first do Tailwind v4) |
| ESLint | ^9 (`eslint-config-next` 16.3.2, flat config) | |
| Alias de import | `@/*` → `src/*` (`tsconfig.json`) | |

Sem banco de dados, ORM, biblioteca de formulários, validação, ícones,
animações, testes ou CI configurados.

## 3. Estrutura de arquivos

```text
tecnodreamer/
├── src/app/
│   ├── favicon.ico
│   ├── globals.css        (tokens --background/--foreground, tema claro/escuro via prefers-color-scheme)
│   ├── layout.tsx          (RootLayout com fontes Geist, metadata genérica "Create Next App")
│   └── page.tsx             (página padrão do create-next-app, sem conteúdo próprio)
├── public/                  (ícones de exemplo do template: file.svg, globe.svg, next.svg, vercel.svg, window.svg)
├── tecnodreamer.jpeg         (logotipo oficial — ver seção 5)
├── tecnodreamer.png          (logotipo oficial, com transparência)
├── package.json / package-lock.json
├── tsconfig.json / next.config.ts / eslint.config.mjs / postcss.config.mjs
├── AGENTS.md / CLAUDE.md      (instruções do agente — mantidas)
└── README.md                   (README padrão do create-next-app)
```

**App Router confirmado** (não há `pages/`). Sem `middleware`, sem
`route.ts`, sem rotas dinâmicas, sem grupos de rotas.

## 4. Git e GitHub

- Repositório local inicializado, branch atual **`master`** (o workflow pedido
  usa `main` como branch principal — será necessário padronizar).
- Um único commit: `1ab35b5 Initial commit from Create Next App`.
- **Sem remoto configurado** (`git remote -v` vazio).
- `.gitignore` padrão do Next.js (cobre `node_modules`, `.next`, `.env*`,
  build outputs, etc.) — adequado, será estendido conforme necessário.
- Working tree no início da auditoria: `CLAUDE.md` modificado (não
  relacionado a este trabalho) e `tecnodreamer.jpeg` / `tecnodreamer.png`
  como untracked — ambos serão versionados por serem o ativo oficial da
  marca.
- GitHub CLI disponível: `gh version 2.97.0`, autenticado como
  `AleksGustavo` (escopos `gist, read:org, repo, workflow`).
- Nenhum repositório remoto `tecnodreamer-web` foi verificado/criado nesta
  etapa — a criação do remoto será solicitada ao usuário antes de qualquer
  push, por ser uma ação visível externamente.

## 5. Identidade visual (logotipo)

Arquivos `tecnodreamer.jpeg` e `tecnodreamer.png` na raiz — logotipo oficial,
**não deve ser alterado**.

Descrição visual: emblema circular com fundo azul-marinho quase preto,
anel externo em ciano/turquesa brilhante, contorno em formato de "nuvem de
fala" (speech bubble) também em ciano, e o monograma "TD" em gradiente
azul→roxo com detalhes de trilhas de circuito (estética tech/PCB) e
pequenos nós/pontos conectados.

Paleta extraída (base para o Design System, `docs/design/DESIGN_SYSTEM.md`):

- **Cor de marca primária:** ciano/turquesa (`#22D3EE`–`#2DD4E8`) — cor mais
  característica do logotipo (anel externo e contorno da nuvem).
- **Cor de marca secundária:** gradiente azul-índigo → roxo (`#4F46E5` até
  `#9333EA`) — usado no monograma.
- **Base escura:** azul-marinho quase preto (`#0B1220`/`#0A0F1E`) — fundo do
  emblema, útil para seções de destaque/hero.
- **Branco (`#FFFFFF`)** será usada como cor de fundo principal do site,
  conforme instrução do prompt mestre.

O PNG possui fundo transparente e será a versão preferencial para uso em
header/footer sobre fundos variados; o JPEG (fundo sólido) fica reservado
para contextos que exigem fundo opaco (ex.: favicon fallback, thumbnails).

## 6. Arquivos aproveitáveis vs. obsoletos

**Aproveitáveis:**
- `src/app/layout.tsx` — estrutura de RootLayout válida, será reescrita
  (metadata, fontes, tokens de tema) mas o arquivo permanece.
- `src/app/globals.css` — padrão Tailwind v4 correto, tokens serão
  substituídos pela paleta da marca.
- `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`,
  `next.config.ts` — configuração padrão saudável, mantida.
- `.gitignore` — mantido e estendido.
- Logotipos — ativos oficiais, mantidos como estão.

**Obsoletos/descartáveis (após esta análise):**
- `src/app/page.tsx` — conteúdo de exemplo do `create-next-app`, será
  substituído pela Home institucional.
- `public/*.svg` (file, globe, next, vercel, window) — ícones de exemplo do
  template, sem relação com a TecnoDreamer; serão removidos quando os
  assets próprios (favicon, ícones do design system) forem criados.
- `README.md` — conteúdo genérico do `create-next-app`, será substituído por
  README profissional (seção 38 do prompt mestre).
- Metadata `"Create Next App"` em `layout.tsx` — placeholder a substituir.

Nenhum arquivo foi removido nesta etapa; a remoção ocorrerá junto da feature
que o substitui, para manter commits coerentes.

## 7. Riscos identificados

1. **Next.js 16 é mais recente que o conhecimento de treinamento do
   modelo.** Mitigação: consultar `node_modules/next/dist/docs/` antes de
   cada padrão usado (já aplicado nesta auditoria para layouts, metadata,
   route handlers e `LayoutProps`/`PageProps`).
2. **Branch `master` vs. convenção `main`** pedida no workflow. Será
   necessário renomear a branch principal antes de abrir o primeiro PR.
3. **Sem remoto GitHub.** Formulário de contato, CI e PRs dependem de um
   repositório remoto — precisa ser criado (com confirmação do usuário) ou
   informado se já existe um preferido.
4. **Ausência de conteúdo real da empresa** (missão/visão/valores, membros
   da equipe, redes sociais, dados de contato) — conforme a seção 37 do
   prompt mestre, esses pontos serão marcados como
   `TODO: DEFINIR COM PRODUCT OWNER` em vez de inventados.
5. **Formulário de contato** exigirá validação client + server, proteção
   contra abuso e decisão sobre persistência (banco só será introduzido se
   realmente necessário — ver seção 14 do prompt mestre).

## 8. Recomendações e plano de migração

1. Renomear branch local `master` → `main`.
2. Produzir documentação de produto (`PRODUCT_VISION.md`, `PRODUCT_BACKLOG.md`,
   `ROADMAP.md`) e requisitos (RF/RNF) antes de codar.
3. Definir Design System (tokens de cor extraídos do logotipo, tipografia,
   espaçamento) em `docs/design/DESIGN_SYSTEM.md`, aplicado via `@theme` do
   Tailwind v4 em `globals.css`.
4. Construir fundação (componentes de layout: Header, Footer, Nav mobile,
   Container, Button, Section, ProductCard) antes da Home.
5. Implementar páginas em ordem: Home → Produtos (geral + 4 produtos) →
   Empresa → Equipe → Contato → Privacidade/Termos → 404.
6. Adicionar SEO técnico (metadata por rota, `sitemap.ts`, `robots.ts`,
   ícones) e revisão de acessibilidade/performance ao final de cada bloco de
   páginas.
7. Formulário de contato via Route Handler (`app/api/contato/route.ts`) com
   validação Zod client+server, rate limiting simples em memória (documentar
   limitação para produção multi-instância) e sem persistência em banco
   nesta fase inicial (sem necessidade real identificada ainda).
8. Configurar testes (unitários para schemas/validação, E2E com Playwright
   para os fluxos principais) e pipeline de CI no GitHub Actions.
9. Criar repositório remoto `tecnodreamer-web` (mediante confirmação do
   usuário) e seguir o fluxo branch → commit → push → PR → CI → merge por
   feature.

Este documento será referenciado pelas próximas etapas do roadmap
(`docs/produto/ROADMAP.md`).
