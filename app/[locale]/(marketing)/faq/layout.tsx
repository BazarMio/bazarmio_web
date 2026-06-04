import type { Metadata } from "next";
import type { Lang } from "@/lib/types";
import { getFaqJsonLd } from "@/lib/jsonld";
import { faqMetadata, faqData } from "./data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = (locale === "es" ? "es" : "en") as Lang;
  const meta = faqMetadata[lang];

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

export default async function FaqLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale === "es" ? "es" : "en") as Lang;
  const meta = faqMetadata[lang];
  const content = faqData[lang];

  const allQuestions = content.sections.flatMap((section) =>
    section.items.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
  );

  const jsonLd = getFaqJsonLd({
    locale,
    pageTitle: meta.title,
    pageDescription: meta.description,
    homeLabel: lang === "es" ? "Inicio" : "Home",
    pageLabel: lang === "es" ? "Preguntas Frecuentes" : "FAQ",
    questions: allQuestions,
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
