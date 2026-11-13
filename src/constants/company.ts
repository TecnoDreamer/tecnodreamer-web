export const COMPANY = {
  name: "TecnoDreamer",
  // Canais públicos informados pelo responsável. Endereço físico e redes
  // sociais ficam de fora de propósito: a empresa ainda não tem perfis
  // criados e prefere não divulgar endereço.
  contact: {
    email: "aleksandergustavo9@gmail.com",
    phoneDisplay: "(19) 97150-8170",
    phoneHref: "tel:+5519971508170",
    whatsappHref: "https://wa.me/5519971508170",
  },
  shortPitch:
    "Software especializado para quem cuida de pets e para quem precisa entender seu marketing.",
  about:
    "A TecnoDreamer é uma empresa de tecnologia em formação, dedicada a construir produtos digitais próprios para o mercado pet e para times de marketing orientados a dados.",
  history:
    "A TecnoDreamer nasceu da decisão de construir, do zero, um portfólio de produtos de software próprios — começando pelo mercado pet (gestão de pet shops e clínicas, identificação de animais por QR Code) e por marketing orientado a dados. Este site institucional é o primeiro produto entregue: a base sobre a qual os demais produtos serão apresentados.",
  purpose:
    "Existimos para entregar soluções tecnológicas a quem busca produtos digitais que resolvam as suas necessidades.",
  mission:
    "Desenvolver soluções digitais em tecnologia. Nossos softwares atendem a gestão de empresas de marketing, pet shops, agropecuárias e clínicas veterinárias.",
  vision:
    "Desenvolver soluções de ponta para o maior número possível de clientes, trazendo as melhores soluções para os problemas do mercado.",
  principles: [
    "Nenhuma funcionalidade é anunciada como pronta antes de existir de fato.",
    "Segurança e privacidade são parte do design, não uma etapa posterior.",
    "Cada produto nasce de um problema real de um público real.",
  ],
  // Ainda não definida pelo responsável; a página Empresa oculta o bloco
  // enquanto for null (nada de texto inventado).
  culture: null as string | null,
  futureGoals: [
    "Levar o Pet & Pet e o PetConnect ao primeiro lançamento.",
    "Criar os canais oficiais da TecnoDreamer nas redes sociais (LinkedIn e Instagram).",
  ],
  values: [
    "Tecnologia aplicada a problemas reais do dia a dia dos nossos clientes.",
    "Transparência sobre o estágio real de cada produto — sem promessas além do que existe.",
    "Segurança e privacidade dos dados como requisito, não como extra.",
    "Evolução contínua dos produtos, com base em uso real.",
  ],
  // Tecnologias realmente usadas nos produtos e neste site (conferidas nos
  // repositórios de cada um): este site (Next.js, React, TypeScript),
  // PetConnect (Flutter, Firebase), Pet & Pet (PHP, MySQL).
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Flutter",
    "Firebase",
    "PHP",
    "MySQL",
  ],
} as const;
