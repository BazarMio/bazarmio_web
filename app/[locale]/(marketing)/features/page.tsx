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
  BTN_PRIMARY_CTA,
  H2,
  P_SUBTITLE,
} from "@/lib/theme";
import { GOOGLE_PLAY_URL } from "@/lib/routes";

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
