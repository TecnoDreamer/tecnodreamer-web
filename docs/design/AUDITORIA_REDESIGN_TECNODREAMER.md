# Auditoria — Redesign institucional V3 (futurista dark)

Data: 2026-11-02 · Branch: `feat/institutional-futuristic-redesign`
Fonte da verdade: o repositório (`main` em `2589f1a`). O site publicado
(`tecnodreamer-web.vercel.app`) serviu só de referência.

## 1. Stack e estrutura

| Item | Achado |
|---|---|
| Framework | Next.js 16.3.2 (App Router, Turbopack), React 19.2, TypeScript strict |
| Estilo | Tailwind CSS v4 com tokens em `src/app/globals.css` (`@theme inline`) |
| Fontes | Geist e Geist Mono via `next/font/google` (self-hosted no build) |
| Animação | Sem biblioteca. `Reveal` próprio (IntersectionObserver + transições CSS), respeita `prefers-reduced-motion` |
| Formulário | React Hook Form + Zod; `/api/contato` com rate limit, limite de corpo, Resend ou modo log |
| Testes | Vitest (36 unitários) e Playwright (9 specs, projetos "Desktop Chrome" e "Mobile Chrome") |
| CI | GitHub Actions: lint → typegen → tsc → vitest → build → Playwright |
| Deploy | Vercel (`docs/DEPLOY.md`) |
| SEO | Metadata por rota, Open Graph, `sitemap.ts`, `robots.ts`, ícones a partir do logo |

## 2. Rotas reais (todas preservadas)

`/`, `/empresa`, `/produtos`, `/produtos/pet-e-pet`, `/produtos/petconnect`,
`/produtos/lucratix`, `/equipe`, `/contato`, `/faq`, `/privacidade`,
`/termos`, a 404 customizada e `/api/contato`.

Navegação principal (`src/constants/nav.ts`): Início, Empresa, Produtos,
Equipe, Contato. Rodapé legal: FAQ, Privacidade, Termos de uso.

## 3. Logotipo oficial e paleta extraída

Arquivo: `tecnodreamer.png` (500×500, PNG com transparência). Também existe
`tecnodreamer.jpeg`. O logo é usado sem alteração (sem recorte, sem
recoloração, sem rotação).

Amostragem de pixel com `sharp` (coordenadas em px do PNG de 500×500):

| Região do logo | Ponto | HEX |
|---|---|---|
| Anel externo, topo (ciano) | 250,28 | `#28E1F7` |
| Anel externo, lado direito (azul-ciano) | 470,250 | `#1C99C2` |
| Monograma "D", parte superior | 300,170 | `#1B92C7` |
| Monograma "T", parte superior (azul) | 170,170 | `#2655AD` |
| Anel inferior direito (índigo) | 340,460 | `#382DAB` |
| Monograma, parte inferior (roxo) | 300,340 | `#861ED0` |
| Anel inferior esquerdo (roxo-magenta) | 160,460 | `#A935F0` |
| Fundo do emblema (navy) | 250,420 | `#0B2941` |

Conclusão: a marca é **ciano → azul → índigo → roxo sobre navy profundo**.
Não há vermelho nem amarelo; os acentos da referência visual não se aplicam.

### Logos dos produtos

| Produto | Arquivo | Observação para o tema escuro |
|---|---|---|
| Pet & Pet | `public/logos/pet-e-pet.png` (512×512) | **Fundo transparente e texto "PET & PET" preto**: some sobre fundo escuro. Precisa de uma placa clara atrás. |
| PetConnect | `public/logos/petconnect.png` (376×423) | Pino creme preenchido; legível no escuro. |
| Lucratix | `public/logos/lucratix.png` (344×512) | Troféu azul e dourado; legível no escuro. Tem paleta própria documentada (`accentColor`). |

## 4. Conteúdo real a preservar

- Posicionamento: "Software especializado para quem cuida de pets e para
  quem precisa entender seu marketing." (`COMPANY.shortPitch`)
- Sobre, história, propósito, missão, visão, valores, princípios,
  objetivos futuros e tecnologias (`src/constants/company.ts`). Cultura
  segue `null` (o bloco continua oculto).
- Produtos (`src/constants/products.ts`): Pet & Pet, PetConnect e Lucratix,
  os três **Em desenvolvimento**, com público, problema, solução,
  funcionalidades, diferenciais, como funciona, FAQ e progresso real
  (PetConnect 29/44 requisitos; Lucratix 16/18 fases).
- Diferenciais da home: produtos especializados, segurança por padrão,
  decisões orientadas a dados, evolução contínua.
- Processo: Descobrir → Planejar → Projetar → Desenvolver → Testar → Evoluir.
- Equipe: um integrante real (Aleksander Gustavo, Fundador e Product Owner).
- Contatos: e-mail, telefone, WhatsApp. Sem endereço e sem redes sociais.
- Páginas legais: texto preservado na íntegra, incluindo os
  `TODO: REVISÃO JURÍDICA`.

