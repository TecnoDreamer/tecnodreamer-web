# Contribuindo com o site institucional TecnoDreamer

## Fluxo de trabalho

1. Nunca desenvolva diretamente na branch `main`.
2. Crie uma branch a partir de `main` seguindo a convenção:
   `feature/*`, `fix/*`, `refactor/*`, `docs/*`, `test/*`.
3. Faça commits pequenos e semanticamente coerentes, seguindo
   [Conventional Commits](https://www.conventionalcommits.org/):
   `feat: ...`, `fix: ...`, `docs: ...`, `test: ...`, `refactor: ...`,
   `security: ...`, `chore: ...`.
4. Antes de abrir um Pull Request, rode localmente:
   ```bash
   npm run lint
   npx tsc --noEmit
   npm run test
   npm run build
   npm run test:e2e
   ```
5. Abra o Pull Request contra `main`, descrevendo o que mudou e como
   testar. Aguarde o pipeline de CI passar antes do merge.
6. Não faça merge de código com testes quebrados ou lint/type-check
   falhando.

## Padrões de código

- TypeScript estrito (`strict: true`) — evite `any`.
- Componentes de UI reutilizáveis ficam em `src/components/ui`; layout
  global em `src/components/layout`.
- Dados de conteúdo institucional (produtos, empresa, equipe, navegação)
  ficam centralizados em `src/constants`, nunca hardcoded nas páginas.
- Não invente dados da empresa, produtos ou pessoas. Quando uma
  informação real não estiver disponível, use
  `TODO: DEFINIR COM PRODUCT OWNER` (ou `TODO: REVISÃO JURÍDICA` para
  pontos que dependem de validação jurídica).

## Documentação

Mudanças relevantes de arquitetura, produto ou segurança devem atualizar a
documentação correspondente em `docs/`. Ver `docs/PROGRESSO.md` para o
estado atual do projeto.
