# Requisitos Não Funcionais — Site Institucional TecnoDreamer

Prioridades: `P0` crítico · `P1` alto · `P2` médio · `P3` baixo.

### RNF001 — Segurança de entrada (server-side)
Toda entrada do usuário (formulário de contato) deve ser validada e
sanitizada no servidor, independentemente da validação client-side.
**Prioridade:** P0

### RNF002 — Proteção contra abuso de API
O endpoint de contato deve implementar rate limiting básico e limite de
tamanho de payload, retornando erros apropriados sem vazar detalhes
internos.
**Prioridade:** P0

### RNF003 — Gerenciamento seguro de segredos
Nenhum segredo, senha ou chave em texto puro no código ou no Git.
`.env` ignorado pelo Git; `.env.example` documenta variáveis sem valores
reais.
**Prioridade:** P0

### RNF004 — Cabeçalhos HTTP de segurança
O site deve enviar cabeçalhos como `X-Content-Type-Options`,
`X-Frame-Options`/CSP anti-clickjacking, e uma Content Security Policy
razoável para o conjunto de páginas estáticas + formulário.
**Prioridade:** P1

### RNF005 — Tratamento seguro de erros
Erros de servidor não devem expor stack traces, caminhos de arquivo ou
detalhes internos ao cliente em produção.
**Prioridade:** P1

### RNF006 — Responsividade
Todas as páginas devem funcionar corretamente em breakpoints mobile
(~375px), tablet (~768px), notebook (~1024–1440px) e desktop grande
(≥1920px), adaptando navegação, grids, tipografia e formulários — não
apenas reduzindo escala.
**Prioridade:** P0

### RNF007 — Acessibilidade (WCAG 2.2 AA quando razoável)
HTML semântico, hierarquia correta de headings, navegação por teclado,
foco visível, labels associados a inputs, contraste adequado de texto e
componentes interativos.
**Prioridade:** P0

### RNF008 — Performance / Core Web Vitals
Uso de Server Components por padrão, otimização de imagens via
`next/image`, fontes via `next/font`, e carregamento consciente de
JavaScript no cliente (Client Components apenas onde necessário, ex.:
menu mobile, formulário).
**Prioridade:** P1

### RNF009 — SEO técnico
Metadata própria por rota, Open Graph, `sitemap.xml`, `robots.txt`,
favicon e URLs semânticas (`/produtos/gestao-pet`, não IDs opacos).
**Prioridade:** P1

### RNF010 — Manutenibilidade
Código em TypeScript estrito, componentização por responsabilidade,
convenções de nomenclatura consistentes, sem duplicação relevante entre
páginas de produto (conteúdo orientado a dados/config).
**Prioridade:** P1

### RNF011 — Compatibilidade de navegadores
Suporte aos navegadores modernos suportados oficialmente pelo Next.js
16 (ver `node_modules/next/dist/docs/03-architecture/supported-browsers.md`).
**Prioridade:** P2

### RNF012 — Escalabilidade de conteúdo
A lista de produtos e a estrutura de páginas de produto devem permitir
adicionar um novo produto futuro sem alterar a arquitetura de rotas
(apenas dados + uma nova página seguindo o mesmo padrão).
**Prioridade:** P1

### RNF013 — Observabilidade mínima
Logs do endpoint de contato não devem registrar dados sensíveis (ex.:
mensagem completa do usuário em logs persistentes) e devem permitir
identificar tentativas de abuso (rate limit atingido).
**Prioridade:** P2

### RNF014 — Qualidade contínua (CI)
Lint, type-check, testes e build devem rodar automaticamente em Pull
Requests via GitHub Actions antes de qualquer merge.
**Prioridade:** P1
