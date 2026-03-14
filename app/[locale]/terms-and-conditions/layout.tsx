import type { Metadata } from "next";
import type { Lang } from "@/lib/types";
import { termsMetadata } from "./data";
import { getWebPageJsonLd } from "@/lib/jsonld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = (locale === "es" ? "es" : "en") as Lang;
  const meta = termsMetadata[lang];

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

export default async function TermsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale === "es" ? "es" : "en") as Lang;
  const meta = termsMetadata[lang];
  const jsonLd = getWebPageJsonLd({
    locale,
    path: "/terms-and-conditions",
    name: meta.title,
    description: meta.description,
    breadcrumbLabel: lang === "es" ? "Términos y Condiciones" : "Terms & Conditions",
    homeLabel: lang === "es" ? "Inicio" : "Home",
    datePublished: "2026-03-08",
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
