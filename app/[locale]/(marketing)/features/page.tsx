import { Hero } from "@/components/landing/Hero";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { featuresData } from "./data";
import type { Lang } from "@/lib/types";
import {
  SECTION_CTA,
  CONTAINER_CTA,
  CONTAINER_MD,
  BTN_PRIMARY_CTA,
  H2,
  P_SUBTITLE,
} from "@/lib/theme";
import { GOOGLE_PLAY_URL, FAQ, localePath } from "@/lib/routes";

type Props = { params: Promise<{ locale: string }> };

export default async function FeaturesPage({ params }: Props) {
  const { locale } = await params;
  const lang = (locale === "es" ? "es" : "en") as Lang;
  const content = featuresData[lang];

  return (
    <>
      <Hero title={content.hero.title} subtitle={content.hero.subtitle} />

      <FeaturesGrid features={content.features} />

      <ComparisonTable data={content.comparison} />

      <div className="px-4 sm:px-6 lg:px-8 py-10 border-t border-white/10">
        <div className={`${CONTAINER_MD} flex flex-col sm:flex-row items-center justify-between gap-3`}>
          <p className="text-gray-300">{content.faqCta.text}</p>
          <Link
            href={localePath(lang, FAQ)}
            className="shrink-0 text-lime font-medium hover:text-lime/80 transition-colors underline underline-offset-4"
          >
            {content.faqCta.ctaText}
          </Link>
        </div>
      </div>

      <section className={SECTION_CTA}>
        <div className={CONTAINER_CTA}>
          <h2 className={H2}>{content.cta.title}</h2>
          <p className={P_SUBTITLE}>{content.cta.subtitle}</p>
          <Button asChild size="lg" className={BTN_PRIMARY_CTA}>
            <Link href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">{content.cta.button}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
