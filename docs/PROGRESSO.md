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
- [x] **Redesign UX/UI — Etapa 1 (Auditoria):**
      `docs/design/AUDITORIA_UX_UI.md`
- [x] **Redesign UX/UI — Etapa 2 (Design System V2):** tokens de glow,
      superfícies elevadas/glass, motion (durations/easings), catálogo de
      animações em `docs/design/ANIMATIONS.md`
- [x] **Redesign UX/UI — Etapa 3+4 (Header e Hero):** header com
      transição transparente→sólida ao rolar (Home), underline animado na
      rota ativa, menu mobile como overlay com focus trap/ESC/scroll lock;
      Hero com grid tecnológico, glow, spotlight que segue o mouse,
      componente `Reveal` para scroll-reveal com stagger

## Em andamento

- [ ] Redesign UX/UI — Etapa 5 (Produtos: cards com hover
      elevado/glow, possível seção interativa de produtos)

## Próximas tarefas

### Redesign UX/UI (ver `PROMPT_UX_UI_TECNODREAMER.md`, seção 39)

- [ ] Etapa 5 — Produtos (cards com estados de hover, mockups/tabs)
- [ ] Etapa 6 — Diferenciais, Processo, Tecnologias, Empresa, Equipe
- [ ] Etapa 7 — Contato (layout de fechamento forte)
- [ ] Etapa 8 — Footer
- [ ] Etapa 9 — Revisão global de motion
- [ ] Etapas 10-12 — Rodadas de QA mobile/tablet/desktop
- [ ] Etapa 13 — Acessibilidade (teclado/foco/contraste/reduced motion)
- [ ] Etapa 14 — Performance (Lighthouse, bundle, Core Web Vitals)
- [ ] Etapa 15 — Testes finais completos

### Conteúdo e produto (pendências anteriores, ainda válidas)

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

## Problemas encontrados e resolvidos

- `lucide-react` na versão instalada não exporta mais os ícones de marca
  `Github`/`Linkedin` — substituídos por um ícone genérico `ExternalLink`
  em `TeamMemberCard`.
- `.env.example` era ignorado pelo `.gitignore` (padrão `.env*`) — ajustado
  para `!.env.example`.
- Testes E2E falhavam por timeout no primeiro acesso a uma rota após
  reiniciar o dev server (Turbopack compila rotas sob demanda) — timeout
  de asserção do Playwright aumentado para 15s.

## Decisões tomadas

- Sem banco de dados nesta fase — não há necessidade real identificada
  ainda (ver ADR implícito na auditoria inicial e no roadmap).
- Branch principal renomeada de `master` para `main` no início do
  projeto, para seguir a convenção do workflow adotado.
- Rate limiting do formulário de contato implementado em memória
  (suficiente para uma instância; documentado como limitação para
  deploy multi-instância).

## Pull Requests

Nesta fase, todo o desenvolvimento ocorreu em branches `feature/*`
locais, mescladas em `main` via merge commits (`--no-ff`), simulando o
fluxo de Pull Request. Pull Requests reais no GitHub serão abertos assim
que o repositório remoto for criado (ver pendência acima).

## Testes

- Unitários: 19 testes (Vitest) — 100% passando.
- E2E: 28 testes (Playwright, Desktop Chrome + Mobile Chrome; 1 pulado
  intencionalmente em mobile por não se aplicar ao viewport) — 100%
  passando.
- Build de produção (`npm run build`): passando, todas as rotas estáticas
  pré-renderizadas exceto `POST /api/contato` (dinâmica, como esperado).
