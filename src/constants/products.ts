import { PawPrint, QrCode } from "lucide-react";
import type { Product } from "@/types/product";

/**
 * Dados dos produtos conferidos nos repositórios/documentação de cada um
 * (Pet & Pet: README do projeto; PetConnect: README e docs/requisitos).
 * O Lucratix está fora do portfólio exibido; os dados dele ficam no
 * histórico do git (commit anterior à remoção). Nada aqui é estimado ou inventado — se um recurso ainda não
 * existe no produto, ele aparece como "em construção" ou fica de fora.
 */
export const PRODUCTS: Product[] = [
  {
    slug: "pet-e-pet",
    name: "Pet & Pet",
    tagline: "Gestão do dia a dia para pet shops, clínicas veterinárias e agropecuárias.",
    category: "Gestão",
    icon: PawPrint,
    logoSrc: "/logos/pet-e-pet.png",
    // PNG transparente com o texto "PET & PET" em preto: precisa de placa
    // clara para continuar legível no tema escuro do site.
    logoPlate: "light",
    status: "em-desenvolvimento",
    audience: ["Pet shops", "Clínicas veterinárias", "Agropecuárias"],
    problem:
      "Estabelecimentos do mercado pet costumam depender de planilhas e sistemas isolados para cadastro de clientes, pets, agendamentos, estoque e vendas, dificultando o controle do negócio como um todo.",
    solution:
      "Um sistema de gestão web pensado para a rotina de pet shops, clínicas e agropecuárias: cadastro de clientes e pets, agendamento de serviços, estoque e vendas no balcão em um só lugar.",
    features: [
      "Login e recuperação de senha",
      "Cadastro de funcionários",
      "Cadastro de clientes e histórico",
      "Cadastro de pets (espécie e raça)",
      "Registro de vacinas do pet",
      "Agendamento de serviços (banho e tosa, vacinas)",
      "Cadastro de serviços",
      "Cadastro de produtos e controle de estoque",
      "Ponto de venda (produtos e serviços)",
      "Relatórios de vendas",
      "Painel de gerenciamento",
    ],
    differentiators: [
      "Nasceu da rotina de um pet shop real: atendimento, agendamento e venda no balcão no mesmo sistema.",
      "Pensado especificamente para o mercado pet, não um sistema genérico adaptado.",
      "Cadastro de pets sempre vinculado ao cliente, com espécie, raça e vacinas.",
    ],
    howItWorks: [
      "O estabelecimento cadastra clientes, pets, serviços e produtos.",
      "A equipe agenda serviços e registra vendas e formas de pagamento no ponto de venda.",
      "A gestão acompanha estoque, relatórios e o painel de gerenciamento.",
    ],
    faq: [
      {
        question: "O sistema já está disponível?",
        answer:
          "Ainda não como produto. Existe uma primeira versão funcional, criada a partir da rotina de um pet shop; ela está sendo evoluída para o produto comercial e ainda não está disponível publicamente.",
      },
      {
        question: "Para quem é este produto?",
        answer:
          "Para pet shops, clínicas veterinárias e agropecuárias que precisam centralizar clientes, pets, agendamentos, estoque e vendas.",
      },
    ],
  },
  {
    slug: "petconnect",
    name: "PetConnect",
    tagline: "Localização de pets desaparecidos por QR Code, com a carteira de saúde do pet no celular.",
    category: "Mobile",
    icon: QrCode,
    logoSrc: "/logos/petconnect.png",
    status: "em-desenvolvimento",
    // Requisitos funcionais do app (README e docs/requisitos-funcionais.md do
    // projeto). 44 no escopo atual (RF01–RF42 mais RF04-A e RF20-A; o login com
    // Facebook, RF04-B, saiu do escopo). 29 implementados, 11 em revisão
    // (login com Google, memorial e galeria de fotos) e 4 pendentes (página
    // pública do QR Code e relato direto de localização).
    roadmapProgress: {
      title: "Requisitos funcionais implementados",
      unit: "requisitos concluídos",
      completed: 29,
      total: 44,
      pendingLabels: [
        "página pública do QR Code e regeneração do código",
        "relato de localização por quem encontra o pet",
        "em revisão: login com Google, memorial do pet e galeria de fotos",
      ],
    },
    audience: ["Tutores de pets", "Pessoas que encontram um animal perdido"],
    problem:
      "Pets fugidos ou perdidos raramente carregam uma forma confiável de identificação que leve de volta ao tutor, e quem os encontra não tem como contatar o dono de forma rápida e segura.",
    solution:
      "Um aplicativo mobile onde o tutor cadastra seus pets e cada pet recebe um QR Code próprio. A ideia é que quem encontrar o animal escaneie o código e veja, sem instalar nada, só o necessário para devolvê-lo — sem expor dados sensíveis do tutor nem o histórico médico. A página pública do QR Code ainda está em construção.",
    features: [
      "Conta do tutor, com login por e-mail ou Google",
      "Cadastro de vários pets, com foto",
      "QR Code individual por pet",
      "Carteira de vacina com alerta de próxima dose",
      "Histórico médico com anexos de exames",
      "Agendamento de consultas",
      "Registro e consulta de avistamentos do pet",
      "Memorial do pet",
      "Galeria de fotos por pet",
    ],
    differentiators: [
      "Um QR Code por pet, pensado para levar a uma página pública que mostre só o necessário para devolver o animal.",
      "Carteira de vacina, histórico médico e consultas do pet reunidos no celular do tutor.",
      "Cada tutor só enxerga os pets da própria conta.",
    ],
    howItWorks: [
      "O tutor cria a conta no aplicativo e cadastra seus pets.",
      "O app gera um QR Code individual para cada pet, para afixar na coleira ou em uma etiqueta.",
      "O tutor registra e acompanha no app os avistamentos do pet. A página pública do QR Code, que vai permitir a quem encontra o pet ver como devolvê-lo, ainda está em construção.",
    ],
    faq: [
      {
        question: "O PetConnect já está disponível para download?",
        answer:
          "Ainda não nas lojas de aplicativos. O app está em desenvolvimento e em fase de testes, com uma versão de teste para Android distribuída a testadores.",
      },
      {
        question: "Quem vê as informações do QR Code?",
        answer:
          "A página pública do QR Code ainda está em construção. A regra do projeto é exibir apenas o necessário para devolver o pet, sem histórico médico.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}

export const PRODUCT_STATUS_LABEL: Record<Product["status"], string> = {
  planejamento: "Planejamento",
  "em-desenvolvimento": "Em desenvolvimento",
  beta: "Beta",
  producao: "Em produção",
};
