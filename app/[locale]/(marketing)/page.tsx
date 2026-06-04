import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { FaqTeaser } from "@/components/landing/FaqTeaser";
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
import { GOOGLE_PLAY_URL } from "@/lib/routes";

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
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        ctaText={content.hero.cta}
        ctaLink={GOOGLE_PLAY_URL}
        ctaExternal
        ctaSecondaryText={content.hero.ctaSecondary}
        ctaSecondaryLink={`/${lang}/features`}
        showGooglePlayBadge
        image={content.hero.image}
        //when IOS is ready to launch, we can uncomment the line below to show the Apple Store badge
        //showAppleStoreBadge
      />

      <TrustBar items={content.trustBar} />

      <HowItWorks title={content.howItWorks.title} steps={content.howItWorks.steps} />

      <FeaturesGrid
        title={content.featuresPreview.title}
        subtitle={content.featuresPreview.subtitle}
        features={content.featuresPreview.features}
      />

      <FaqTeaser
        title={content.faqTeaser.title}
        ctaText={content.faqTeaser.ctaText}
        items={content.faqTeaser.items}
        locale={lang}
      />

      <section className={SECTION_CTA}>
        <div className={CONTAINER_CTA}>
          <h2 className={H2}>{content.bottomCTA.title}</h2>
          <p className={P_SUBTITLE}>{content.bottomCTA.subtitle}</p>
          <Button asChild size="lg" className={BTN_PRIMARY_CTA}>
            <Link href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">{content.hero.cta}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
