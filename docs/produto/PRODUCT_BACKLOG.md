# Product Backlog — Site Institucional TecnoDreamer

Estrutura: `EPIC` → `FEATURE` → `USER STORY` → `TASK`.
Prioridades: `P0` crítico · `P1` alto · `P2` médio · `P3` baixo.
Status: `TODO` · `EM ANDAMENTO` · `CONCLUÍDO`.

---

## EPIC-001 — Fundação técnica e Design System
**Valor de negócio:** Sem uma base consistente (tokens de marca, componentes
de layout), cada página seria construída de forma divergente, aumentando
custo de manutenção.
**Prioridade:** P0

### FEAT-001 — Design System baseado no logotipo
- **US-001** Como visitante, quero ver uma identidade visual consistente em
  todas as páginas, para reconhecer a marca TecnoDreamer.
  - Critérios: paleta extraída do logotipo aplicada via CSS tokens
    (`@theme`), branco como cor de fundo principal, contraste AA.
  - TASK-001 Definir tokens de cor/tipografia/espaçamento em
    `docs/design/DESIGN_SYSTEM.md`.
  - TASK-002 Aplicar tokens em `globals.css` (Tailwind v4 `@theme inline`).
  - Status: CONCLUÍDO

### FEAT-002 — Componentes de layout reutilizáveis
- **US-002** Como visitante, quero navegação e rodapé consistentes em
  qualquer página, para nunca me sentir perdido.
  - Critérios: Header com navegação e menu mobile acessível; Footer com
    links legais e institucionais; Container, Section, Button, ProductCard.
  - TASK-003 Criar `Header`/`Navbar` + menu mobile.
  - TASK-004 Criar `Footer`.
  - TASK-005 Criar `Container`, `Section`, `Button`, `ProductCard`.
  - Status: TODO

---

## EPIC-002 — Home institucional
**Valor de negócio:** Primeira impressão da empresa; precisa comunicar
proposta de valor em segundos.
**Prioridade:** P0

### FEAT-003 — Página inicial completa
- **US-003** Como visitante, quero entender rapidamente quem é a
  TecnoDreamer e quais produtos ela oferece, para decidir se quero saber
  mais.
  - Gherkin:
    ```gherkin
    Given que estou na página inicial
    When a página carrega
    Then vejo o logotipo, uma proposta de valor clara e CTAs para produtos e contato
    ```
  - TASK-006 Hero institucional.
  - TASK-007 Seção "sobre a empresa".
  - TASK-008 Seção de produtos (cards a partir de dados centralizados).
  - TASK-009 Seção de diferenciais.
  - TASK-010 CTA final.
  - Status: TODO

---

## EPIC-003 — Páginas de produto
**Valor de negócio:** Cada produto do portfólio precisa de uma página
própria para captação de interesse qualificado.
**Prioridade:** P0

### FEAT-004 — Página geral `/produtos`
- **US-004** Como visitante, quero ver todos os produtos da TecnoDreamer em
  um só lugar.
  - TASK-011 Listar produtos a partir de config compartilhada
    (`src/constants/products.ts`), permitindo adicionar produtos sem tocar
    na página.
  - Status: TODO

### FEAT-005 — Páginas individuais de produto
- **US-005** Como visitante interessado em um produto específico, quero
  entender o problema que ele resolve, funcionalidades planejadas e status
  real, para avaliar se atende minha necessidade.
  - Gherkin:
    ```gherkin
    Given que estou na página inicial
    When seleciono o produto PetConnect
    Then devo acessar a página institucional do PetConnect
    And visualizar suas principais informações
    ```
  - TASK-012 Página Gestão Pet.
  - TASK-013 Página PetConnect.
  - TASK-014 Página Marketing Analytics.
  - TASK-015 Página "Em desenvolvimento" (produto 04).
  - Status: TODO

---

## EPIC-004 — Empresa e Equipe
**Prioridade:** P1

### FEAT-006 — Página Empresa
- **US-006** Como visitante, quero conhecer a história, missão, visão e
  valores da TecnoDreamer.
  - TASK-016 Página `/empresa` com conteúdo institucional real/placeholder
    explícito.
  - Status: TODO

### FEAT-007 — Página Equipe
- **US-007** Como visitante, quero saber quem está por trás da
  TecnoDreamer.
  - TASK-017 Componente `TeamMemberCard` reutilizável.
  - TASK-018 Página `/equipe` com placeholders claramente identificados.
  - Status: TODO

---

## EPIC-005 — Contato e captação de leads
**Prioridade:** P0

### FEAT-008 — Formulário de contato seguro
- **US-008** Como visitante, quero enviar uma mensagem para a TecnoDreamer
  com confiança de que meus dados são tratados com cuidado.
  - Gherkin:
    ```gherkin
    Given que preencho o formulário de contato com dados válidos
    When envio o formulário
    Then recebo confirmação de sucesso
    And o servidor revalida os dados antes de processar
    ```
  - TASK-019 Formulário client-side com React Hook Form + Zod.
  - TASK-020 Route Handler `POST /api/contato` com validação Zod
    server-side, sanitização e rate limiting.
  - TASK-021 Mensagens de erro/sucesso acessíveis.
  - Status: TODO

### FEAT-009 — Páginas legais
- **US-009** Como visitante, quero entender como meus dados são usados.
  - TASK-022 Página `/privacidade`.
  - TASK-023 Página `/termos`.
  - Status: TODO

---

## EPIC-006 — Qualidade, segurança e SEO
**Prioridade:** P1

### FEAT-010 — SEO técnico
- TASK-024 Metadata por rota, Open Graph, `sitemap.ts`, `robots.ts`.
  Status: TODO

### FEAT-011 — Segurança
- TASK-025 Headers de segurança/CSP em `next.config.ts`.
- TASK-026 Documento `docs/seguranca/SEGURANCA.md` (OWASP Top 10 aplicado).
  Status: TODO

### FEAT-012 — Acessibilidade e performance
- TASK-027 Revisão de contraste, foco visível, navegação por teclado.
- TASK-028 Revisão de Core Web Vitals (imagens, fontes, JS no cliente).
  Status: TODO

---

## EPIC-007 — Testes e CI/CD
**Prioridade:** P1

### FEAT-013 — Testes automatizados
- TASK-029 Testes unitários (schema de contato, helpers).
- TASK-030 Testes E2E Playwright (navegação, contato válido/inválido, 404,
  viewports).
  Status: TODO

### FEAT-014 — Pipeline CI
- TASK-031 GitHub Actions: install → lint → type-check → testes → build.
  Status: TODO

---

## EPIC-008 — Documentação de engenharia e DevOps
**Prioridade:** P2

- TASK-032 README profissional.
- TASK-033 ADRs de decisões relevantes.
- TASK-034 Diagramas (contexto, casos de uso, sequência, arquitetura).
- TASK-035 `docs/RELATORIO_FINAL.md` ao final do projeto.
  Status: TODO (auditoria e documentos de produto iniciais já concluídos)
