import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL } from "@/constants/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TecnoDreamer — Software para o mercado pet e para marketing orientado a dados",
    template: "%s | TecnoDreamer",
  },
  description:
    "A TecnoDreamer desenvolve produtos de software para o mercado pet e para marketing orientado a dados: gestão para pet shops e clínicas, identificação de pets por QR Code e analytics de marketing.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "TecnoDreamer",
    title: "TecnoDreamer — Software para o mercado pet e para marketing orientado a dados",
    description:
      "Conheça o portfólio de produtos da TecnoDreamer: gestão pet, identificação de pets por QR Code e analytics de marketing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Design System V3: o site inteiro é escuro (não há tema claro
// alternativo). Declarar o esquema evita que o navegador aplique dark
// mode forçado por cima e deixa controles nativos (select, scrollbar,
// checkbox) no tom escuro.
export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#05080f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      // O script abaixo adiciona a classe "js" antes da hidratação.
      suppressHydrationWarning
    >
      <head>
        {/* Marca que há JS, para o Reveal poder esconder conteúdo até ele
            entrar no viewport. Sem JS, nada fica escondido. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#conteudo"
          className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-brand-cyan px-5 py-3 text-sm font-semibold text-ink transition-transform focus-visible:translate-y-0"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" tabIndex={-1} className="flex flex-1 flex-col outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
