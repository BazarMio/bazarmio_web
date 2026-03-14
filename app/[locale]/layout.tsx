import type { Metadata } from "next";
import { SettingsProvider } from "@/context/SettingProvider";
import { DefaultNav } from "@/components/navigation/DefaultNav";
import { Footer } from "@/components/navigation/Footer";
import { homeData, homeMetadata } from "@/app/data";
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

  const navData = homeData[lang].nav;
  const navLinks = [
    { href: `/${lang}`, label: navData.home },
    { href: `/${lang}/features`, label: navData.features },
    // { href: `/${lang}/education`, label: navData.education },
  ];

  return (
    <SettingsProvider initialLang={lang}>
      <DefaultNav navLinks={navLinks} homeHref={`/${lang}`} />
      <main className="min-h-screen">{children}</main>
      <Footer locale={lang} />
    </SettingsProvider>
  );
}
