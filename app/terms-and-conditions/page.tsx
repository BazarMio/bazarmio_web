"use client";

import { termsData } from "./data";
import { useSettings } from "@/context/SettingProvider";
import { renderContent } from "@/components/landing/legal-pages/RenderContent";

export default function TermsPage() {
  const { lang } = useSettings();
  const content = termsData[lang];

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-sm text-muted-foreground mb-2">
        {content.effectiveDate}
      </p>
      <h1 className="text-4xl font-bold mb-8">{content.title}</h1>

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

      <p className="text-sm text-muted-foreground mt-12 pt-6 border-t">
        {content.copyright}
      </p>
    </div>
  );
}
