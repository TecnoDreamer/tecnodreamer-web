# Deploy — TecnoDreamer

O site está pronto para deploy em qualquer plataforma que suporte
Next.js 16 (App Router). A recomendação é a **Vercel** (criadora do
Next.js, zero configuração adicional necessária).

## Vercel (recomendado) — via painel, sem CLI

1. Acesse [vercel.com/new](https://vercel.com/new) logado na sua conta.
2. Clique em **Import Git Repository** e selecione
   `AleksGustavo/tecnodreamer-web`.
   - Se o repositório não aparecer, clique em **Adjust GitHub App
     Permissions** e autorize a Vercel a acessá-lo (ele é privado).
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

## Variáveis de ambiente

Ver `.env.example`. Nenhuma variável é obrigatória para o primeiro
deploy — o formulário de contato (`/api/contato`) não depende de
serviço externo nesta fase (apenas valida e loga, sem persistência).

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
