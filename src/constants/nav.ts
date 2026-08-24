export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Empresa", href: "/empresa" },
  { label: "Produtos", href: "/produtos" },
  { label: "Equipe", href: "/equipe" },
  { label: "Contato", href: "/contato" },
];

export const FOOTER_LEGAL_LINKS: NavItem[] = [
  { label: "FAQ", href: "/faq" },
  { label: "Privacidade", href: "/privacidade" },
  { label: "Termos de uso", href: "/termos" },
];
