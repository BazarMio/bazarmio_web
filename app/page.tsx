"use client";

import { Hero } from "@/components/landing/Hero";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { homeData } from "./data";
import * as ROUTES from "@/lib/routes";
import { useSettings } from "@/context/SettingProvider";
import {
  SECTION_CTA,
  CONTAINER_CTA,
  BTN_PRIMARY_CTA,
  H2,
  P_SUBTITLE,
} from "@/lib/theme";

export default function Home() {
  const { lang } = useSettings();
  const content = homeData[lang];

  return (
    <>
      <Hero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        ctaText={content.hero.cta}
        ctaLink={ROUTES.FEATURES}
        ctaSecondaryText={content.hero.ctaSecondary}
        ctaSecondaryLink={ROUTES.EDUCATION}
      />

      <FeaturesGrid
        title={content.featuresPreview.title}
        subtitle={content.featuresPreview.subtitle}
        features={content.featuresPreview.features}
      />

      <section className={SECTION_CTA}>
        <div className={CONTAINER_CTA}>
          <h2 className={H2}>
            {lang === "en"
              ? "Ready to take control of your inventory?"
              : "¿Listo para tomar control de tu inventario?"}
          </h2>
          <p className={P_SUBTITLE}>
            {lang === "en"
              ? "Join thousands of local merchants who trust Bazarmio"
              : "Únete a miles de comerciantes locales que confían en Bazarmio"}
          </p>
          <Button asChild size="lg" className={BTN_PRIMARY_CTA}>
            <Link href={ROUTES.FEATURES}>{content.hero.cta}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
