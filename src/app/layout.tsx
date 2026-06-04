import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barbearia Bassi | Seu visual em dia é na BASSI",
  description:
    "Barbearia premium em Av. Acácias, 2120B – Res. Norte. Cortes, barba, combo e muito mais. Atendemos de Segunda a Sábado, 08:00 às 19:00.",
  keywords: [
    "barbearia",
    "Bassi",
    "corte de cabelo",
    "barba",
    "barbearia masculina",
    "barbearia premium",
  ],
  openGraph: {
    title: "Barbearia Bassi | Seu visual em dia é na BASSI",
    description:
      "Barbearia premium em Av. Acácias, 2120B – Res. Norte. Atendemos de Seg à Sáb, 08:00 às 19:00.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={geist.className}>
      <body className="bg-[#0d0704] text-white antialiased">{children}</body>
    </html>
  );
}
