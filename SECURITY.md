# Política de Segurança

## Reportando uma vulnerabilidade

Se você encontrar uma vulnerabilidade de segurança neste projeto, por
favor **não abra uma issue pública**. Em vez disso, entre em contato
diretamente:

`TODO: DEFINIR COM PRODUCT OWNER` — canal dedicado para relatos de
segurança (e-mail ou formulário privado).

Enquanto esse canal não é definido, utilize o
[formulário de contato](https://tecnodreamer.com/contato) do site
institucional, indicando claramente que se trata de um relato de
segurança.

## Escopo

Este repositório contém apenas o site institucional da TecnoDreamer — uma
aplicação Next.js sem autenticação de usuários nem banco de dados nesta
fase. Ver `docs/seguranca/SEGURANCA.md` para a análise de segurança
completa (OWASP Top 10) e os controles já implementados.

## Boas práticas aplicadas neste projeto

- Validação e sanitização server-side de toda entrada do usuário.
- Rate limiting no único endpoint que aceita dados externos
  (`POST /api/contato`).
- Cabeçalhos HTTP de segurança e Content Security Policy
  (`next.config.ts`).
- Nenhum segredo versionado no Git (`.env` ignorado, `.env.example`
  documentado sem valores reais).
- Pipeline de CI executa lint, type-check, testes e build antes de
  qualquer merge.
