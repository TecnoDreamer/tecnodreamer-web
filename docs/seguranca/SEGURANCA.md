# Segurança — Site Institucional TecnoDreamer

Análise de risco orientada ao OWASP Top 10 (2021) e controles aplicados na
superfície de ataque real deste projeto: um site majoritariamente estático
(Server Components) com um único endpoint que aceita entrada do usuário —
`POST /api/contato`.

## A01 — Broken Access Control

Não há autenticação, autorização nem áreas restritas nesta fase — todas as
páginas são públicas por design. Sem controle de acesso a quebrar.
`app/api/contato/route.ts` só expõe `POST`; qualquer outro verbo recebe o
405 padrão do Next.js (Route Handlers).

## A02 — Cryptographic Failures

Não há dados sensíveis persistidos (sem senhas, sem banco de dados nesta
fase). O transporte em produção deve ocorrer sempre via HTTPS (garantido
pela plataforma de deploy — `TODO: DEFINIR COM PRODUCT OWNER` ao escolher o
provedor). Nenhum segredo é embutido no código-fonte.

## A03 — Injection

- **XSS:** o conteúdo enviado pelo formulário de contato nunca é
  renderizado de volta em nenhuma página — elimina a superfície de XSS
  refletido/armazenado a partir desse dado. Todo o texto proveniente de
  `src/constants/*` é estático e controlado pela equipe. React escapa
  automaticamente qualquer interpolação em JSX.
- **SQL Injection:** não aplicável nesta fase — não há banco de dados. Caso
  a persistência de leads seja introduzida no futuro (ver
  `docs/produto/ROADMAP.md`), a regra é usar exclusivamente
  ORM/queries parametrizadas, nunca concatenação de strings.

## A04 — Insecure Design

- Validação e sanitização acontecem em duas camadas (client com Zod +
  React Hook Form, e novamente no servidor com o mesmo schema Zod) —
  `src/schemas/contact.ts`. O servidor **nunca confia apenas na validação
  do client**.
- Rate limiting (`src/lib/rate-limit.ts`) limita a 5 envios por IP a cada
  60s, mitigando abuso do formulário.
- Limite de tamanho de payload (10 KB) no endpoint.

## A05 — Security Misconfiguration

Cabeçalhos HTTP de segurança aplicados globalmente via `next.config.ts`
(`headers()`):

| Cabeçalho | Valor | Propósito |
|---|---|---|
| `X-Content-Type-Options` | `nosniff` | Evita MIME‑sniffing. |
| `X-Frame-Options` | `DENY` | Bloqueia clickjacking via iframe. |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Reduz vazamento de URL em navegação cross-origin. |
| `Permissions-Policy` | câmera/microfone/geolocalização desabilitados | Reduz superfície de APIs sensíveis do browser. |
| `Content-Security-Policy` | ver abaixo | Restringe origens de scripts, estilos, imagens e conexões. |

`X-Powered-By` é removido (`poweredByHeader: false`) para não expor a
stack tecnológica desnecessariamente.

**Content-Security-Policy aplicada:**

```text
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval';
style-src 'self' 'unsafe-inline';
img-src 'self' data:;
font-src 'self';
connect-src 'self' ws: wss:;
frame-ancestors 'none';
base-uri 'self';
form-action 'self'
```

**Limitação conhecida:** `'unsafe-inline'` e `'unsafe-eval'` em
`script-src` são necessários hoje pelo bootstrap de hidratação do Next.js e
pelo HMR do Turbopack em desenvolvimento. `TODO: DEFINIR COM PRODUCT OWNER`
— avaliar uma CSP baseada em nonce por requisição para endurecer
`script-src` em produção antes de um lançamento público mais amplo.

## A06 — Vulnerable and Outdated Components

Dependências mantidas no mínimo possível (ver auditoria inicial) e
instaladas em versões estáveis mais recentes no momento da escolha
(Next.js 16.3.2, React 19, Zod, React Hook Form, lucide-react). Sem
dependências não utilizadas. Atualizações devem passar pelo pipeline de CI
(lint, type-check, testes, build) antes do merge.

## A07 — Identification and Authentication Failures

Não aplicável — o site não possui contas de usuário nesta fase.

## A08 — Software and Data Integrity Failures

`package-lock.json` versionado, garantindo instalações reprodutíveis. Sem
scripts de terceiros carregados dinamicamente (nenhum CDN externo em
`script-src`).

## A09 — Security Logging and Monitoring Failures

O endpoint de contato registra tentativas (sucesso e limite de rate
atingido) com metadados não sensíveis — nunca o corpo livre da mensagem,
nunca o e-mail completo (apenas o domínio) — ver
`src/app/api/contato/route.ts` e `docs/seguranca/LGPD.md`.
`TODO: DEFINIR COM PRODUCT OWNER` — ferramenta de observabilidade/alerta
em produção (ex.: agregação de logs) ainda não escolhida.

## A10 — Server-Side Request Forgery (SSRF)

Não aplicável — o servidor não realiza requisições a URLs fornecidas pelo
usuário.

## Testes de segurança

Ver `docs/testes/ESTRATEGIA_DE_TESTES.md` — o schema Zod do formulário de
contato é testado com entradas maliciosas conceituais (`<script>`, `' OR
'1'='1`, payloads de path traversal) para confirmar que são tratadas como
texto comum, nunca interpretadas.
