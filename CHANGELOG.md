# Changelog

Todas as mudanças relevantes deste projeto são documentadas aqui.
Formato inspirado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).

## [Não lançado]

### Adicionado

- **Container Docker** do site: `Dockerfile` (build `standalone`, Node 24
  Alpine, usuário sem privilégios, healthcheck), `docker-compose.yml` e
  `.dockerignore`. A saída `standalone` só é ativada pelo build do Docker
  (`NEXT_OUTPUT=standalone`); Vercel e `npm run build` não mudam. Uso em
  `docs/DEPLOY.md` → "Docker".
- **Redesign institucional V3 (futurista dark)**, ver
  `docs/design/DESIGN_SYSTEM_V3.md`: tema escuro em todo o site com a
  paleta amostrada do logotipo; herói da home com arte SVG original
  (anéis e circuitos ao redor do logo), faixa institucional, grade técnica
  do ecossistema, cards 01/02/03 dos produtos, diferenciais em composição
  editorial, timeline com linha progressiva, bloco Sobre + Equipe e CTA
  final reutilizável. Novos componentes `Eyebrow`, `SectionHeading`,
  `PageHero` e `FinalCta`.
- Link "Pular para o conteúdo", `alternates.canonical` em todas as
  páginas e Open Graph por produto.
- Placa clara para logotipos com partes escuras e fundo transparente
  (`Product.logoPlate`, usada no Pet & Pet).
- `e2e/redesign.spec.ts`: estrutura da home, CTAs dos três produtos,
  logos íntegros, sem scroll horizontal em 10 larguras (320–1920px),
  viewport baixa, reduced motion e conteúdo visível sem JavaScript.
- Documentação: `AUDITORIA_REDESIGN_TECNODREAMER.md`,
  `DESIGN_SYSTEM_V3.md` e `GUIA_VISUAL_TECNODREAMER.md`.

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
  (`github.com/TecnoDreamer/tecnodreamer-web`, privado).
