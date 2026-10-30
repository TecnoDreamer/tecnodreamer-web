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
      "Ainda não. Nenhum produto do portfólio foi lançado: o Pet & Pet e o PetConnect estão em planejamento e o Lucratix está em desenvolvimento. Acompanhe o status real de cada um na página de Produtos.",
  },
  {
    question: "Como posso saber mais sobre um produto específico?",
    answer:
      "Cada produto tem uma página própria com o problema que resolve, a solução proposta, funcionalidades planejadas e perguntas frequentes específicas.",
  },
  {
    question: "Como entro em contato com a TecnoDreamer?",
    answer:
      "O formulário em /contato é o canal oficial nesta fase — respondemos por e-mail.",
  },
  {
    question: "Meus dados enviados pelo formulário de contato estão seguros?",
    answer:
      "Sim. Validamos e sanitizamos tudo no servidor, aplicamos limite de tentativas contra abuso e nunca registramos o conteúdo da mensagem em log de forma legível. Detalhes na Política de Privacidade.",
  },
  {
    question: "A TecnoDreamer está contratando?",
    answer:
      "No momento não há vagas abertas. TODO: DEFINIR COM PRODUCT OWNER — canal para divulgar futuras oportunidades.",
  },
  {
    question: "Onde posso acompanhar novidades da TecnoDreamer?",
    answer: "TODO: DEFINIR COM PRODUCT OWNER — canais oficiais ainda não foram definidos.",
  },
  {
    question: "A TecnoDreamer tem parceiros ou investidores?",
    answer: "TODO: DEFINIR COM PRODUCT OWNER.",
  },
];
