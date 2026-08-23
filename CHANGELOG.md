# Changelog

Todas as mudanças relevantes deste projeto são documentadas aqui.
Formato inspirado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).

## [Não lançado]

### Adicionado

- Auditoria inicial do projeto (`docs/auditoria/AUDITORIA_INICIAL.md`).
- Documentação de produto: visão, backlog, roadmap, requisitos
  funcionais/não funcionais e diagramas (contexto, casos de uso,
  sequência, arquitetura).
- Design System com paleta extraída do logotipo oficial e componentes de
  UI reutilizáveis (Button, Container, Section, Badge, ProductCard,
  TeamMemberCard).
- Header, Footer e navegação global (desktop + menu mobile acessível).
- Home institucional (hero, sobre a empresa, produtos, diferenciais, CTA).
- Páginas de produtos: listagem geral e páginas individuais (Gestão Pet,
  PetConnect, Marketing Analytics, produto futuro).
- Página institucional Empresa e página Equipe (com placeholders
  explícitos, sem dados inventados).
- Formulário de contato com validação client (React Hook Form + Zod) e
  server-side (Route Handler `/api/contato`), rate limiting em memória e
  log seguro.
- Páginas de Privacidade e Termos de Uso, com pontos pendentes marcados
  como `TODO: REVISÃO JURÍDICA`.
- Página 404 customizada.
- SEO técnico: metadata por rota, Open Graph, `sitemap.xml`, `robots.txt`,
  ícones a partir do logotipo oficial.
- Cabeçalhos HTTP de segurança e Content Security Policy
  (`next.config.ts`); documentação OWASP Top 10
  (`docs/seguranca/SEGURANCA.md`) e LGPD (`docs/seguranca/LGPD.md`).
- Testes unitários (Vitest) e E2E (Playwright, desktop + mobile).
- Pipeline de CI no GitHub Actions (lint, type-check, testes, build, E2E).
- README, LICENSE, SECURITY.md, CONTRIBUTING.md profissionais.
- Repositório remoto criado no GitHub
  (`github.com/AleksGustavo/tecnodreamer-web`, privado).
- **Redesign UX/UI:** auditoria comparativa
  (`docs/design/AUDITORIA_UX_UI.md`); Design System V2 com tokens de
  glow/superfícies elevadas/motion e catálogo de animações
  (`docs/design/ANIMATIONS.md`); Header redesenhado (transição
  transparente→sólida ao rolar na Home, underline animado, menu mobile
  como overlay com focus trap/ESC/scroll lock); Hero redesenhado
  (grid tecnológico, glow, spotlight que segue o mouse, componente
  `Reveal` reutilizável para scroll-reveal com stagger).
