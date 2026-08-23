# Auditoria UX/UI — Site Institucional TecnoDreamer

Data: 2026-08-23
Escopo: estado atual do site (Home, Produtos, Empresa, Equipe, Contato,
Header, Footer) antes da revitalização visual/UX/UI pedida no
`PROMPT_UX_UI_TECNODREAMER.md`.

## 1. Referência usada

Imagem de referência: portfólio de web designer (tema "Adrian Knox"),
fundo escuro tecnológico, hero com headline forte + palavra-chave em azul,
foto à direita, barra de logos de confiança, grid de projetos, seção de
serviços em cards, bloco de estatísticas em destaque (fundo azul sólido),
depoimentos, timeline de processo horizontal, planos de preço, contato
com formulário + informações lado a lado.

**Uso pretendido:** inspiração de composição, ritmo, contraste e
atmosfera — não cópia. A TecnoDreamer não tem depoimentos, planos de
preço nem número real de clientes; essas seções da referência **não**
serão replicadas 1:1 (ver seção 5, "Não fazer").

## 2. Comparação ponto a ponto

| Ponto | Estado atual | Avaliação |
|---|---|---|
| **Hierarquia** | H1 do hero é a proposta de valor; produtos, diferenciais e CTA seguem em ordem linear. | Funcional, mas todas as seções têm o mesmo "peso" visual — falta um segundo momento de forte impacto depois do Hero (ex. destaque interativo de produtos). |
| **Hero** | Uma seção `tone="ink"`, grid de 2 colunas, texto à esquerda, caixa estática listando produtos à direita. Sem imagem/elemento gráfico, sem movimento. | Correto na composição (conteúdo/CTA à esquerda, elemento visual à direita), mas visualmente "parado" — exatamente o problema citado na seção 2 do prompt. |
| **Espaçamento** | `Section` usa `py-16 sm:py-24` fixo para todas as seções; container `max-w-6xl`. | Consistente, mas monótono — nenhuma seção respira mais que outra; falta espaço negativo assimétrico. |
| **Tipografia** | Escala definida em `docs/design/DESIGN_SYSTEM.md` (Display/H1/H2/H3/Body/Small), aplicada via classes Tailwind ad-hoc por página. | Escala existe no papel mas não há tokens de tipografia reais no CSS — cada página reimplementa tamanhos manualmente. Falta nível "Body Large" e "Caption" na prática. |
| **Contraste** | Boa (texto escuro sobre branco/surface, branco sobre `--color-ink`). `focus-visible` global já implementado. | Ponto forte a preservar — qualquer nova cor/gradiente precisa manter AA. |
| **Cards** | `ProductCard`: borda + `shadow-sm` → `shadow-md` no hover. Sem glow, sem alteração de borda, sem elevação/translate. | Estático demais para a "sensação de produto premium" pedida. |
| **Movimento** | Nenhum. Sem reveal on scroll, sem transições de entrada, sem stagger, sem `prefers-reduced-motion` (nada a desabilitar ainda, pois nada existe). | Maior lacuna do site atual frente ao prompt — folha em branco para Motion Design (seção 19). |
| **Navegação** | Header sticky com `backdrop-blur` e fundo semi-transparente **fixo** (não transparente no topo). Rota ativa por cor de texto, sem indicador animado. Menu mobile: `show/hide` simples, sem overlay, sem animação de entrada, sem `focus trap`, sem ESC, sem bloqueio de scroll do body. | Base sólida (acessível, com `aria-expanded`/`aria-controls`), mas falta toda a camada de refinamento pedida na seção 7. |
| **CTAs** | `Button`/`ButtonLink` com variantes primary/secondary/ghost, sem estado `loading`, sem microanimação de ícone. | Bom ponto de partida — precisa de estados adicionais (loading, active/pressed nítido). |
| **Seções** | 3 tons possíveis (`background`, `surface`, `ink`), sem variante "elevated"/"glass". Home hoje: Hero → Sobre → Produtos → Diferenciais → CTA. | Ordem difere da sugerida no prompt (falta Destaque Interativo, Como Trabalhamos, Tecnologias e prévia de Equipe antes do CTA final) — ver seção 4 desta auditoria. |
| **Profundidade** | Praticamente plana: sombras mínimas, sem glassmorphism, sem gradientes, sem glow. | Alinhado à direção "Dark Tech + glass + glow" pedida — grande oportunidade de melhoria com baixo risco (CSS puro). |
| **Responsividade** | Funcional em todos os breakpoints (grids colapsam, menu mobile funciona, testado via Playwright em Desktop Chrome e Mobile Chrome/Pixel 5). | Funciona, mas é a mesma composição "encolhida" — não há adaptação de densidade/efeitos por breakpoint (seção 23 do prompt pede isso explicitamente). |
| **Acessibilidade** | `focus-visible` global, HTML semântico, labels associados, headings em ordem, `aria-*` no menu mobile. Testado com Playwright (tab/click) mas sem verificação formal de `Tab`/`Shift+Tab`/`ESC` end-to-end. | Boa base — os riscos estão nas **novas** interações a implementar (spotlight, parallax, carrosséis), não no que já existe. |

## 3. Componentes reutilizáveis identificados

Já existem e serão a base do redesign (evolução, não substituição):

- `Header`, `Footer` (`src/components/layout`)
- `Button`/`ButtonLink`, `Container`, `Section`, `Badge` (`StatusBadge`),
  `ProductCard`, `TeamMemberCard` (`src/components/ui`)
