import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import CartSidebar from "@/app/components/CartSidebar";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frodo — Pastas Artesanales",
  description:
    "Pasta de maní, tahini, hummus y miel artesanal. 100% natural, sin conservantes. Hecho en Argentina.",
  openGraph: {
    title: "Frodo — Pastas Artesanales",
    description: "La mejor pasta de maní artesanal de Argentina.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#fafafa]">
        <Header />
        <CartSidebar />
        {children}
      </body>
    </html>
  );
}
