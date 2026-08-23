# Estratégia de Testes — Site Institucional TecnoDreamer

## Ferramentas

- **Testes unitários:** [Vitest](https://vitest.dev) (`npm run test`). Ambiente
  `node` — cobre lógica pura (schemas, helpers), sem necessidade de DOM.
- **Testes E2E:** [Playwright](https://playwright.dev) (`npm run test:e2e`),
  rodando contra `npm run dev`, nos projetos **Desktop Chrome** e
  **Mobile Chrome** (`devices["Pixel 5"]`) para cobrir múltiplos viewports.

## Testes unitários

| Arquivo | Cobertura |
|---|---|
| `src/schemas/contact.test.ts` | Validação Zod do formulário de contato: payload válido, campos obrigatórios ausentes, e-mail/telefone inválidos, produto de interesse fora da lista, consentimento de privacidade obrigatório, e **entradas maliciosas** (`<script>alert(1)</script>`, `' OR '1'='1`, `../../etc/passwd`) tratadas como texto comum válido — nunca interpretadas (ver seção 33 do prompt mestre e `docs/seguranca/SEGURANCA.md`, A03). |
| `src/lib/rate-limit.test.ts` | Rate limiter em memória: permite até 5 requisições por janela, isola identificadores diferentes, libera após a janela expirar (com fake timers). |
| `src/lib/utils.test.ts` | Utilitário `cn` de composição de classes CSS. |

Rodar: `npm run test` (uma vez) ou `npm run test:watch` (modo watch).

## Testes End-to-End

| Arquivo | Fluxo coberto |
|---|---|
| `e2e/navigation.spec.ts` | Home → Produtos, Home → PetConnect, Home → Gestão Pet, Home → Marketing Analytics, Home → Empresa → Equipe. |
| `e2e/mobile-menu.spec.ts` | Abertura, navegação e fechamento do menu mobile (viewport Pixel 5). |
| `e2e/contact-form.spec.ts` | Formulário inválido (mensagens de erro por campo) e formulário válido (confirmação de envio). |
| `e2e/not-found.spec.ts` | Página 404 customizada e retorno à Home. |

Cada arquivo roda nos dois projetos configurados (`Desktop Chrome` e
`Mobile Chrome`), cobrindo RNF006 (responsividade) na prática.

Rodar: `npm run test:e2e`.

**Nota sobre ambiente de desenvolvimento:** como os testes rodam contra
`next dev` (Turbopack), a primeira visita a uma rota após reiniciar o
servidor pode levar alguns segundos para compilar sob demanda — por isso
`playwright.config.ts` usa um timeout de asserção de 15s. Em CI, o
`webServer` do Playwright sobe o próprio servidor antes dos testes.

## Testes de integração

Nesta fase, o único ponto de integração real é
formulário → `POST /api/contato` → validação server-side, já coberto pelos
testes E2E de `contact-form.spec.ts` (que exercitam o fluxo completo
via HTTP real, não mocks) e pelos testes unitários do schema Zod reutilizado
pelo Route Handler. Não há integração com banco de dados nesta fase.

## O que fica de fora nesta fase

- Testes de componentes React isolados (ex.: Testing Library) — o site é
  majoritariamente Server Components com poucos Client Components
  (Header, ContactForm); esses já são exercitados de ponta a ponta pelos
  testes E2E, que dão mais confiança real de UX do que testes de unidade
  de componente isolado nesta fase.
- Testes de carga/performance automatizados — `TODO: DEFINIR COM PRODUCT
  OWNER` caso o tráfego real justifique.
