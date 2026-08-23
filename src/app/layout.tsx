import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tecnodreamer.com";

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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
