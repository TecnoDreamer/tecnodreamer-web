export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * FAQ institucional (geral) — diferente das perguntas frequentes de cada
 * produto (ver src/constants/products.ts), que ficam nas páginas de
 * produto. Sem informação inventada: pontos ainda não definidos usam
 * TODO: DEFINIR COM PRODUCT OWNER.
 */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "A TecnoDreamer já tem produtos disponíveis para uso?",
    answer:
      "Ainda não. Nenhum produto do portfólio foi lançado comercialmente: o Pet & Pet e o PetConnect estão em desenvolvimento. Acompanhe o status real de cada um na página de Produtos.",
  },
  {
    question: "Como posso saber mais sobre um produto específico?",
    answer:
      "Cada produto tem uma página própria com o problema que resolve, a solução proposta, as funcionalidades e perguntas frequentes específicas.",
  },
  {
    question: "Como entro em contato com a TecnoDreamer?",
    answer:
      "Pelo formulário em /contato, ou pelo e-mail e telefone divulgados nessa página e no rodapé do site. Respondemos por e-mail.",
  },
  {
    question: "Meus dados enviados pelo formulário de contato estão seguros?",
    answer:
      "Sim. Validamos e sanitizamos tudo no servidor, aplicamos limite de tentativas contra abuso e nunca registramos o conteúdo da mensagem em log de forma legível. Detalhes na Política de Privacidade.",
  },
  {
    question: "A TecnoDreamer está contratando?",
    answer:
      "No momento não há vagas abertas e não há previsão de contratações. Se isso mudar, avisaremos aqui no site.",
  },
  {
    question: "Onde posso acompanhar novidades da TecnoDreamer?",
    answer:
      "A TecnoDreamer está criando seus canais oficiais (LinkedIn e Instagram). Enquanto isso, as novidades são publicadas aqui no site.",
  },
];
