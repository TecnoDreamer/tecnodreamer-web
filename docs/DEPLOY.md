# Deploy — TecnoDreamer

O site está pronto para deploy em qualquer plataforma que suporte
Next.js 16 (App Router). A recomendação é a **Vercel** (criadora do
Next.js, zero configuração adicional necessária).

## Vercel (recomendado) — via painel, sem CLI

1. Acesse [vercel.com/new](https://vercel.com/new) logado na sua conta.
2. Clique em **Import Git Repository** e selecione
   `TecnoDreamer/tecnodreamer-web`.
   - Se o repositório não aparecer, clique em **Adjust GitHub App
     Permissions** e autorize a Vercel a acessá-lo (ele é privado).
   - O repositório pertence à **organização** `TecnoDreamer` (não à conta
     pessoal): a Vercel precisa ser instalada nessa organização, e quem
     autoriza precisa ser dono dela. **Atenção:** o plano gratuito
     (Hobby) da Vercel costuma não permitir importar repositórios
     privados de organizações — confira as condições do plano atual na
     Vercel antes de começar. Alternativas: plano Pro, tornar o
     repositório público ou mantê-lo na conta pessoal.
3. Em **Configure Project**, os valores padrão já funcionam:
   - Framework Preset: `Next.js` (detectado automaticamente)
   - Build Command / Output Directory / Install Command: deixe em branco
     (padrão do Next.js)
4. **Environment Variables:** não é necessário definir nada nesta fase —
   `NEXT_PUBLIC_SITE_URL` é opcional; sem ela, o site detecta
   automaticamente o domínio de produção que a Vercel atribui (ver
   `src/constants/site.ts`).
5. Clique em **Deploy**. Em 1-2 minutos o site estará no ar em uma URL
   como `https://tecnodreamer-web.vercel.app` (ou similar).
6. A partir daí, **todo push para `main` gera um novo deploy de produção
   automaticamente**, e cada Pull Request ganha uma preview URL própria.

### Domínio próprio (quando houver um)

1. No projeto na Vercel, vá em **Settings → Domains**.
2. Adicione o domínio (ex.: `tecnodreamer.com`) e siga as instruções de
   DNS mostradas (geralmente um registro `A`/`CNAME` no seu provedor de
   domínio).
3. Depois de propagado, defina `NEXT_PUBLIC_SITE_URL=https://tecnodreamer.com`
   em **Settings → Environment Variables** (Production) e refaça o deploy
   — isso garante que `sitemap.xml`, `robots.txt` e as tags Open Graph
   usem o domínio definitivo em vez do subdomínio da Vercel.

## Antes de divulgar o site

O primeiro deploy funciona sem nenhuma configuração, mas há pendências
que impedem divulgar o site como definitivo (lista completa e
preenchível em [`PENDENCIAS.md`](PENDENCIAS.md)):

- **Formulário de contato:** o envio por e-mail já está implementado, mas
  só funciona depois de configurar as variáveis abaixo. Em produção, sem
  elas, o formulário responde "indisponível" (HTTP 503) em vez de
  aceitar a mensagem e perdê-la. Siga a seção "Enviar as mensagens do
  formulário por e-mail" antes de divulgar o site.
- **Rate limiting em memória:** em ambiente serverless (Vercel) cada
  instância mantém seu próprio contador, então o limite é aproximado.
  Suficiente como proteção básica; para rigor, migrar para um armazém
  compartilhado.
- **Páginas de Privacidade e Termos** contêm pontos marcados
  `TODO: REVISÃO JURÍDICA`.
- **Missão, visão, equipe e algumas respostas do FAQ** ainda são
  `TODO: DEFINIR COM PRODUCT OWNER` e aparecem assim no site.

## Enviar as mensagens do formulário por e-mail (Resend)

O formulário de contato envia cada mensagem por e-mail usando o
[Resend](https://resend.com) (plano gratuito; confira os limites atuais
no site deles). O visitante recebe confirmação na tela e você recebe o
e-mail, com o endereço dele em "Responder para" — basta clicar em
responder.

1. Crie uma conta em [resend.com](https://resend.com) **usando o mesmo
   e-mail que vai receber as mensagens** (`aleksandergustavo9@gmail.com`).
   Enquanto não houver domínio verificado, o Resend só permite enviar
   para o e-mail da própria conta — por isso a conta e o destino precisam
   ser o mesmo.
2. No painel do Resend, abra **API Keys → Create API Key** (permissão
   "Sending access") e copie a chave (começa com `re_`). Ela só aparece
   uma vez. **Não envie a chave por chat nem a salve no repositório.**
3. Na Vercel, abra o projeto → **Settings → Environment Variables** e
   crie, para os ambientes **Production** e **Preview**:

   | Nome | Valor |
   |---|---|
   | `RESEND_API_KEY` | a chave `re_...` copiada no passo 2 |
   | `CONTACT_TO_EMAIL` | `aleksandergustavo9@gmail.com` |

   (`CONTACT_FROM_EMAIL` pode ficar em branco: o remetente padrão é
   `TecnoDreamer <onboarding@resend.dev>`.)
4. Faça um novo deploy (Deployments → ⋯ → Redeploy) para as variáveis
   valerem.
5. Teste: envie uma mensagem pelo formulário do site publicado e
   confirme que o e-mail chegou (veja também a caixa de spam na primeira
   vez). Se der erro, os registros em **Logs** da Vercel mostram a causa
   (`[contato] falha ao enviar por e-mail`), sem expor o conteúdo da
   mensagem.

### Quando o domínio próprio existir

No Resend, abra **Domains → Add Domain**, informe o domínio (ex.:
`tecnodreamer.com.br`) e crie no provedor de DNS os registros que o
Resend mostrar. Depois de "Verified", defina na Vercel
`CONTACT_FROM_EMAIL` como `TecnoDreamer <contato@tecnodreamer.com.br>`.
A partir daí o destino (`CONTACT_TO_EMAIL`) pode ser qualquer endereço.

## Variáveis de ambiente

Ver `.env.example`. Para o primeiro deploy do site em si nenhuma é
obrigatória, mas **sem `RESEND_API_KEY` e `CONTACT_TO_EMAIL` o formulário
de contato fica indisponível em produção** (de propósito — ver acima).
Localmente (`npm run dev`) o formulário funciona em "modo log": valida e
registra metadados, sem enviar e-mail.

## Verificação pós-deploy

Depois do primeiro deploy, confira:

```bash
curl -I https://<sua-url>.vercel.app/
curl https://<sua-url>.vercel.app/sitemap.xml
curl https://<sua-url>.vercel.app/robots.txt
```

E abra o site no navegador para conferir visualmente Home, Produtos,
Empresa, Equipe e Contato (envie uma mensagem de teste pelo formulário).

## Outras plataformas

Qualquer host com suporte a Node.js/Next.js funciona
(`npm run build` seguido de `npm run start`). Não há dependência de
infraestrutura específica da Vercel — apenas a conveniência de
detecção automática de domínio descrita acima é exclusiva dela.
