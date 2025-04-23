import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MarketIA - Inteligência Artificial para Supermercados",
  description: "Transforme dados em decisões inteligentes para seu supermercado com a MarketIA. Reduza desperdícios, aumente lucros e tome decisões baseadas em dados.",
  keywords: "supermercado, inteligência artificial, gestão, dados, insights, redução de desperdício, aumento de lucro",
  authors: [{ name: "MarketIA" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1a1a1a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 min-h-screen`}
      >
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,165,0,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,0,0,0.1),transparent_50%)]"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
