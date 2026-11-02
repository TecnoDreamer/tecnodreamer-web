# Guia visual TecnoDreamer (V3)

Guia curto para quem for criar uma página ou seção nova. Os valores estão
em `DESIGN_SYSTEM_V3.md`; aqui ficam as decisões e o que evitar.

## A ideia em uma frase

Escuro, editorial e técnico: muito espaço negativo, títulos curtos em caixa
alta, linhas de 1px, micro-labels numeradas e luz só onde importa — nas
cores do logo (ciano → azul → índigo → roxo).

## Estrutura de uma seção

1. `Eyebrow` com índice (`/03 Diferenciais`).
2. Título curto (H2) em caixa alta, no máximo duas linhas no desktop.
3. Uma frase de apoio em `text-lead` muted.
4. Conteúdo em grid assimétrico (7/5, 4/8) ou grade técnica de células.

## Faça

- Use os componentes: `PageHero`, `SectionHeading`, `Section`,
  `ProductCard`, `FinalCta`.
- Separe blocos com linhas de 1px (`border-border`) em vez de sombras.
- Numere listas editoriais (`01`, `02`…) em `font-mono` ciano.
- Mostre todo o conteúdo importante sem depender de hover.
- Mantenha um único H1 por página.
- Use `productAccentVars(product)` para tingir algo com a cor do produto.
- Para um logo novo com partes escuras e fundo transparente, defina
  `logoPlate: "light"` em vez de editar o arquivo.

## Evite

- Glow em tudo: ele fica no herói, no CTA final e no hover dos cards.
- Cards iguais repetidos para qualquer lista (prefira linhas editoriais).
- Métricas, números de desempenho, clientes, depoimentos ou integrações que
  não existem. Rótulos do herói e da faixa institucional precisam ser
  verificáveis no repositório.
- Animar o logo oficial, recortá-lo ou mudar suas cores.
- Vermelho/amarelo da referência: não fazem parte da marca.
- `100vh` com `overflow-hidden` em blocos de conteúdo.
- Texto `--foreground-subtle` sobre `--surface-2` (contraste insuficiente).

## Checklist antes de publicar uma página

- [ ] Sem scroll horizontal de 320px a 1920px (`e2e/redesign.spec.ts`).
- [ ] Foco visível em todos os links e botões; ordem de Tab lógica.
- [ ] Conteúdo visível com `prefers-reduced-motion` e sem JavaScript.
- [ ] Imagens com `next/image`, `sizes` correto e `alt` descritivo (ou vazio,
      se decorativas).
- [ ] `metadata` com `title`, `description` e `alternates.canonical`.
- [ ] Nenhum dado inventado.
