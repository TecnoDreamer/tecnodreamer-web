import { PawPrint, QrCode, LineChart, Sparkles } from "lucide-react";
import type { Product } from "@/types/product";

export const PRODUCTS: Product[] = [
  {
    slug: "gestao-pet",
    name: "Sistema de Gestão Pet",
    tagline: "Gestão completa para pet shops, clínicas e agropecuárias.",
    category: "Gestão",
    icon: PawPrint,
    status: "planejamento",
    audience: [
      "Pet shops",
      "Clínicas veterinárias",
      "Hospitais veterinários",
      "Agropecuárias",
      "Estabelecimentos do mercado pet",
    ],
    problem:
      "Estabelecimentos do mercado pet costumam depender de planilhas e sistemas isolados para cadastro de clientes, tutores, pets, estoque e financeiro, dificultando o controle do negócio como um todo.",
    solution:
      "Um sistema de gestão único, pensado para o dia a dia de pet shops, clínicas e agropecuárias, unindo cadastro, atendimento, estoque e financeiro em um só lugar.",
    features: [
      "Clientes e tutores",
      "Cadastro de pets",
      "Controle de estoque",
      "Produtos",
      "Vendas",
      "Serviços",
      "Consultas",
      "Prontuários",
      "Vacinação",
      "Agendamentos",
      "Financeiro",
      "Relatórios",
      "Dashboard",
      "Gestão administrativa",
    ],
    differentiators: [
      "Pensado especificamente para o mercado pet, não um ERP genérico adaptado.",
      "Cobre desde o atendimento clínico até a gestão financeira do negócio.",
      "Construído com tecnologia moderna e evolução contínua.",
    ],
    howItWorks: [
      "O estabelecimento cadastra tutores, pets e seu catálogo de produtos/serviços.",
      "O time de atendimento usa o sistema para agendar, atender e registrar consultas e vendas.",
      "A gestão acompanha estoque, financeiro e desempenho pelo dashboard.",
    ],
    faq: [
      {
        question: "O sistema já está disponível?",
        answer:
          "Não. O Sistema de Gestão Pet está em fase de planejamento — as funcionalidades listadas aqui representam o escopo previsto, não recursos já entregues.",
      },
      {
        question: "Para quem é este produto?",
        answer:
          "Para pet shops, clínicas veterinárias, hospitais veterinários e agropecuárias que precisam centralizar clientes, pets, estoque, vendas e financeiro.",
      },
    ],
  },
  {
    slug: "petconnect",
    name: "PetConnect",
    tagline: "Identificação e localização de pets por QR Code.",
    category: "Mobile",
    icon: QrCode,
    status: "planejamento",
    audience: ["Tutores de pets", "Pessoas que encontram um animal perdido"],
    problem:
      "Quando um pet se perde, quem o encontra geralmente não tem como identificar o animal nem contatar o tutor de forma rápida e segura.",
    solution:
      "Um aplicativo mobile onde o tutor cadastra seus pets e gera um QR Code individual para cada um. Ao escanear o código, qualquer pessoa acessa uma página pública com as informações que o tutor autorizou compartilhar.",
    features: [
      "Perfil do tutor",
      "Cadastro de múltiplos pets",
      "QR Code individual por pet",
      "Identificação do animal",
      "Contato com o tutor",
      "Sinalização de animal desaparecido",
      "Carteira de vacinação",
      "Histórico médico",
      "Consultas",
      "Informações importantes do pet",
      "Localização",
      "Notificações",
    ],
    differentiators: [
      "QR Code individual por pet, sem depender de coleiras ou chips proprietários.",
      "O tutor controla o que é exibido publicamente ao escanear o código.",
      "Pensado para o momento crítico de um pet perdido, com fluxo simples para quem encontra.",
    ],
    howItWorks: [
      "O tutor baixa o app, cria seu perfil e cadastra os pets.",
      "O app gera um QR Code individual para cada pet, que pode ser afixado na coleira.",
      "Ao escanear o QR Code, qualquer pessoa acessa uma página pública com as informações autorizadas pelo tutor, incluindo contato.",
    ],
    faq: [
      {
        question: "O PetConnect já está disponível para download?",
        answer:
          "Não. O PetConnect está em fase de planejamento — ainda não há aplicativo publicado.",
      },
      {
        question: "Quem vê as informações do QR Code?",
        answer:
          "Apenas o que o tutor autorizar aparece na página pública acessada pelo QR Code. O controle de privacidade é do tutor.",
      },
    ],
  },
  {
    slug: "marketing-analytics",
    name: "Marketing Analytics",
    tagline: "Inteligência de dados para decisões de marketing.",
    category: "Analytics",
    icon: LineChart,
    status: "planejamento",
    audience: [
      "Times de marketing",
      "Times de growth",
      "Gestores que investem em campanhas pagas",
    ],
    problem:
      "Métricas de marketing costumam ficar espalhadas entre plataformas de anúncio, planilhas e ferramentas de analytics, dificultando uma visão única de campanhas, funil e retorno sobre investimento.",
    solution:
      "Um sistema que centraliza e analisa dados de campanhas, leads e conversões em dashboards, com espaço para automações e inteligência analítica evoluir ao longo do tempo.",
    features: [
      "Campanhas",
      "Leads",
      "Conversões",
      "CAC",
      "ROI",
      "ROAS",
      "Funil",
      "Canais",
      "Campanhas publicitárias",
      "Métricas",
      "Dashboards",
      "Indicadores",
      "Relatórios",
      "Tendências",
      "Previsões",
    ],
    differentiators: [
      "Visão centralizada de métricas que hoje ficam espalhadas entre ferramentas.",
      "Arquitetura pensada para incorporar Python para automações e Machine Learning no futuro.",
      "Foco em indicadores acionáveis (CAC, ROI, ROAS), não apenas dados brutos.",
    ],
    howItWorks: [
      "O time conecta suas fontes de dados de campanhas e canais.",
      "O sistema consolida métricas de funil, conversão e retorno em dashboards.",
      "Relatórios e indicadores de tendência apoiam decisões de investimento em marketing.",
    ],
    faq: [
      {
        question: "O Marketing Analytics já está em uso?",
        answer:
          "Não. Está em fase de planejamento. Python para automações e Machine Learning é uma direção futura, ainda não implementada.",
      },
    ],
  },
  {
    slug: "em-desenvolvimento",
    name: "Próximo produto TecnoDreamer",
    tagline: "Um novo produto do portfólio está sendo concebido.",
    category: "Em breve",
    icon: Sparkles,
    status: "planejamento",
    audience: ["TODO: DEFINIR COM PRODUCT OWNER"],
    problem: "TODO: DEFINIR COM PRODUCT OWNER",
    solution:
      "A TecnoDreamer está avaliando um novo produto para expandir seu portfólio. Os detalhes serão publicados aqui assim que definidos.",
    features: [],
    differentiators: [],
    howItWorks: [],
    faq: [
      {
        question: "Quando este produto será lançado?",
        answer:
          "Ainda não há previsão pública. Acompanhe esta página ou entre em contato para saber mais.",
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
