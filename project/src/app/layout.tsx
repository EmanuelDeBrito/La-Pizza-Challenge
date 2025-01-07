import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const getInter = Inter();

export const metadata: Metadata = {
  title: "La Pizza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${getInter} antialiased`}>
        {children}
      </body>
    </html>
  );
}
