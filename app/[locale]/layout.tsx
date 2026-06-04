import type { Metadata } from "next";

import { homeMetadata } from "@/app/data";
import { SettingsProvider } from "@/context/SettingProvider";
import type { Lang } from "@/lib/types";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = (locale === "es" ? "es" : "en") as Lang;
  const meta = homeMetadata[lang];

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "Mio Labs LLC" }],
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        es: "/es",
        "x-default": "/en",
      },
    },
    openGraph: {
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      type: "website",
      url: `https://bazarmio.com/${lang}`,
      locale: lang === "es" ? "es_EC" : "en_US",
    },
  };
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const lang = (locale === "es" ? "es" : "en") as Lang;

  return <SettingsProvider initialLang={lang}>{children}</SettingsProvider>;
}
