import Image from "next/image";
import { SECTION, CONTAINER_LG, SECTION_HEADER_MARGIN, H2, H5, P_MUTED } from "@/lib/theme";

export interface HowItWorksStep {
  title: string;
  description: string;
}

interface HowItWorksProps {
  title: string;
  steps: readonly HowItWorksStep[];
}

function Step({ step, index }: { step: HowItWorksStep; index: number }) {
  return (
    <div className="flex flex-col items-center text-center gap-4 w-48 xl:w-56">
      <div className="w-12 h-12 rounded-full border border-lime bg-[--bazarmio-darker] flex items-center justify-center shrink-0">
        <span className="text-lg font-bold text-white">{index + 1}</span>
      </div>
      <div className="space-y-2">
        <h3 className={H5}>{step.title}</h3>
        <p className={P_MUTED}>{step.description}</p>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="shrink-0 w-16 xl:w-20 pt-2">
      <Image
        src="/design-utils/right-arrow.svg"
        alt=""
        width={80}
        height={80}
        className="w-full h-auto"
      />
    </div>
  );
}

export function HowItWorks({ title, steps }: HowItWorksProps) {
  const pairs = [
    [0, 1],
    [2, 3],
  ] as const;

  return (
    <section className={SECTION}>
      <div className={CONTAINER_LG}>
        <div className={`text-center ${SECTION_HEADER_MARGIN}`}>
          <h2 className={`${H2} mb-4`}>{title}</h2>
        </div>

        {/* Desktop — single row with arrows between all steps */}
        <div className="hidden lg:flex items-start justify-center">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start">
              <Step step={step} index={i} />
              {i < steps.length - 1 && <Arrow />}
            </div>
          ))}
        </div>

        {/* Tablet — two rows of pairs with an arrow between each pair */}
        <div className="hidden md:flex lg:hidden flex-col items-center gap-12">
          {pairs.map(([a, b]) => (
            <div key={a} className="flex items-start">
              <Step step={steps[a]} index={a} />
              <Arrow />
              <Step step={steps[b]} index={b} />
            </div>
          ))}
        </div>

        {/* Mobile — single column, no arrows */}
        <div className="md:hidden flex flex-col items-center gap-12">
          {steps.map((step, i) => (
            <Step key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
