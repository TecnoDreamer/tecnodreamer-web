# Diretrizes de Responsividade — TecnoDreamer

Breakpoints (padrão Tailwind, ver `DESIGN_SYSTEM.md` §4) e como cada
categoria de dispositivo é tratada, testado nos viewports da seção 32 do
prompt de UX/UI (390×844, 768×1024, 1440×900, 1920×1080) via
`e2e/responsive-qa.spec.ts`.

## Mobile (< 768px)

- Uma coluna para grids de cards (produtos, diferenciais, equipe).
- Menu de navegação vira overlay full-screen (`Header.tsx`), nunca dropdown
  espremido.
- Nenhuma informação depende de hover — todo conteúdo relevante
  (categoria, status, CTA) já está visível sem interação.
- Spotlight do Hero desabilitado (`pointer: fine` não é satisfeito em
  touch) — o glow estático e o grid tecnológico permanecem.
- Touch targets ≥ 44px (botão do menu, CTAs) — verificado em
  `e2e/responsive-qa.spec.ts`.
- Timeline de processo (`ProcessTimeline`) empilha verticalmente.

## Tablet (768–1023px)

- Grids reduzem para 2 colunas onde a Home usa 4 no desktop.
- Header mantém a navegação desktop (linha horizontal) a partir de
  `md:` (768px).
- Efeitos de mouse (spotlight, hover de card) continuam disponíveis para
  tablets com trackpad/mouse conectado, mas não são essenciais — a
  interface funciona igualmente bem por toque.

## Desktop (≥ 1024px)

- Grids completos (até 4 colunas em produtos/diferenciais).
- `ProcessTimeline` exibe a linha horizontal conectando os 6 passos.
- `ProductShowcase` usa duas colunas (lista de abas + painel).
- Spotlight do Hero ativo, seguindo o cursor.

## Desktop grande (≥ 1920px)

- Containers mantêm `max-w-6xl` (72rem) centralizado — o layout não se
  estica indefinidamente, preservando a largura de leitura confortável
  definida em `DESIGN_SYSTEM.md` §2 (Tipografia).

## Regras gerais

- Nunca criar scroll horizontal indesejado — verificado
  automaticamente (`document.documentElement.scrollWidth`) em todas as
  páginas principais nos 4 breakpoints.
- Nenhum breakpoint depende de `overflow: hidden` para "esconder" bugs de
  layout — overflow só é usado deliberadamente em elementos decorativos
  (`overflow-hidden` em seções com glow/grid de fundo).
- `Container` (`max-w-6xl` + padding responsivo `px-6`/`px-8`) é o único
  ponto de controle de largura — páginas não definem larguras customizadas
  ad-hoc.
