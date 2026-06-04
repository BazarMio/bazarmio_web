import type { Metadata } from "next";
import type { Lang } from "@/lib/types";
import { contactMetadata } from "./data";
import { getContactPageJsonLd } from "@/lib/jsonld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = (locale === "es" ? "es" : "en") as Lang;
  const meta = contactMetadata[lang];

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

export default async function ContactLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale === "es" ? "es" : "en") as Lang;
  const meta = contactMetadata[lang];
  const jsonLd = getContactPageJsonLd({
    locale,
    name: meta.title,
    description: meta.description,
    homeLabel: lang === "es" ? "Inicio" : "Home",
    breadcrumbLabel: lang === "es" ? "Contáctanos" : "Contact",
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
