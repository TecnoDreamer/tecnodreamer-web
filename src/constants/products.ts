import { PawPrint, QrCode, LineChart, Sparkles } from "lucide-react";
import type { Product } from "@/types/product";

export const PRODUCTS: Product[] = [
  {
    slug: "pet-e-pet",
    name: "Pet & Pet",
    tagline: "Gestão completa para pet shops, clínicas e agropecuárias.",
    category: "Gestão",
    icon: PawPrint,
    logoSrc: "/logos/pet-e-pet.png",
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
          "Não. O Pet & Pet está em fase de planejamento — as funcionalidades listadas aqui representam o escopo previsto, não recursos já entregues.",
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
    logoSrc: "/logos/petconnect.png",
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
    slug: "lucratix",
    name: "Lucratix",
    tagline: "BI, Marketing Analytics, Growth e CRO para consultorias com múltiplos clientes.",
    category: "BI & Analytics",
    icon: LineChart,
    logoSrc: "/logos/lucratix.png",
    // Paleta extraída por amostragem de pixel do logotipo oficial do
    // Lucratix (ver docs/branding/LUCRATIX_BRAND.md no repositório do
    // produto) — não escolhida livremente.
    accentColor: {
      onLight: { primary: "#0052e0", secondary: "#001640" },
      onDark: { primary: "#3b82f6", secondary: "#0a1436" },
    },
    // Fases do roadmap técnico do Lucratix (docs/product/roadmap.md no
    // repositório do produto): 16 das 18 fases concluídas e testadas;
    // faltam integrações externas e o hardening final.
    roadmapProgress: {
      completedPhases: 16,
      totalPhases: 18,
      pendingPhaseLabels: [
        "Integrações externas (GA4, Google Ads, Meta Ads)",
        "Hardening (segurança, performance, acessibilidade, observabilidade, backup)",
      ],
    },
    status: "em-desenvolvimento",
    audience: [
      "Consultorias de marketing",
      "Consultores de growth e CRO",
      "Profissionais de marketing que atendem múltiplos clientes ao mesmo tempo",
    ],
    problem:
      "Consultorias de marketing conseguem mostrar métricas de campanha (impressões, cliques, CTR), mas têm dificuldade real em provar, de forma confiável e auditável, se o trabalho realizado gerou mais faturamento, lucro e clientes lucrativos para cada cliente atendido — e em comparar isso com a situação anterior ao início do serviço. Planilhas soltas por cliente não têm baseline preservado, controle de acesso nem trilha de auditoria, e métricas como CAC, LTV e ROAS costumam ser calculadas de formas diferentes por pessoas diferentes.",
    solution:
      "Uma plataforma que centraliza os dados de cada empresa/cliente atendido de forma isolada e segura, com baseline histórico nunca sobrescrito silenciosamente, e um motor central de métricas com fórmulas documentadas e tratamento correto de dado ausente (nunca vira zero). Conecta investimento em marketing a resultado financeiro real — faturamento, lucro, margem, CAC, LTV, ROAS, conversão — com comparação antes × depois.",
    features: [
      "Organizações multi-tenant isoladas por cliente",
      "Baseline histórico versionado",
      "Financeiro por período",
      "Canais e campanhas",
      "Funil (impressão → recompra)",
      "Motor de métricas (CAC, LTV, ROAS, ROI, conversão)",
      "Comparação baseline × atual",
      "Dashboard executivo por empresa",
      "Experimentos e CRO",
      "Relatório executivo em PDF",
      "Auditoria e RBAC por organização",
      "API com chave por organização",
    ],
    differentiators: [
      "Conecta investimento em marketing a resultado financeiro real do cliente, não apenas métricas de mídia isoladas.",
      "Isolamento de dados por empresa com trilha de auditoria desde o primeiro dia — não uma planilha compartilhada.",
      "Baseline histórico nunca sobrescrito, com tratamento explícito de dado ausente em vez de zerar indicadores silenciosamente.",
      "Deliberadamente conservador sobre o que os dados podem afirmar: não declara vencedor de experimento por diferença percentual simples, nem promete atribuição automática de causalidade.",
    ],
    howItWorks: [
      "A consultoria cadastra cada empresa/cliente com baseline (situação antes do serviço) preservado historicamente.",
      "O time registra financeiro, canais/campanhas e etapas do funil por período, com controle de acesso e trilha de auditoria.",
      "O motor de métricas calcula CAC, LTV, ROAS, ROI e conversão, comparando baseline × atual em um dashboard executivo e relatórios exportáveis.",
    ],
    faq: [
      {
        question: "O Lucratix já está disponível?",
        answer:
          "Ainda não publicamente. Está em desenvolvimento avançado: autenticação, multi-tenancy, baseline, financeiro, marketing, funil, motor de métricas, dashboard e experimentos já estão implementados e testados. Integrações com fontes externas (GA4, Google Ads, Meta Ads) e o hardening final de segurança/performance ainda estão pendentes.",
      },
      {
        question: "Para quem é o Lucratix?",
        answer:
          "Para consultorias e profissionais de marketing que atendem múltiplas empresas/clientes ao mesmo tempo e precisam provar e melhorar o impacto do seu trabalho com dados isolados por cliente e auditáveis.",
      },
      {
        question: "O Lucratix substitui o gerenciador de anúncios (Google Ads, Meta Ads)?",
        answer:
          "Não. O Lucratix não gerencia campanhas — ele conecta o investimento feito nessas plataformas ao resultado financeiro real do cliente. Também não é, nesta fase, uma ferramenta de automação de marketing nem de contabilidade fiscal.",
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
