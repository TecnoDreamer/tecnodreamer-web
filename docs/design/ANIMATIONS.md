# Motion Design — TecnoDreamer

Catálogo de animações do site e o propósito de UX de cada uma. Nenhuma
animação existe apenas por decoração — cada entrada abaixo justifica seu
uso (ver seção 2 do `PROMPT_UX_UI_TECNODREAMER.md`: "movimento deve
melhorar a experiência, não competir com o conteúdo").

## Princípios

1. Animar apenas `transform` e `opacity` (nunca `width`, `height`, `top`,
   `left`) — evita reflow/layout thrashing e mantém 60fps.
2. Toda animação é desabilitada sob `prefers-reduced-motion: reduce`
   (regra global em `globals.css`).
3. Nenhuma interação depende de hover no mobile — hover é sempre reforço
   visual, nunca o único caminho para uma informação.
4. Durações curtas para microinterações (`duration-fast`/`normal`),
   durações maiores apenas para entradas de seção
   (`duration-slow`).

## Catálogo

| Animação | Onde | Gatilho | Propósito de UX |
|---|---|---|---|
| `Reveal` (fade + translate-y) | Títulos e blocos de seção ao rolar | Elemento entra no viewport (`IntersectionObserver`) | Dá ritmo à leitura sem exigir scroll hijacking; sinaliza começo de uma nova seção |
| `Reveal` com `delay` (stagger) | Grades de cards (produtos, diferenciais) | Idem, com atraso incremental por item | Guia o olho item a item em vez de "piscar" a grade inteira de uma vez |
| Header: transição de fundo | Header, apenas na Home | `scrollY > 8px` | Reforça que o Hero é a área de maior impacto (header "some" sobre ele) sem esconder a navegação ao rolar |
| Underline animado (`scaleX`) | Links de navegação do Header | Hover/foco/rota ativa | Indica claramente a localização atual (heurística "reconhecimento, não memorização") |
| Hero: glow/grid de fundo | Seção Hero | Estático (CSS, sem JS) | Atmosfera "Dark Tech" sem custo de performance |
| Hero: spotlight | Seção Hero, apenas desktop (`pointer: fine`) | `mousemove` | Sensação de profundidade/interatividade — desabilitado em touch e sob reduced motion, pois não tem propósito funcional lá |
| Card flutuante do Hero | Painel de produtos à direita do Hero | Estático + leve flutuação contínua (`animate-float`) | Reforça "produto vivo" sem disputar atenção com o texto |
| ProductCard: elevação + glow de borda | Cards de produto | Hover/foco | Recompensa exploração, reforça que produtos são o conteúdo central |
| Botão: microanimação de ícone | CTAs com ícone (seta) | Hover/foco | Reforça affordance de clique/navegação |
| Menu mobile: entrada | Overlay do menu mobile | Abertura (`isOpen`) | Transição suave em vez de "pop" abrupto; overlay + foco preso comunicam que é um contexto modal |

## Tokens de duração e easing

Ver `docs/design/DESIGN_SYSTEM.md` §9. Resumo de aplicação:

```text
duration-150 (fast)   → hover de botão, link, ícone
duration-300 (normal) → header ao rolar, underline ativo, card hover
duration-600 (slow)   → Reveal de seção (fade-up)
ease-standard          → a maioria das transições de UI
ease-emphasized        → entradas de Hero/Reveal
```

## `prefers-reduced-motion`

Regra global aplicada em `src/app/globals.css`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Isso neutraliza automaticamente todas as animações CSS/Tailwind
(`animate-*`, `transition-*`) sem exigir lógica condicional espalhada
pelos componentes. O `Reveal` e o spotlight do Hero adicionalmente
verificam `window.matchMedia("(prefers-reduced-motion: reduce)")` em
JavaScript, pois controlam estado inicial (evitar um "flash" de elemento
invisível antes da animação rodar) e um listener de `mousemove` que não
deve nem ser registrado sob reduced motion.

## O que este site **não** faz (ver seção 37 do prompt)

- Sem autoplay de carrossel agressivo (nenhum carrossel nesta fase).
- Sem scroll hijacking — o scroll do navegador nunca é interceptado.
- Sem parallax perceptível — apenas o spotlight do Hero, que é
  posicional (segue o cursor), não um efeito de profundidade de scroll.
- Sem cursor customizado global.
