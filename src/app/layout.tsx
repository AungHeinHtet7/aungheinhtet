import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aung Hein Htet | Mobile Developer",
  description: "Portfolio of Aung Hein Htet, focusing on scalable systems, performance optimization, and cost reduction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans min-h-screen flex flex-col bg-black text-white selection:bg-white/30`}
      >
        {children}
      </body>
    </html>
  );
}
