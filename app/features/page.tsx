"use client";

import { Hero } from "@/components/landing/Hero";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { featuresData } from "./data";
import { useSettings } from "@/context/SettingProvider";
import {
  SECTION_CTA,
  CONTAINER_CTA,
  BTN_PRIMARY_CTA,
  H2,
  P_SUBTITLE,
} from "@/lib/theme";

export default function FeaturesPage() {
  const { lang } = useSettings();
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
            <Link href="#">{content.cta.button}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
