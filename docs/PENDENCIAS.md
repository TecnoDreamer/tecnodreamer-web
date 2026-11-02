# Pendências do site TecnoDreamer

Atualizado em 2026-11-02, depois de aplicar o checklist preenchido pelo
responsável. O que já foi aplicado está no `CHANGELOG.md` e em
`docs/PROGRESSO.md`; aqui ficam **só as pendências que continuam abertas**.

Legenda: 🔴 bloqueia a divulgação · 🟡 importante · 🟢 pode esperar.

---

## 1. 🔴 Ativar o envio de e-mails do formulário de contato

O código está pronto e testado; falta a conta e as chaves. Passo a passo em
[`DEPLOY.md`](DEPLOY.md) → "Enviar as mensagens do formulário por e-mail".

- [ ] Criar conta em resend.com **com o e-mail `aleksandergustavo9@gmail.com`**
      (o remetente de teste do Resend só entrega para o e-mail da própria conta).
- [ ] Criar a chave de API (`re_...`) e cadastrá-la na Vercel como
      `RESEND_API_KEY` — sem enviar a chave por chat e sem salvá-la no repositório.
- [ ] Cadastrar `CONTACT_TO_EMAIL` na Vercel e fazer um novo deploy.
- [ ] Enviar uma mensagem de teste pelo site publicado e confirmar o recebimento.

Enquanto isso não for feito, **em produção** o formulário responde
"indisponível" (e mostra o e-mail público como alternativa).

## 2. 🔴 Revisão jurídica (Privacidade e Termos de Uso)

Sem advogado ainda. Os trechos `TODO: REVISÃO JURÍDICA` continuam visíveis
nas páginas `/privacidade` e `/termos`:

- Prazo de retenção dos dados do formulário e processo de exclusão.
- Canal formal e prazo para direitos da LGPD (e se haverá encarregado/DPO).
- Licença de uso do conteúdo do site e notificação de mudanças nos termos.
- Enquadramento do Resend como operador de dados (a política já informa que
  as mensagens são entregues por esse serviço).

Decisão do responsável: não informar CNPJ/razão social/endereço por enquanto
("é apenas um site institucional"). Um advogado pode recomendar o contrário
para as páginas legais — vale perguntar a ele.

## 3. 🟡 Publicação

- [ ] Escolher o plano (recomendação: Vercel Pro — ver `DEPLOY.md`, seção
      "Vercel", com o motivo e as alternativas).
- [ ] Instalar a Vercel na organização GitHub `TecnoDreamer` (você é dono) e
      importar o repositório.
- [ ] Registrar `tecnodreamer.com.br` no Registro.br (parecia livre em
      2026-11-02) e apontar o DNS para a Vercel.
- [ ] Definir `NEXT_PUBLIC_SITE_URL=https://tecnodreamer.com.br`.
- [ ] (Local) Atualizar o endereço do remote:
      `git remote set-url origin https://github.com/TecnoDreamer/tecnodreamer-web.git`

## 4. 🟡 Decisões em aberto

- **Renomear "Pet & Pet" para "Petable"?** Você mencionou a mudança. Quando
  decidir, preciso do logotipo novo (o atual mostra "Pet & Pet"), do nome
  final e de confirmar que o endereço `/produtos/pet-e-pet` pode virar
  `/produtos/petable`.
- **LinkedIn do fundador:** o site usa
  `https://www.linkedin.com/in/aleksandergustavo` (você informou
  `linkedin.com.br/in/aleksandergustavo`). Abra o link e confirme que é o seu
  perfil.
- **Cultura da empresa:** segue em branco; o bloco fica oculto na página
  Empresa até você escrever.

## 5. 🟢 Quando existirem

- Perfis de **LinkedIn e Instagram** da empresa: me passe os endereços e eu
  coloco no rodapé, na página de contato e no FAQ.
- **Quarto produto**: o card foi removido; basta me passar nome, público,
  problema, status e logotipo para recriá-lo.
- **Endereço, parceiros e vagas**: sem previsão; nada é exibido.
