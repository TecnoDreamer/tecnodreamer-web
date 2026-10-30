# Pendências do site TecnoDreamer — para preencher

Este documento reúne tudo o que o site ainda precisa e que **só o responsável pela
empresa pode informar**. Nada aqui será inventado: enquanto um campo estiver vazio, o
site continua exibindo `TODO: DEFINIR COM PRODUCT OWNER` (ou `TODO: REVISÃO JURÍDICA`).

**Como usar:** preencha o que souber, no próprio arquivo, nas linhas `Resposta:`. Pode
deixar em branco o que ainda não está decidido — preencha por partes. Depois é só me
avisar que eu aplico no código, testo e publico.

Legenda de prioridade: 🔴 bloqueia a divulgação do site · 🟡 importante · 🟢 pode esperar.

---

## 1. 🔴 Destino das mensagens do formulário de contato

Hoje o formulário valida a mensagem, mas **não a envia para ninguém**: quem escreve
vê "enviado" e a mensagem se perde. Precisa ser resolvido antes de divulgar o site.

**1.1 Para onde as mensagens devem ir?** (marque uma)

- [ ] Para um e-mail (mais simples; recomendado para começar)
- [ ] Para um CRM / planilha / ferramenta que você já usa
- [ ] Guardar em banco de dados próprio (mais trabalho)

Resposta:

**1.2 Qual e-mail deve receber as mensagens?**

Resposta:

**1.3 Qual e-mail deve aparecer como remetente das notificações?**
(idealmente um endereço do domínio da empresa, como `contato@seudominio.com`)

Resposta:

**1.4 Você já tem conta em algum serviço de envio de e-mail?**
(ex.: Resend, SendGrid, Amazon SES, Brevo — ou "não sei", e eu recomendo um)

Resposta:

> Observação técnica: o envio exigirá cadastrar uma chave (secreta) do serviço escolhido
> nas variáveis de ambiente da Vercel. Essa chave **nunca** deve ser enviada por chat
> nem salva no repositório — eu indico onde colocá-la quando chegar a hora.

---

## 2. 🟡 Propósito, missão, visão, valores e cultura

Aparecem na página **Empresa**. Escreva com as suas palavras; textos curtos funcionam
melhor (1 a 3 frases cada).

**2.1 Propósito** — por que a TecnoDreamer existe?

Resposta:

**2.2 Missão** — o que a empresa faz, para quem e como, no dia a dia?

Resposta:

**2.3 Visão** — onde a empresa quer estar daqui a alguns anos?

Resposta:

**2.4 Cultura** — como é trabalhar/construir produtos aqui? (opcional)

Resposta:

**2.5 Os valores e princípios hoje no site estão corretos?**
Hoje constam: tecnologia aplicada a problemas reais; transparência sobre o estágio de
cada produto; segurança e privacidade como requisito; evolução contínua com base em uso
real. Marque o que mudar:

- [ ] Estão corretos
- [ ] Quero alterar (descreva):

Resposta:

---

## 3. 🟡 Equipe

Hoje a página **Equipe** mostra só um espaço reservado. Preencha **uma ficha por pessoa**
que deve aparecer. Só inclua quem concordou em aparecer publicamente.

Copie o bloco abaixo para cada pessoa:

```
Nome:
Cargo / função:
Descrição curta (1-2 frases):
Especialidades (separe por vírgula):
Foto (nome do arquivo que você enviará — formato JPG ou PNG, de preferência quadrada):
LinkedIn (endereço completo, opcional):
GitHub (endereço completo, opcional):
```

Pessoa 1:

Pessoa 2:

Pessoa 3:

Se nenhuma pessoa deve aparecer por enquanto, marque:

- [ ] Manter a página Equipe como está por enquanto

---

## 4. 🟡 Perguntas frequentes (FAQ) institucional

Estas respostas estão em aberto na página **FAQ**:

**4.1 "A TecnoDreamer está contratando?"** — hoje diz que não há vagas. Como as pessoas
devem acompanhar futuras oportunidades? (e-mail, LinkedIn, página futura…)

Resposta:

**4.2 "Onde posso acompanhar novidades?"** — quais são os canais oficiais?
(Instagram, LinkedIn, YouTube, newsletter, outro. Informe o endereço completo de cada um
que **já exista**; não vou listar canal que ainda não foi criado.)

Resposta:

**4.3 "A TecnoDreamer tem parceiros ou investidores?"**

- [ ] Tem, e posso divulgar (informe quem):
- [ ] Não tem / prefiro não divulgar (a pergunta será removida do FAQ)

Resposta:

**4.4 Há outras perguntas que as pessoas costumam fazer e que deveriam entrar?**

Resposta:

---

## 5. 🔴 Revisão jurídica (Privacidade e Termos de Uso)

Estas páginas foram escritas como base técnica, **não como texto jurídico final**. Peça a
um advogado (de preferência com experiência em LGPD) para revisar antes de divulgar o
site. Os pontos que ele precisa decidir/redigir:

**Página de Privacidade**

- Prazo de retenção dos dados enviados pelo formulário de contato e processo de exclusão.
- Canal formal e prazo de resposta para exercício dos direitos da LGPD (acesso,
  correção, eliminação, portabilidade).
- Se haverá um encarregado de dados (DPO) e qual e-mail dedicado.

**Página de Termos de Uso**

- Licença de uso e reprodução do conteúdo do site (textos, logotipos, identidade visual).
- Como serão notificadas alterações relevantes nos termos.

**5.1 Já existe advogado/escritório que cuidará disso?**

Resposta:

**5.2 Dados da empresa para constar nas páginas legais** (se aplicável):

```
Razão social:
CNPJ:
Endereço:
E-mail para assuntos de privacidade:
```

Resposta:

---

## 6. 🟢 Produtos

**6.1 Quarto produto do portfólio** — hoje o card "Próximo produto TecnoDreamer" está
sem dados. Existe um produto real a incluir?

- [ ] Sim (informe nome, para quem é, o problema que resolve, status e logotipo)
- [ ] Ainda não — manter o card "em breve"
- [ ] Remover o card por enquanto

Resposta:

**6.2 Pet & Pet e PetConnect** — o texto de cada produto foi escrito a partir do que você
descreveu no início do projeto. Há algo a corrigir ou acrescentar (público, funcionalidades,
status atual)? Se tiver documentação desses projetos, como a do Lucratix, indique a pasta
e eu extraio os dados reais.

Resposta:

**6.3 Lucratix** — o conteúdo veio da documentação do projeto. O status "em
desenvolvimento" e as fases do roadmap (16 de 18 concluídas) continuam corretos?
Houve avanço desde a última leitura?

Resposta:

---

## 7. 🟡 Publicação (Vercel e domínio)

**7.1 O repositório agora está na organização GitHub `TecnoDreamer`.** A conta gratuita
da Vercel costuma não importar repositórios **privados de organização**. Como prefere
seguir?

- [ ] Assinar o plano pago da Vercel
- [ ] Tornar o repositório público (confirme que não há nada sigiloso nele)
- [ ] Trazer o repositório de volta para a conta pessoal
- [ ] Usar outra hospedagem (sugira qual)
- [ ] Ainda não sei — quero uma recomendação

Resposta:

**7.2 Domínio próprio** — já existe ou pretende registrar um? Qual?
(Enquanto não houver, o site usa um endereço gratuito `*.vercel.app`.)

Resposta:

**7.3 Você é dono (owner) da organização `TecnoDreamer` no GitHub?**
(Necessário para autorizar a Vercel nela.)

Resposta:

---

## 8. 🟢 Outras informações de contato (opcional)

Hoje o site **não exibe** telefone, endereço ou redes sociais, porque nenhum foi
informado. Se quiser mostrá-los (rodapé, página de contato), preencha:

```
Telefone / WhatsApp:
Endereço (ou "somente online"):
E-mail público de contato:
Instagram:
LinkedIn da empresa:
Outros:
```

Resposta:

---

## Resumo do que está pendente

| # | Item | Prioridade | Preenchido? |
|---|------|-----------|-------------|
| 1 | Destino do formulário de contato | 🔴 | ☐ |
| 5 | Revisão jurídica (Privacidade e Termos) | 🔴 | ☐ |
| 2 | Propósito, missão, visão, cultura | 🟡 | ☐ |
| 3 | Equipe | 🟡 | ☐ |
| 4 | FAQ institucional | 🟡 | ☐ |
| 7 | Vercel, repositório e domínio | 🟡 | ☐ |
| 6 | Produtos (quarto produto, revisões) | 🟢 | ☐ |
| 8 | Telefone, endereço, redes sociais | 🟢 | ☐ |