- Dados centralizados em `src/constants` (`products.ts`, `company.ts`,
  `team.ts`, `nav.ts`, `site.ts`) — já seguem o princípio de não
  hardcodar conteúdo nas páginas, o que facilita o redesign sem tocar em
  conteúdo.

## 4. Páginas visualmente vazias ou com excesso de texto

- **`/empresa`**: seis seções empilhadas, quase só texto (história,
  propósito/missão/visão, valores, princípios, tecnologia, cultura,
  objetivos futuros) — candidata direta à "composição assimétrica +
  grafismos" pedida na seção 16 do prompt.
- **`/produtos/[produto]`**: lista de funcionalidades como bullets simples
  (`CheckCircle2` + texto) — funcional, mas repetitivo visualmente entre
  os 4 produtos.
- **Home**: falta a seção "Destaque Interativo" (tabs de produto) e
  "Como Trabalhamos" (processo) — hoje o site salta direto de Produtos
  para Diferenciais.

## 5. Problemas de hierarquia

- Home não deixa claro, só pela composição visual, a sequência de leitura
  pedida na seção 21 do prompt (quem é → o que faz → produtos → solução →
  saiba mais → contato). O texto entrega essa informação, mas o layout
  não reforça visualmente qual seção é "mais importante".
- Não há um segundo ponto de alto impacto visual depois do Hero — tudo
  após ele tem peso visual semelhante.

## 6. Onde interações têm propósito real de UX

| Local | Interação pretendida | Propósito de UX |
|---|---|---|
| Hero | Glow/gradiente sutil + grid tecnológico de fundo + entrada em fade-up | Comunicar "produto de tecnologia" já no primeiro impacto (Lei de Jakob: usuário espera isso de um site de software) |
| Header | Transição transparente → com fundo/blur ao rolar | Reforça hierarquia (hero "respira" sem header competindo) sem perder acesso à navegação |
| Menu mobile | Overlay animado + focus trap + ESC + scroll lock | Controle do usuário e prevenção de erro (não perder o lugar na página, não rolar o conteúdo atrás do menu) |
| ProductCard | Elevação + glow de borda + destaque do CTA no hover | Recompensa a exploração, reforça que produtos são o conteúdo central do site |
| Seções ao rolar | Reveal fade/slide com stagger leve | Ritmo e "sensação viva" sem competir com o conteúdo (movimento serve à leitura, não à decoração) |
| Formulário de contato | Estados de loading/erro/sucesso já existentes, reforçados visualmente | Visibilidade do status (heurística de Nielsen) |

## 7. Riscos de excesso de animação

- Glow/gradiente animado no Hero pode prejudicar LCP se implementado com
  imagens pesadas — mitigar com CSS puro (`radial-gradient`,
  `background-position`), nunca com GIFs/vídeos.
- Spotlight que segue o mouse deve ser **desabilitado no mobile**
  (não há mouse) e sob `prefers-reduced-motion` — implementar como
  progressive enhancement via `pointer: fine` + media query, nunca como
  dependência funcional.
- Stagger em listas grandes (ex. funcionalidades de produto) pode virar
  "espera" perceptível — limitar stagger a no máximo ~6-8 itens visíveis
  por vez e usar durações curtas (`duration-fast`/`duration-normal`).
- Parallax deve ser **muito leve** (poucos pixels) — parallax perceptível
  em site institucional tende a parecer "gimmick", não "produto premium".

## 8. Recomendações por breakpoint

- **Desktop (≥1024px):** grids de 2-4 colunas, efeitos de hover/mouse
  completos (glow, spotlight, tilt leve em cards), parallax discreto no
  Hero.
- **Tablet (768–1023px):** manter grids mas reduzir para 2 colunas,
  desabilitar spotlight (ponteiro geralmente touch), manter reveal on
  scroll.
- **Mobile (<768px):** uma coluna, nenhuma informação exclusiva de hover
  (CTAs e badges sempre visíveis), animações reduzidas a fade/slide
  curtos, touch targets ≥44px, menu mobile como overlay full-screen.

## 9. Decisão de UX/IHC: manter branco como base, aprofundar as seções escuras

O site institucional foi construído com branco como cor de fundo
predominante (decisão registrada em `docs/design/DESIGN_SYSTEM.md` v1,
por instrução explícita do escopo original do projeto). Este prompt de
UX/UI pede uma direção "Dark Tech" inspirada na referência.

**Decisão:** não inverter o site inteiro para dark-mode-first. Em vez
disso, manter a alternância clara/escura já existente (Hero e CTA final
em `tone="ink"`, demais seções claras) e investir a energia do redesign
em tornar essas seções escuras **muito mais ricas** (glow, grid
tecnológico, gradientes de marca) e as seções claras **mais premium**
(profundidade sutil, bordas, sombras, espaçamento assimétrico) — em vez
de mudar a decisão de marca já tomada. Isso preserva a Lei de Jakob
(consistência com a decisão já comunicada ao usuário) e evita retrabalho
de conteúdo já aprovado.

## 10. Plano de execução

Auditoria concluída. Próximo passo: branch `feature/ux-ui-revamp`,
começando por **Design System V2 → Header → Hero**, conforme a ordem de
execução do prompt (seção 39), sem redesenhar todas as páginas de uma vez.
