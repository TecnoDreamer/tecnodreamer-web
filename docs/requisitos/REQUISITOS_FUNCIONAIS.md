# Requisitos Funcionais — Site Institucional TecnoDreamer

Formato: ID · Nome · Descrição · Ator · Prioridade · Critérios de aceite ·
Dependências.

Prioridades: `P0` crítico · `P1` alto · `P2` médio · `P3` baixo.

---

### RF001 — Navegação principal
**Descrição:** O site deve oferecer um header com logotipo e menu para
Home, Empresa, Produtos, Equipe e Contato, incluindo menu mobile.
**Ator:** Visitante
**Prioridade:** P0
**Critérios de aceite:**
- Given qualquer página, When o visitante abre o menu, Then todos os links
  principais estão visíveis e navegáveis por teclado.
- Given viewport mobile, When o visitante toca no ícone de menu, Then um
  menu mobile acessível é exibido/ocultado.
**Dependências:** —

---

### RF002 — Rodapé institucional
**Descrição:** Footer com links de navegação, links legais
(`/privacidade`, `/termos`), e informações de contato/redes sociais quando
existentes.
**Ator:** Visitante
**Prioridade:** P1
**Critérios de aceite:** Footer presente em todas as páginas, com links
funcionais.
**Dependências:** RF012, RF013

---

### RF003 — Home institucional
**Descrição:** Página inicial com hero, seção "sobre a empresa", cards dos
produtos, diferenciais e CTA final.
**Ator:** Visitante
**Prioridade:** P0
**Critérios de aceite:**
- Given a Home, When carregada, Then hero exibe logotipo, proposta de valor
  e CTAs para produtos e contato.
- Given a seção de produtos, When renderizada, Then exibe um card por
  produto com nome, descrição, problema resolvido e CTA "Conhecer produto".
**Dependências:** RF005–RF008

---

### RF004 — Página "Empresa"
**Descrição:** `/empresa` com história, propósito, missão, visão, valores e
tecnologias.
**Ator:** Visitante
**Prioridade:** P1
**Critérios de aceite:** Página acessível via navegação, sem dados
inventados (uso de `TODO: DEFINIR COM PRODUCT OWNER` onde faltar
informação real).
**Dependências:** —

---

### RF005 — Página geral de produtos
**Descrição:** `/produtos` lista os 4 produtos do portfólio com resumo e
link para a página individual de cada um.
**Ator:** Visitante
**Prioridade:** P0
**Critérios de aceite:** Todos os produtos cadastrados aparecem; a lista é
orientada por dados (constante/config), permitindo adicionar produtos sem
alterar a estrutura da página.
**Dependências:** —

---

### RF006 — Página do produto "Gestão Pet"
**Descrição:** `/produtos/gestao-pet` com hero, problema, solução, público,
funcionalidades planejadas, status e FAQ.
**Ator:** Visitante
**Prioridade:** P0
**Critérios de aceite:** Funcionalidades listadas são claramente marcadas
como planejadas (não "prontas"), conforme estágio real do produto.
**Dependências:** RF005

---

### RF007 — Página do produto "PetConnect"
**Descrição:** `/produtos/petconnect`, mesma estrutura de RF006, focada em
identificação de pets via QR Code.
**Ator:** Visitante
**Prioridade:** P0
**Dependências:** RF005

---

### RF008 — Página do produto "Marketing Analytics"
**Descrição:** `/produtos/lucratix`, mesma estrutura de RF006.
**Ator:** Visitante
**Prioridade:** P0
**Dependências:** RF005

---

### RF009 — Página "Produto em desenvolvimento"
**Descrição:** `/produtos/em-desenvolvimento` reserva espaço para o 4º
produto do portfólio, sinalizando que está em fase de concepção.
**Ator:** Visitante
**Prioridade:** P2
**Dependências:** RF005

---

### RF010 — Página "Equipe"
**Descrição:** `/equipe` com estrutura reutilizável de cards (foto, nome,
função, descrição, especialidades, links). Sem dados reais disponíveis,
usa placeholders explícitos.
**Ator:** Visitante
**Prioridade:** P2
**Critérios de aceite:** Nenhuma pessoa, cargo ou link é inventado; campos
sem informação real usam `TODO: DEFINIR COM PRODUCT OWNER`.
**Dependências:** —

---

### RF011 — Formulário de contato
**Descrição:** `/contato` com campos Nome, E-mail, Empresa, Telefone
(opcional), Assunto, Produto de interesse, Mensagem e consentimento de
privacidade.
**Ator:** Visitante
**Prioridade:** P0
**Critérios de aceite:**
- Given campos obrigatórios vazios, When o visitante envia, Then mensagens
  de erro específicas por campo são exibidas sem submissão.
- Given dados válidos, When enviados, Then o servidor revalida os dados
  (nunca confia apenas no client) e retorna sucesso.
- Given envios repetidos em curto intervalo do mesmo IP, When o limite é
  excedido, Then a API responde 429 sem processar o envio.
**Dependências:** RF012

---

### RF012 — Página de Privacidade
**Descrição:** `/privacidade` explicando dados coletados (formulário de
contato) à luz de princípios da LGPD.
**Ator:** Visitante
**Prioridade:** P1
**Critérios de aceite:** Trechos que dependem de validação jurídica
formal são marcados com `TODO: REVISÃO JURÍDICA`.
**Dependências:** —

---

### RF013 — Página de Termos
**Descrição:** `/termos` com termos de uso provisórios do site.
**Ator:** Visitante
**Prioridade:** P2
**Dependências:** —

---

### RF014 — Página 404
**Descrição:** Página não encontrada com navegação de volta ao site.
**Ator:** Visitante
**Prioridade:** P1
**Dependências:** RF001

---

### RF015 — Metadata e SEO por página
**Descrição:** Cada rota define `title`, `description`, Open Graph e
demais metadados próprios via Metadata API do Next.js.
**Ator:** Motores de busca / redes sociais
**Prioridade:** P1
**Dependências:** RF001–RF014

---

### RF016 — Sitemap e robots
**Descrição:** Geração de `sitemap.xml` e `robots.txt` cobrindo as rotas
públicas do site.
**Ator:** Motores de busca
**Prioridade:** P2
**Dependências:** RF015
