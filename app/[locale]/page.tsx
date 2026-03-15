import { Hero } from "@/components/landing/Hero";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { homeData, homeMetadata } from "@/app/data";
import { getHomeJsonLd } from "@/lib/jsonld";
import type { Lang } from "@/lib/types";
import {
  SECTION_CTA,
  CONTAINER_CTA,
  BTN_PRIMARY_CTA,
  H2,
  P_SUBTITLE,
} from "@/lib/theme";

type Props = { params: Promise<{ locale: string }> };

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const lang = (locale === "es" ? "es" : "en") as Lang;
  const content = homeData[lang];
  const meta = homeMetadata[lang];
  const jsonLd = getHomeJsonLd({
    locale,
    pageTitle: meta.title,
    pageDescription: meta.description,
    appDescription: content.hero.subtitle,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        ctaText={content.hero.cta}
        ctaLink={`/${lang}/features`}
        ctaSecondaryText={content.hero.ctaSecondary}
        ctaSecondaryLink={`/${lang}/features`}
        showGooglePlayBadge
        //when IOS is ready to launch, we can uncomment the line below to show the Apple Store badge
        //showAppleStoreBadge
      />

      <FeaturesGrid
        title={content.featuresPreview.title}
        subtitle={content.featuresPreview.subtitle}
        features={content.featuresPreview.features}
      />

      <section className={SECTION_CTA}>
        <div className={CONTAINER_CTA}>
          <h2 className={H2}>{content.bottomCTA.title}</h2>
          <p className={P_SUBTITLE}>{content.bottomCTA.subtitle}</p>
          <Button asChild size="lg" className={BTN_PRIMARY_CTA}>
            <Link href={`/${lang}/features`}>{content.hero.cta}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
