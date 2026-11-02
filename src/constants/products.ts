import { PawPrint, QrCode, LineChart } from "lucide-react";
import type { Product } from "@/types/product";

/**
 * Dados dos produtos conferidos nos repositórios/documentação de cada um
 * (Pet & Pet: README do projeto; PetConnect: README e docs/requisitos; Lucratix:
 * docs/product). Nada aqui é estimado ou inventado — se um recurso ainda não
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
    // repositório do produto, conferido em 2026-11-02): 16 das 18 fases
    // concluídas e testadas; faltam integrações externas e o hardening final.
    roadmapProgress: {
      completed: 16,
      total: 18,
      pendingLabels: [
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
      "Dashboard e visão executiva por empresa",
      "Experimentos A/B e CRO",
      "Relatório executivo em PDF",
      "Importação e exportação de planilhas",
      "Interface em português, inglês e espanhol",
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
          "Ainda não publicamente. Está em desenvolvimento avançado: autenticação, multi-tenancy, baseline, financeiro, marketing, funil, motor de métricas, dashboard, experimentos e relatórios já estão implementados e testados. Integrações com fontes externas (GA4, Google Ads, Meta Ads) e o hardening final de segurança/performance ainda estão pendentes.",
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
