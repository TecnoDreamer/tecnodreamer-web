# Diretrizes de UX — TecnoDreamer

Princípios aplicados no redesign (ver `PROMPT_UX_UI_TECNODREAMER.md`) e que
devem orientar qualquer nova página ou seção.

## Hierarquia de compreensão

Toda página deve permitir que o visitante entenda, em ordem, sem esforço:

1. Onde ele está (rota ativa no header, título H1).
2. Do que se trata a página/seção (eyebrow + heading).
3. Qual ação tomar em seguida (CTA claro, nunca ambíguo).

## Leis de UX aplicadas

- **Lei de Jakob:** navegação, cards e formulários seguem padrões já
  conhecidos (header fixo, cards clicáveis com CTA, formulário com labels
  acima dos campos) — nada exige aprendizado novo do usuário.
- **Lei de Fitts:** alvos clicáveis com área mínima confortável (~44px);
  cards de produto usam a técnica de "link esticado" para que o card
  inteiro seja clicável, não apenas o texto do CTA.
- **Lei de Hick:** navegação principal com poucos itens (5); formulário de
  contato com campos objetivos, sem opções redundantes.
- **Lei de Miller / efeito de posição serial:** listas longas (ex.:
  funcionalidades de produto) evitam mais de ~7-9 itens visíveis por vez
  sem agrupamento.
- **Gestalt (proximidade/similaridade):** cards do mesmo tipo (produtos,
  diferenciais, equipe) compartilham o mesmo tratamento visual; elementos
  relacionados (ícone + título + descrição) ficam próximos e alinhados.

## Heurísticas de Nielsen aplicadas

- **Visibilidade do status:** formulário de contato mostra loading,
  sucesso e erro explicitamente (`ContactForm.tsx`); menu mobile usa
  `aria-expanded` refletindo o estado real.
- **Controle do usuário:** menu mobile fecha com ESC, clique fora não é
  necessário mas o botão de fechar é sempre acessível; nenhum carrossel
  com autoplay que o usuário não possa pausar (não há carrosséis nesta
  fase — tabs são 100% controladas pelo usuário).
- **Consistência:** todos os cards com hover usam o mesmo vocabulário
  visual (elevação + borda em `brand-primary/40` + sombra com glow);
  todos os CTAs primários usam o `Button`/`ButtonLink` compartilhado.
- **Prevenção de erros:** formulário valida no client antes de enviar,
  reduzindo idas e vindas ao servidor; mensagens de erro específicas por
  campo, não genéricas.
- **Reconhecimento em vez de memorização:** rota ativa sempre indicada no
  header (cor + underline animado); breadcrumbs não foram necessários
  dado que a navegação tem no máximo 2 níveis de profundidade.
- **Minimalismo:** nenhuma seção foi adicionada apenas por preencher
  espaço — cada seção da Home tem um propósito de jornada explícito (ver
  `docs/design/AUDITORIA_UX_UI.md` §6).

## Jornada da Home

Ordem final das seções (adaptada da sugestão do prompt, com "Sobre" logo
após o Hero para orientar o visitante imediatamente — ver justificativa
em `AUDITORIA_UX_UI.md` §9):

```text
Header → Hero → Sobre → Produtos → Destaque interativo →
Diferenciais → Como trabalhamos → Tecnologia → CTA final → Footer
```

## O que evitamos deliberadamente

- Métricas inventadas (clientes, satisfação, projetos) — ver seção 14 do
  prompt e `src/constants/company.ts`.
- Depoimentos, parceiros ou prêmios fictícios.
- Redes sociais/telefone/endereço que a TecnoDreamer ainda não possui
  (ver `src/app/contato/page.tsx` — canal oficial declarado com
  honestidade).
- Informação importante escondida atrás de hover (toda informação de
  produto/equipe está sempre visível; hover só adiciona reforço visual).
