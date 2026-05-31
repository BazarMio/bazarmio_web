import { privacyPolicyData } from "./data";
import { renderContent } from "@/components/landing/legal-pages/RenderContent";
import type { Lang } from "@/lib/types";

type Props = { params: Promise<{ locale: string }> };

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  const lang = (locale === "es" ? "es" : "en") as Lang;
  const content = privacyPolicyData[lang];

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-sm text-muted-foreground mb-2">
        {content.effectiveDate}
      </p>
      <h1 className="text-4xl font-bold mb-6">{content.title}</h1>

      <p className="text-muted-foreground mb-4">{content.intro}</p>

      <p className="border-l-4 border-primary pl-4 py-2 mb-8 font-medium">
        {content.corePrinciple}
      </p>

      {content.sections.map((section, i) => (
        <section key={i} className="mb-8">
          <h2 className="text-xl font-semibold mb-3">{section.title}</h2>

          {renderContent(section.content)}

          {section.subsections?.map((sub, j) => (
            <div key={j} className="mt-4 ml-2">
              <h3 className="text-base font-semibold mb-2">{sub.title}</h3>
              {renderContent(sub.content)}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
