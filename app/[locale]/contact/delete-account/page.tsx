import type { Lang } from "@/lib/types";
import { deleteAccountData } from "./data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SECTION,
  CONTAINER_SM,
  CARD_DARK_INTERACTIVE,
  H1_PAGE,
  H3,
  H5,
  P_SUBTITLE,
  P_MUTED,
  A,
} from "@/lib/theme";

type Props = { params: Promise<{ locale: string }> };

export default async function DeleteAccountPage({ params }: Props) {
  const { locale } = await params;
  const lang = (locale === "es" ? "es" : "en") as Lang;
  const content = deleteAccountData[lang];
  const s = content.sections;

  return (
    <section className={SECTION}>
      <div className={CONTAINER_SM}>
        <h1 className={`${H1_PAGE} mb-4`}>{content.title}</h1>
        <p className={`${P_SUBTITLE} mb-10`}>{content.intro}</p>

        {/* What data does BazarMio store */}
        <div className="mb-10">
          <h2 className={`${H3} mb-4`}>{s.dataStorageTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className={CARD_DARK_INTERACTIVE}>
              <CardHeader>
                <CardTitle>{s.freeUsers.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={P_MUTED}>{s.freeUsers.description}</p>
              </CardContent>
            </Card>
            <Card className={CARD_DARK_INTERACTIVE}>
              <CardHeader>
                <CardTitle>{s.premiumUsers.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={P_MUTED}>{s.premiumUsers.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Deletion steps */}
        <div className="mb-10">
          <h2 className={`${H3} mb-6`}>{s.deletionStepsTitle}</h2>

          <div className="mb-6">
            <h3 className={`${H5} mb-3`}>{s.freeSteps.title}</h3>
            <ol className="list-decimal list-inside space-y-2">
              {s.freeSteps.steps.map((step, i) => (
                <li key={i} className={P_MUTED}>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className={`${H5} mb-3`}>{s.premiumSteps.title}</h3>
            <ol className="list-decimal list-inside space-y-2 mb-4">
              {s.premiumSteps.steps.map((step, i) => (
                <li key={i} className={P_MUTED}>
                  {step}
                </li>
              ))}
            </ol>
            <p className={P_MUTED}>
              {s.premiumSteps.emailLabel}{" "}
              <a href={`mailto:${s.premiumSteps.emailAddress}`} className={A}>
                {s.premiumSteps.emailAddress}
              </a>
            </p>
          </div>
        </div>

        {/* Retention */}
        <div className="mb-10">
          <h2 className={`${H3} mb-3`}>{s.retentionTitle}</h2>
          <p className="border-l-4 border-primary pl-4 py-2 text-muted-foreground text-sm leading-relaxed">
            {s.retentionBody}
          </p>
        </div>

        {/* Questions */}
        <div>
          <h2 className={`${H3} mb-2`}>{s.contactTitle}</h2>
          <p className={P_MUTED}>
            {s.contactBody}{" "}
            <a href={`mailto:${s.contactEmail}`} className={A}>
              {s.contactEmail}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
