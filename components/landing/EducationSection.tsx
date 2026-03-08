import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { CONTAINER_MD, CARD_DARKER_INTERACTIVE } from "@/lib/theme";

interface Article {
  title: string;
  description: string;
  duration: string;
}

interface Section {
  id: string;
  title: string;
  articles: readonly Article[];
}

interface EducationSectionProps {
  sections: readonly Section[];
}

export function EducationSection({ sections }: EducationSectionProps) {
  return (
    <div className={CONTAINER_MD}>
      <Accordion type="single" collapsible className="space-y-4">
        {sections.map((section) => (
          <AccordionItem 
            key={section.id} 
            value={section.id}
            className="border border-gray-800 rounded-lg bg-[--bazarmio-darker] overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-4 hover:bg-[--bazarmio-dark] transition-colors text-white text-xl font-semibold hover:no-underline">
              {section.title}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <div className="space-y-3 pt-2">
                {section.articles.map((article, idx) => (
                  <Card 
                    key={idx}
                    className={`${CARD_DARKER_INTERACTIVE} cursor-pointer group`}
                  >
                    <CardHeader className="p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-white mb-2 group-hover:text-lime transition-colors">
                            {article.title}
                          </CardTitle>
                          <CardDescription className="text-gray-400 text-sm leading-relaxed">
                            {article.description}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 whitespace-nowrap">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{article.duration}</span>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