## 5. Estado visual atual (antes)

- Site claro (fundo branco) com seções escuras pontuais (`tone="ink"`).
  `viewport.colorScheme = "light"`.
- Hero com o pitch como H1, card flutuante com os 3 produtos e indicadores
  de confiança ("Arquitetura escalável", "Segurança by design").
- Seção "Explore cada produto" com abas e um mockup abstrato de dashboard.
- Diferenciais como 4 cards iguais; processo como timeline simples.
- Header `sticky`, transparente só em 4 rotas com topo escuro.

## 6. Linha de base de performance (medida)

Ambiente: build de produção local (`next build` + `next start`), Windows
11, Chromium do Playwright. "mobile" = Pixel 5 com CPU 4× mais lenta,
latência de 150 ms e 1,6 Mbps. Valores da segunda visita em contexto
limpo (a primeira só aquece o servidor). **Medição de laboratório local,
não dados de campo.**

| Página | LCP desktop | LCP mobile | CLS | JS transferido (gzip) |
|---|---|---|---|---|
| `/` | 588 ms | 2208 ms | 0 | 234 KB |
| `/produtos` | 368 ms | 1572 ms | 0 | 152–234 KB |
| `/produtos/lucratix` | 556 ms | 1792 ms | 0 | 234 KB |
| `/empresa` | 488 ms | 1748 ms | 0 | 152–234 KB |
| `/equipe` | 352 ms | 1460 ms | 0 | 145–234 KB |
| `/contato` | 444 ms | 1540 ms | 0 | 233–234 KB |
| `/faq` | 356 ms | 1304 ms | 0 | 145–234 KB |

O JS varia entre perfis porque o Next pré-carrega rotas dos links visíveis.

Lighthouse não está instalado no projeto e não foi adicionado.

## 7. Riscos

1. **Tema escuro inteiro** muda todas as páginas: tokens semânticos
   (`background`, `foreground`…) passam a ter valores escuros, então todo
   componente precisa ser revisado para contraste.
2. **Logo do Pet & Pet** invisível no escuro (texto preto). Mitigação: placa
   clara circular atrás do logo, sem alterar o arquivo.
3. **Testes acoplados a classes** do header (`from-ink/70`,
   `bg-background/90`) e a textos que mudam ("Conhecer os produtos",
   "Diferenciais", abas de produto). Mitigação: `data-state` no header e
   atualização dos testes.
4. **Header fixo** pode encobrir âncoras e o topo das páginas. Mitigação:
   `scroll-padding-top` e padding superior nos heróis.
5. **Animações**: loops contínuos e efeitos pesados gastam bateria.
   Mitigação: só transform/opacity, uma rotação lenta decorativa no hero,
   tudo desligado sob `prefers-reduced-motion`.
6. **Conteúdo inventado**: a referência tem métricas (latência, uptime)
   que não existem aqui. Mitigação: só rótulos verificáveis.

## 8. Plano e arquivos previstos

| Fase | Arquivos |
|---|---|
| Tokens e base | `src/app/globals.css`, `src/app/layout.tsx` |
| Primitivos | `ui/Button`, `ui/Badge`, `ui/Container`, `ui/Section`, novos `ui/Eyebrow`, `ui/PageHero`, `ui/SectionHeading` |
| Logos | `ui/ProductLogoMark` (placa clara opcional), `types/product.ts` (`logoPlate`) |
| Header e footer | `layout/Header`, `layout/Footer` |
| Home | `sections/Hero`, novo `sections/HeroVisual`, novos `sections/InstitutionalStrip`, `sections/EcosystemGrid`, `sections/ProductFeatureCards`, `sections/Differentiators`, `sections/AboutTeam`, `sections/FinalCta`; `sections/ProcessTimeline` refeito; `app/page.tsx` |
| Removidos | `sections/ProductShowcase`, `ui/ProductMockup`, `e2e/product-showcase.spec.ts` (substituídos pelos cards 01/02/03; o conteúdo continua nas páginas de produto) |
| Páginas internas | `empresa`, `produtos`, `produtos/[produto]`, `equipe`, `contato` (+ `ContactForm`, `ContactFormSkeleton`), `faq`, `privacidade`, `termos`, `not-found` |
| Testes | `e2e/header`, `e2e/accessibility`, `e2e/responsive-qa`, `e2e/navigation` atualizados; novo `e2e/redesign.spec.ts` |
| Docs | `docs/design/DESIGN_SYSTEM_V3.md`, `docs/design/GUIA_VISUAL_TECNODREAMER.md`, `CHANGELOG.md`, `docs/PROGRESSO.md` |

Fora do escopo: APIs, banco, autenticação, deploy e o texto jurídico.