- **Redesign UX/UI (completo, Etapas 1-15):** auditoria comparativa
  (`docs/design/AUDITORIA_UX_UI.md`); Design System V2 com tokens de
  glow/superfícies elevadas/motion e catálogo de animações
  (`docs/design/ANIMATIONS.md`); Header redesenhado (transição
  transparente→sólida ao rolar em rotas com hero escuro, underline
  animado, menu mobile como overlay com focus trap/ESC/scroll lock);
  Hero redesenhado (grid tecnológico, glow, spotlight que segue o mouse,
  componente `Reveal` reutilizável para scroll-reveal com stagger);
  `ProductCard` com ícone/categoria/hover elevado e nova seção
  `ProductShowcase` com abas acessíveis; `ProcessTimeline` ("Como
  trabalhamos") e seção Tecnologia; Empresa e Equipe redesenhadas com
  composição assimétrica; Contato como fechamento forte; Footer com
  tratamento escuro; QA responsivo automatizado em 4 breakpoints
  (`e2e/responsive-qa.spec.ts`); auditoria de acessibilidade
  (`e2e/accessibility.spec.ts`) e auditoria de performance via Lighthouse
  (`docs/design/PERFORMANCE.md`). Documentação completa em
  `docs/design/UX_GUIDELINES.md` e `docs/design/RESPONSIVE_GUIDELINES.md`.

- Página FAQ institucional (`/faq`), distinta das FAQs por produto,
  linkada pelo Footer.
- Detecção automática da URL do site em produção via
  `VERCEL_PROJECT_PRODUCTION_URL` (`src/constants/site.ts`), sem exigir
  configuração manual a cada deploy; guia de deploy sem CLI
  (`docs/DEPLOY.md`).
- Logotipos reais dos produtos: campo opcional `Product.logoSrc`,
  `ProductLogoMark` agora renderiza o PNG real (via `next/image`) quando
  definido, mantendo o fallback em anel-gradiente para produtos sem
  logotipo. Logotipos processados a partir dos originais enviados
  (fundo removido, redimensionados) em `public/logos/`.
- Produto **Lucratix** com dados reais (BI, Marketing Analytics, Growth e
  CRO para consultorias), extraídos da documentação do próprio projeto:
  problema, solução, funcionalidades, diferenciais, público-alvo, "como
  funciona" e FAQ. Status `em-desenvolvimento`.
- Tingimento pontual por marca de produto: campo opcional
  `Product.accentColor` (paleta extraída do logotipo oficial) aplicado
  em card, aba ativa da vitrine, mockup e página do produto via
  variáveis CSS `--product-accent*` (`src/lib/productAccent.ts`).
  Produtos sem `accentColor` mantêm a paleta da TecnoDreamer.
- Barra de progresso do roadmap técnico (`RoadmapProgress`), exibida
  apenas para produtos com `Product.roadmapProgress` documentado — hoje
  o Lucratix, com 16 de 18 fases concluídas e as pendentes listadas
  (integrações externas e hardening).
- Envio real do formulário de contato por e-mail via Resend
  (`src/lib/contact-mail.ts`): `reply_to` do visitante, falha explícita
  (HTTP 503) em produção sem configuração em vez de perder mensagens,
  17 testes novos. Configuração em `docs/DEPLOY.md` e `.env.example`.
- Contatos públicos (e-mail e telefone/WhatsApp) no rodapé e na página de
  contato; foto do fundador no cartão da Equipe (`next/image`).
- Barra de progresso do PetConnect (29 de 44 requisitos funcionais),
  com título e unidade configuráveis (`ProductRoadmapProgress`).
- `docs/PENDENCIAS.md`: checklist consolidado das informações que só o
  responsável pelo produto pode fornecer (missão/visão, equipe, destino
  dos contatos, revisão jurídica, FAQ).

### Alterado

- Header fixo, transparente no topo de todas as páginas e com superfície
  escura após rolar (estado em `data-state`); menu mobile em tela cheia.
- `Reveal` não esconde mais conteúdo sem JavaScript: o estado oculto
  vive no CSS e só vale com `<html class="js">`. A entrada do H1 dos
  heróis é só CSS e não anima opacidade (não atrasa o LCP).
- Todas as páginas internas (Empresa, Produtos, produto, Equipe, Contato,
  FAQ, Privacidade, Termos, 404) no novo design. O texto das páginas
  legais não mudou, só a apresentação.
- Variante de botão `secondary` substituída por `outline`.

- "Sistema de Gestão Pet" renomeado para **Pet & Pet**
  (slug `gestao-pet` → `pet-e-pet`).
- Produto de analytics de marketing renomeado para **MarketIQ** e, em
  seguida, **substituído pelos dados reais do Lucratix** (slug
  `marketing-analytics` → `lucratix`): o placeholder sem produto real
  por trás foi trocado pelo conteúdo genuíno de um projeto próprio do
  usuário já em desenvolvimento avançado (BI/Marketing
  Analytics/Growth/CRO para consultorias com múltiplos clientes),
  incluindo logotipo oficial real com transparência verificada.
- Repositório movido para a organização GitHub
  `TecnoDreamer/tecnodreamer-web` (o GitHub redireciona o endereço
  antigo); referências na documentação atualizadas.

- Conteúdo institucional real: propósito, missão e visão (palavras do
  responsável, só com ajustes de gramática); equipe com o fundador;
  FAQ com respostas reais (vagas, canais oficiais, contato); lista de
  tecnologias conferida nos repositórios. O bloco "Cultura" fica oculto
  até ser definido.
- Pet & Pet e PetConnect deixam de ser "planejamento": descrições,
  funcionalidades e FAQ reescritos a partir dos repositórios reais de
  cada um (README e requisitos), com status "em desenvolvimento". O
  nome do cliente e dos colegas do projeto acadêmico do Pet & Pet não
  são divulgados. Lucratix ganha importação/exportação de planilhas e
  interface multilíngue.
- Página de produto: "Funcionalidades planejadas" vira "Funcionalidades"
  para produtos já em desenvolvimento.

### Removido

- Seção de abas "Explore cada produto" (`ProductShowcase`) e o mockup
  abstrato (`ProductMockup`), substituídos pelos cards 01/02/03; o
  conteúdo continua nas páginas de produto.
- Card e página "Próximo produto TecnoDreamer" (`/produtos/em-desenvolvimento`),
  a pedido do responsável: ainda não há quarto produto definido.

### Corrigido

- Bug crítico de hidratação no `Reveal` sob `prefers-reduced-motion`
  (React não corrigia o mismatch client/servidor) — corrigido com
  `useSyncExternalStore`.
- Dois casos de contraste de texto abaixo de WCAG AA (`ProductMockup`,
  índice das abas do `ProductShowcase`).
- Ordem de headings inválida (`heading-order`) causada pelos rótulos do
  Footer usando `<h3>` — convertidos para `<p>`.
- Ícones de marca `Github`/`Linkedin` (removidos do `lucide-react`
  instalado) — substituídos por `ExternalLink` genérico.
- Pipeline de CI quebrado desde o início do redesign: `tsc --noEmit`
  rodava antes de `next typegen`/`build` gerarem `.next/types` e
  `next-env.d.ts` em um checkout limpo — corrigido adicionando
  `npx next typegen` antes do type-check em `.github/workflows/ci.yml`.
- Cabeçalho com texto invisível no topo da página em rotas com hero
  escuro (estado transparente): cor do texto migrada de classes
  Tailwind condicionais para `style` inline (especificidade máxima,
  imune a qualquer risco de ordem de geração de classes utilitárias) e
  fundo transparente substituído por um scrim em gradiente para reforço
  de contraste.
