import type { Metadata } from "next";
import type { Lang } from "@/lib/types";
import { featuresMetadata, featuresData } from "./data";
import { getFeaturesJsonLd } from "@/lib/jsonld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = (locale === "es" ? "es" : "en") as Lang;
  const meta = featuresMetadata[lang];

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

export default async function FeaturesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale === "es" ? "es" : "en") as Lang;
  const meta = featuresMetadata[lang];
  const data = featuresData[lang];
  const jsonLd = getFeaturesJsonLd({
    locale,
    pageTitle: meta.title,
    pageDescription: meta.description,
    heroSubtitle: data.hero.subtitle,
    featureList: data.features.map((f) => f.title).join(", "),
    freeTierName: data.comparison.freeTier,
    proTierName: data.comparison.proTier,
    homeLabel: lang === "es" ? "Inicio" : "Home",
    pageLabel: lang === "es" ? "Funciones" : "Features",
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
