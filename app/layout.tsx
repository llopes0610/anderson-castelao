import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://anderson-castelao.vercel.app/"; // ajuste depois
const SITE_NAME = "Anderson Castelão | Personal das Estrelas";
const SITE_DESCRIPTION =
  "Consultoria, mentoria e planos de treino personalizados com Anderson Castelão, Personal das Estrelas. Resultados reais, performance e estética.";
const PREVIEW_IMAGE = "/anderson.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_NAME,
    template: "%s | Anderson Castelão",
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,
  authors: [{ name: "Anderson Castelão" }],
  creator: "Anderson Castelão",
  publisher: "Anderson Castelão",

  keywords: [
    "personal trainer",
    "personal das estrelas",
    "treino personalizado",
    "consultoria fitness",
    "mentoria fitness",
    "hipertrofia",
    "performance física",
    "educação física",
  ],

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: PREVIEW_IMAGE,
        width: 1200,
        height: 630,
        alt: "Anderson Castelão - Personal das Estrelas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [PREVIEW_IMAGE],
    creator: "@andersoncastelao", // opcional
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "fitness",
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
