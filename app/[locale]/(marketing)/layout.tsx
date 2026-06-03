import { DefaultNav } from "@/components/navigation/DefaultNav";
import { Footer } from "@/components/navigation/Footer";
import { homeData } from "@/app/data";
import { localePath, DASHBOARD_LOGIN, FAQ } from "@/lib/routes";
import type { Lang } from "@/lib/types";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const lang = (locale === "es" ? "es" : "en") as Lang;

  const navData = homeData[lang].nav;
  const navLinks = [
    { href: `/${lang}`, label: navData.home },
    { href: `/${lang}/features`, label: navData.features },
    { href: localePath(lang, FAQ), label: navData.faq },
    { href: `/${lang}/contact`, label: navData.contact },
    // { href: `/${lang}/education`, label: navData.education },
  ];

  return (
    <>
      <DefaultNav navLinks={navLinks} homeHref={`/${lang}`} loginHref={localePath(lang, DASHBOARD_LOGIN)} />
      <main className="min-h-screen">{children}</main>
      <Footer locale={lang} />
    </>
  );
}
