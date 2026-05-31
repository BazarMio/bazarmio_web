"use client";

import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type InfoTooltipProps = {
  content: string;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  offset?: number;
};

export function InfoTooltip({
  content,
  side = "top",
  align = "center",
  offset = -5,
}: InfoTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          aria-label={content}
          className="inline-flex min-h-0 min-w-5 items-center justify-center rounded-sm text-gray-500 transition-colors hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
        >
          <Info className="size-3.5" />
        </button>
      </TooltipTrigger>
      <TooltipContent
        side={side}
        align={align}
        sideOffset={offset}
        className="z-[60] max-w-56 rounded-lg border border-white/10 bg-[#111111] px-3 py-2 text-xs font-normal leading-5 text-gray-200 shadow-xl"
      >
        {content}
      </TooltipContent>
    </Tooltip>
  );
}
