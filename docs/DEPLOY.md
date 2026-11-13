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
     autoriza precisa ser dono dela.
   - **Plano da Vercel — recomendação: Pro (US$ 20 por usuário/mês).**
     Motivos: (1) a documentação da Vercel diz que o plano gratuito
     (Hobby) é restrito a uso pessoal e **não comercial**
     ([Hobby plan](https://vercel.com/docs/plans/hobby)); um site de
     empresa é uso comercial; (2) segundo o suporte da Vercel em
     [vários relatos da comunidade](https://community.vercel.com/t/why-cant-hobby-accounts-deploy-from-organizations/10015),
     o Hobby não importa repositório **privado** de uma organização do
     GitHub. Valores e regras mudam: confirme em
     [vercel.com/pricing](https://vercel.com/pricing) antes de assinar.
   - Alternativas, se não quiser pagar agora: tornar o repositório
     público (só depois de revisar que nada sigiloso está nele) ou
     mantê-lo na conta pessoal — ambas continuam sendo Hobby, ou seja,
     sujeitas à restrição de uso não comercial.
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

### Domínio próprio (`tecnodreamer.com.br`)

Em 2026-11-02 a consulta pública do Registro.br (RDAP) respondeu "não
encontrado" e o DNS não resolvia o nome — indício de que o domínio está
livre. Confirme na hora do registro; isso não é garantia.

1. Registre em [registro.br](https://registro.br) (pessoa física com CPF
   ou pessoa jurídica com CNPJ). Anote o login e ative a verificação em
   duas etapas.
2. Na Vercel, no projeto: **Settings → Domains → Add** `tecnodreamer.com.br`
   (e `www.tecnodreamer.com.br`, redirecionando para o principal). A
   Vercel mostra os registros de DNS exatos a criar.
3. No Registro.br, em **DNS → Editar zona** (ou apontando para os
   servidores de nomes da Vercel), crie os registros indicados. A
   propagação leva de minutos a algumas horas.
4. Defina `NEXT_PUBLIC_SITE_URL=https://tecnodreamer.com.br` em
   **Settings → Environment Variables** (Production) e refaça o deploy:
   isso faz `sitemap.xml`, `robots.txt` e as tags Open Graph usarem o
   domínio definitivo.
5. Opcional, mas recomendado: verifique o domínio no Resend (próxima
   seção) para enviar os e-mails do formulário a partir de
   `contato@tecnodreamer.com.br`.

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

## Docker

O repositório tem um `Dockerfile` (Next.js em modo `standalone`, Node 24
Alpine, usuário sem privilégios, imagem de ~333 MB) e um
`docker-compose.yml`. A produção oficial continua na Vercel; o container
serve para testar o build de produção localmente ou para hospedar em outro
lugar.

```bash
docker compose up -d --build      # constrói e sobe em http://localhost:3000
docker compose logs -f web        # acompanha os logs
docker compose down               # para e remove o container
docker compose up -d --build --force-recreate   # recria do zero
```

- **Porta:** `PORT=8080 docker compose up -d` publica em outra porta no host.
  Evite a 3100, usada pelos testes E2E (`playwright.config.ts` reaproveita
  qualquer servidor que já esteja nela e testaria o container, não o código).
- **`NEXT_PUBLIC_SITE_URL`:** é embutida no build. Para outro domínio,
  defina a variável e reconstrua (`--build`); trocar só em runtime não surte
  efeito. O padrão é `http://localhost:3000`.
- **Formulário de contato:** crie um `.env.local` (fica fora do git) com
  `RESEND_API_KEY`, `CONTACT_TO_EMAIL` etc. Sem chave, o formulário responde
  503, como em produção. Para só validar e registrar as mensagens, ponha
  `CONTACT_DELIVERY_MODE=log` nesse arquivo.
- O build baixa as fontes do Google (`next/font/google`), então precisa de
  internet.
