# LGPD e Privacidade — Site Institucional TecnoDreamer

Este documento resume, do ponto de vista técnico, como o site trata dados
pessoais à luz da Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Ele
**não substitui uma revisão jurídica formal** — pontos que dependem dela
estão marcados como `TODO: REVISÃO JURÍDICA`.

## Dados coletados

A única coleta de dados pessoais do site ocorre no formulário de
`/contato`: nome, e-mail, empresa (opcional), telefone (opcional), assunto,
produto de interesse e mensagem, mais o consentimento explícito de
privacidade (checkbox obrigatório).

Não há cookies de rastreamento, analytics de terceiros ou outros
formulários de captura nesta fase do projeto.

## Base legal

O tratamento dos dados do formulário de contato se baseia no **consentimento
do titular** (Art. 7º, I, LGPD), coletado explicitamente via checkbox
obrigatório antes do envio — o formulário não é submetido sem essa marcação
(validado tanto no client quanto no servidor).

## Minimização e finalidade

- Apenas os campos necessários para responder ao contato são coletados.
- O conteúdo completo da mensagem **não é persistido em banco de dados**
  nesta fase — é validado, sanitizado e apenas metadados não sensíveis são
  registrados em log (assunto, produto de interesse, presença/ausência de
  empresa, domínio do e-mail, tamanho do nome) — ver
  `src/app/api/contato/route.ts`. O conteúdo livre da mensagem nunca é
  gravado em log.

## Direitos do titular

Confirmação de tratamento, acesso, correção, anonimização, portabilidade e
eliminação de dados são direitos previstos na LGPD (Art. 18).
`TODO: REVISÃO JURÍDICA` — processo formal e canal dedicado para exercício
desses direitos ainda não foram definidos.

## Retenção

`TODO: REVISÃO JURÍDICA` — prazo de retenção dos dados de contato (hoje
limitados a logs de aplicação, sem armazenamento estruturado) ainda não foi
definido.

## Segurança técnica aplicada

- Validação e sanitização server-side de todo envio (nunca confia apenas no
  client) — `src/schemas/contact.ts`.
- Rate limiting em memória por IP contra abuso — `src/lib/rate-limit.ts`.
- Limite de tamanho de payload no endpoint.
- Log seguro: nunca grava senhas (não aplicável — não há autenticação),
  tokens ou o corpo livre da mensagem do usuário.

## Páginas relacionadas

- `/privacidade` — política de privacidade voltada ao visitante.
- `/termos` — termos de uso do site.

Ambas apontam explicitamente os pontos pendentes de revisão jurídica.
