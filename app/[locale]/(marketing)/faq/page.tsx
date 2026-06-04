import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaqAccordions } from "@/components/landing/FaqAccordions";
import {
  SECTION,
  SECTION_CTA,
  CONTAINER_CTA,
  CONTAINER_LG,
  H1_PAGE,
  H2,
  P_SUBTITLE,
  BTN_PRIMARY_CTA,
} from "@/lib/theme";
import { localePath, CONTACT } from "@/lib/routes";
import type { Lang } from "@/lib/types";
import { faqData } from "./data";

type Props = { params: Promise<{ locale: string }> };

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  const lang = (locale === "es" ? "es" : "en") as Lang;
  const content = faqData[lang];

  return (
    <>
      <section className={SECTION}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`${H1_PAGE} mb-4`}>{content.hero.title}</h1>
          <p className={P_SUBTITLE}>{content.hero.subtitle}</p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className={CONTAINER_LG}>
          <FaqAccordions sections={content.sections} locale={lang} />
        </div>
      </section>

      <section className={SECTION_CTA}>
        <div className={CONTAINER_CTA}>
          <h2 className={H2}>{content.cta.title}</h2>
          <p className={P_SUBTITLE}>{content.cta.subtitle}</p>
          <Button asChild size="lg" className={BTN_PRIMARY_CTA}>
            <Link href={localePath(lang, CONTACT)}>{content.cta.button}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
