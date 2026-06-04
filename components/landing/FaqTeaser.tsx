"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ, localePath } from "@/lib/routes";
import { SECTION, CONTAINER_MD, H2 } from "@/lib/theme";
import type { Lang } from "@/lib/types";

type FaqTeaserItem = {
  question: string;
  answer: string;
};

type Props = {
  title: string;
  ctaText: string;
  items: readonly FaqTeaserItem[];
  locale: Lang;
};

export function FaqTeaser({ title, ctaText, items, locale }: Props) {
  return (
    <section className={SECTION}>
      <div className={CONTAINER_MD}>
        <h2 className={`${H2} text-center mb-10`}>{title}</h2>
        <Accordion
          type="single"
          collapsible
          className="rounded-xl border border-white/10 overflow-hidden divide-y divide-white/5"
        >
          {items.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-teaser-${i}`}
              className="border-0 px-5 sm:px-6"
            >
              <AccordionTrigger className="text-sm sm:text-base font-medium text-white hover:no-underline py-5 gap-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-gray-400">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-8">
          <Link
            href={localePath(locale, FAQ)}
            className="text-lime font-medium hover:text-lime/80 transition-colors underline underline-offset-4"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
