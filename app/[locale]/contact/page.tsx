import Link from "next/link";
import type { Lang } from "@/lib/types";
import { contactData } from "./data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SECTION,
  CONTAINER_SM,
  CARD_DARK_INTERACTIVE,
  H1_PAGE,
  P_SUBTITLE,
  H6,
  A,
  P_MUTED,
  P_STRONG,
} from "@/lib/theme";

type Props = { params: Promise<{ locale: string }> };

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const lang = (locale === "es" ? "es" : "en") as Lang;
  const content = contactData[lang];

  return (
    <section className={SECTION}>
      <div className={CONTAINER_SM}>
        <h1 className={`${H1_PAGE} mb-4`}>{content.title}</h1>
        <p className={`${P_SUBTITLE} mb-10`}>{content.intro}</p>

        <Card className={`${CARD_DARK_INTERACTIVE} mb-10`}>
          <CardHeader>
            <p className={H6}>{content.contactLabel}</p>
            <CardTitle>
              <a href={`mailto:${content.email}`} className={A}>
                {content.email}
              </a>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className={P_MUTED}>{content.emailDescription}</p>
          </CardContent>
        </Card>

        <div className="border-l-4 border-primary pl-5 py-3">
          <p className={`${P_STRONG} mb-1`}>{content.deleteAccountLabel}</p>
          <p className={`${P_MUTED} mb-2`}>
            {content.deleteAccountDescription}
          </p>
          <Link href={`/${locale}/contact/delete-account`} className={A}>
            {content.deleteAccountLink}
          </Link>
        </div>
      </div>
    </section>
  );
}
