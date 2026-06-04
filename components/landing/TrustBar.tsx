import { Check } from "lucide-react";

interface TrustBarProps {
  items: readonly string[];
}

export function TrustBar({ items }: TrustBarProps) {
  const looped = [...items, ...items];

  return (
    <div className=" bg-[--bazarmio-darker] py-4">
      <div
        className="max-w-3xl mx-auto overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <ul className="flex w-max animate-marquee will-change-transform hover:[animation-play-state:paused]">
          {looped.map((item, i) => (
            <li
              key={i}
              className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/5 px-4 py-1.5 text-xs font-medium tracking-wide text-lime shrink-0 whitespace-nowrap mx-3"
            >
              <Check className="w-3 h-3 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
