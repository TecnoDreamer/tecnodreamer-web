import type { TeamMember } from "@/types/team";

/**
 * Pessoas que aparecem publicamente, com dados informados por elas mesmas.
 * Nenhuma pessoa, cargo ou link é inventado: só entra aqui quem concordou
 * em aparecer e forneceu as informações.
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Aleksander Gustavo",
    role: "Fundador e Product Owner",
    description:
      "Fundador da TecnoDreamer. Criativo e inovador, conduz a criação do site e dos produtos do portfólio, do conceito ao desenvolvimento, com apoio de inteligência artificial.",
    specialties: [
      "Produtos digitais com IA",
      "Contato com o cliente",
      "Desenvolvimento orientado a testes",
      "Product Owner",
    ],
    photoUrl: "/team/aleksander-gustavo.jpg",
    linkedinUrl: "https://www.linkedin.com/in/aleksandergustavo",
    githubUrl: "https://github.com/AleksGustavo",
    isPlaceholder: false,
  },
];
