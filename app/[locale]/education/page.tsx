import { Hero } from "@/components/landing/Hero";
import { EducationSection } from "@/components/landing/EducationSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { educationData } from "./data";
import type { Lang } from "@/lib/types";
import {
  SECTION_CTA,
  CONTAINER_CTA,
  BTN_PRIMARY_CTA,
  H2,
  P_SUBTITLE,
} from "@/lib/theme";

type Props = { params: Promise<{ locale: string }> };

export default async function EducationPage({ params }: Props) {
  const { locale } = await params;
  const lang = (locale === "es" ? "es" : "en") as Lang;
  const content = educationData[lang];

  return (
    <>
      <Hero title={content.hero.title} subtitle={content.hero.subtitle} />

      <section className="px-4 py-12 md:py-20">
        <EducationSection sections={content.sections} />
      </section>

      <section className={SECTION_CTA}>
        <div className={CONTAINER_CTA}>
          <h2 className={H2}>{content.cta.title}</h2>
          <p className={P_SUBTITLE}>{content.cta.subtitle}</p>
          <Button asChild size="lg" className={BTN_PRIMARY_CTA}>
            <Link href="mailto:support@bazarmio.com">{content.cta.button}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
