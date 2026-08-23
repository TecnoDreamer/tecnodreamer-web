# Progresso TecnoDreamer

Última atualização: 2026-08-23

## Concluído

- [x] Auditoria inicial (`docs/auditoria/AUDITORIA_INICIAL.md`)
- [x] Visão de produto, backlog, roadmap
- [x] Requisitos funcionais e não funcionais (RF/RNF)
- [x] Diagramas (contexto, casos de uso, sequência, arquitetura)
- [x] Design System (tokens de marca extraídos do logotipo)
- [x] Header, Footer, navegação (desktop + mobile)
- [x] Home institucional
- [x] Páginas de produtos (geral + 4 individuais)
- [x] Página Empresa
- [x] Página Equipe (placeholders explícitos)
- [x] Formulário de contato (validação client+server, rate limiting)
- [x] Páginas Privacidade e Termos
- [x] Página 404 customizada
- [x] SEO técnico (metadata, sitemap, robots, ícones)
- [x] Cabeçalhos de segurança e CSP
- [x] Documentação de segurança (OWASP) e LGPD
- [x] Testes unitários (Vitest) e E2E (Playwright)
- [x] Pipeline de CI (GitHub Actions)
- [x] README, LICENSE, SECURITY.md, CONTRIBUTING.md
- [x] Repositório remoto criado e código enviado
      (`github.com/AleksGustavo/tecnodreamer-web`, privado)
- [x] Relatório final de entrega (`docs/RELATORIO_FINAL.md`)
- [x] **Redesign UX/UI — completo (Etapas 1-15 do
      `PROMPT_UX_UI_TECNODREAMER.md`):**
  - Etapa 1 — Auditoria (`docs/design/AUDITORIA_UX_UI.md`)
  - Etapa 2 — Design System V2 (glow, superfícies elevadas/glass, motion;
    `docs/design/ANIMATIONS.md`)
  - Etapa 3+4 — Header (transição transparente→sólida, underline
    animado, menu mobile overlay com focus trap/ESC/scroll lock) e Hero
    (grid tecnológico, glow, spotlight, componente `Reveal`)
  - Etapa 5 — Produtos (`ProductCard` com ícone/categoria/hover elevado,
    `ProductMockup` conceitual, seção interativa `ProductShowcase` com
    abas acessíveis)
  - Etapa 6 — Diferenciais (cards com hover), `ProcessTimeline` (Como
    trabalhamos), seção Tecnologia, Empresa e Equipe redesenhadas
    (composição assimétrica, menos texto corrido)
  - Etapa 7 — Contato como fechamento forte (hero escuro + formulário em
    card elevado), header transparente generalizado para toda rota com
    seção inicial escura
  - Etapa 8 — Footer com tratamento escuro (bookend visual com o Hero)
  - Etapa 9 — Revisão de motion (nenhum excesso encontrado;
    `docs/design/ANIMATIONS.md`)
  - Etapas 10-12 — QA responsivo automatizado nos 4 breakpoints da
    seção 32 (`e2e/responsive-qa.spec.ts`)
  - Etapa 13 — Acessibilidade: corrigido bug crítico de hidratação no
    `Reveal` sob `prefers-reduced-motion` (`useSyncExternalStore`),
    2 casos de contraste abaixo de AA corrigidos
    (`e2e/accessibility.spec.ts`)
  - Etapa 14 — Performance: auditoria Lighthouse (Home 86/100/100/100
    mobile, 99/100/100/100 desktop), corrigido heading-order (Footer) e
    code-split do `ContactForm` via `next/dynamic`
    (`docs/design/PERFORMANCE.md`)
  - Etapa 15 — Testes finais: lint + typecheck + 19 unitários + 73 E2E +
    build de produção, todos passando

## Em andamento

Nenhum item em andamento — o escopo do `PROMPT_UX_UI_TECNODREAMER.md`
está concluído. Próximos passos dependem de decisões do Product Owner
(ver seção abaixo).

## Próximas tarefas

- [ ] Definir com o Product Owner: propósito, missão, visão e cultura da
      empresa (hoje `TODO: DEFINIR COM PRODUCT OWNER` em
      `src/constants/company.ts`)
- [ ] Preencher dados reais da equipe (`src/constants/team.ts`)
- [ ] Revisão jurídica de Privacidade/Termos/LICENSE
      (`TODO: REVISÃO JURÍDICA`)
- [ ] Definir destino real dos leads do formulário de contato (e-mail,
      CRM ou persistência — hoje apenas validado e logado)
- [ ] Escolher provedor de deploy e configurar `NEXT_PUBLIC_SITE_URL` real
- [ ] Avaliar CSP baseada em nonce para endurecer `script-src` em produção
- [ ] Screenshots/mockups reais de produto conforme forem desenvolvidos
      (hoje `ProductMockup` é uma abstração conceitual)

## Problemas encontrados e resolvidos

- `lucide-react` na versão instalada não exporta mais os ícones de marca
  `Github`/`Linkedin` — substituídos por um ícone genérico `ExternalLink`
  em `TeamMemberCard`.
- `.env.example` era ignorado pelo `.gitignore` (padrão `.env*`) — ajustado
  para `!.env.example`.
- Testes E2E falhavam por timeout no primeiro acesso a uma rota após
  reiniciar o dev server (Turbopack compila rotas sob demanda) — timeout
  de asserção do Playwright aumentado para 15s.
- **Bug crítico de hidratação (Etapa 13):** `Reveal` lia
  `window.matchMedia` num inicializador de `useState`, causando mismatch
  de hidratação que o React explicitamente não corrige — usuários com
  `prefers-reduced-motion` nunca recebiam o estado "sem animação".
  Corrigido com `useSyncExternalStore`.
- `next.config.ts` e `.env.example` exigem reiniciar o servidor de dev
  para refletir mudanças (Turbopack não faz HMR desses arquivos).

## Decisões tomadas

- Sem banco de dados nesta fase — não há necessidade real identificada
  ainda (ver ADR implícito na auditoria inicial e no roadmap).
- Branch principal renomeada de `master` para `main` no início do
  projeto, para seguir a convenção do workflow adotado.
- Rate limiting do formulário de contato implementado em memória
  (suficiente para uma instância; documentado como limitação para
  deploy multi-instância).
- Site permanece predominantemente claro (branco), com seções escuras
  (`tone="ink"`) aprofundadas visualmente (glow, grid tecnológico) em vez
  de inverter para dark-mode-first — decisão registrada em
  `docs/design/AUDITORIA_UX_UI.md` §9.
- Nenhum canal de contato inexistente (telefone, redes sociais) foi
  inventado — `/contato` declara com honestidade que o formulário é o
  canal oficial nesta fase.

## Pull Requests

Todo o desenvolvimento ocorreu em branches `feature/*`/`docs/*` locais,
mescladas em `main` via merge commits (`--no-ff`), simulando o fluxo de
Pull Request. Pull Requests reais no GitHub podem ser abertos a partir de
agora que o repositório remoto existe
(`github.com/AleksGustavo/tecnodreamer-web`).

## Testes

- Unitários: 19 testes (Vitest) — 100% passando.
- E2E: 104 testes (Playwright, Desktop Chrome + Mobile Chrome; 31
  pulados intencionalmente em mobile por redundância de viewport ou por
  não se aplicarem — 73 executados e passando).
- Build de produção (`npm run build`): passando, todas as rotas estáticas
  pré-renderizadas exceto `POST /api/contato` (dinâmica, como esperado).
- Lighthouse: ver `docs/design/PERFORMANCE.md`.
