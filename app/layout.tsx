import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anderson Castelão | Personal das Estrelas",
  description:
    "Consultoria, mentoria e planos de treino personalizados com Anderson Castelão, Personal das Estrelas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
