"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import type { FaqSection } from "@/app/[locale]/(marketing)/faq/data";

type Props = {
  sections: readonly FaqSection[];
  locale: string;
};

function renderAnswer(text: string) {
  const parts = text.split(/(support@bazarmio\.com)/g);
  return parts.map((part, i) =>
    part === "support@bazarmio.com" ? (
      <a
        key={i}
        href="mailto:support@bazarmio.com"
        className="text-lime underline underline-offset-4 hover:text-lime/80 transition-colors"
      >
        {part}
      </a>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export function FaqAccordions({ sections, locale }: Props) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -55% 0px", threshold: 0 },
    );

    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function scrollToSection(id: string) {
    const el = sectionRefs.current.get(id);
    if (!el) return;
    // lg breakpoint = 1024px; below that the pill nav adds ~49px on top of the 64px main nav
    const offset = window.innerWidth < 1024 ? 148 : 84;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <div>
      {/* Mobile pill nav */}
      <div className="lg:hidden sticky top-16 z-10 -mx-4 sm:-mx-6 px-4 sm:px-6 py-3 bg-[#0f0f0f]/95 backdrop-blur border-b border-white/5 mb-10">
        <div className="flex gap-2 overflow-x-auto pb-0.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "shrink-0 text-xs font-medium px-3.5 py-1.5 rounded-full border transition-colors",
                activeSection === section.id
                  ? "border-lime/40 bg-lime/10 text-lime"
                  : "border-white/10 text-gray-400 hover:text-white hover:border-white/20",
              )}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop: side nav + content */}
      <div className="flex gap-12 xl:gap-16">
        {/* Sticky side nav */}
        <aside className="hidden lg:block w-48 xl:w-52 shrink-0">
          <nav className="sticky top-28 space-y-0.5">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "relative w-full text-left pl-4 pr-3 py-2.5 text-sm font-medium rounded-r-lg transition-colors border-l-2",
                  activeSection === section.id
                    ? "border-lime text-lime bg-lime/5"
                    : "border-transparent text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/20",
                )}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* Sections */}
        <div className="flex-1 min-w-0 space-y-16">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => {
                if (el) sectionRefs.current.set(section.id, el);
              }}
            >
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-lime mb-2">
                  {section.label}
                </p>
                <h2 className="text-2xl font-bold text-white">
                  {section.title}
                </h2>
              </div>

              <Accordion
                type="single"
                collapsible
                className="rounded-xl border border-white/10 overflow-hidden divide-y divide-white/5"
              >
                {section.items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`${section.id}-${i}`}
                    className="border-0 px-5 sm:px-6"
                  >
                    <AccordionTrigger className="text-sm sm:text-base font-medium text-white hover:no-underline py-5 gap-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-sm leading-relaxed text-gray-400">
                      <p>{renderAnswer(item.answer)}</p>
                      {item.learnMore && (
                        <Link
                          href={`/${locale}${item.learnMore.href}`}
                          className="inline-block mt-3 text-lime font-medium hover:text-lime/80 transition-colors underline underline-offset-4"
                        >
                          {item.learnMore.label}
                        </Link>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
