import type { Metadata } from "next";
import type { Lang } from "@/lib/types";
import { deleteAccountMetadata } from "./data";
import { getWebPageJsonLd } from "@/lib/jsonld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = (locale === "es" ? "es" : "en") as Lang;
  const meta = deleteAccountMetadata[lang];

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      type: "website",
    },
  };
}

export default async function DeleteAccountLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale === "es" ? "es" : "en") as Lang;
  const meta = deleteAccountMetadata[lang];
  const jsonLd = getWebPageJsonLd({
    locale,
    path: "/contact/delete-account",
    name: meta.title,
    description: meta.description,
    homeLabel: lang === "es" ? "Inicio" : "Home",
    breadcrumbLabel:
      lang === "es" ? "Eliminar Cuenta" : "Delete Account",
    datePublished: "2026-03-30",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
