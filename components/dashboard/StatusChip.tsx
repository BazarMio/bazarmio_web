import { cn } from "@/lib/utils";
import type { StatusTone } from "@/lib/chip-status";

type StatusChipProps = {
  label: string;
  tone: StatusTone;
};

const toneClassName: Record<StatusChipProps["tone"], string> = {
  success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  danger: "border-red-500/30 bg-red-500/10 text-red-300",
  warning: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  neutral: "border-white/10 bg-white/5 text-gray-300",
};

export function StatusChip({ label, tone }: StatusChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium leading-none",
        toneClassName[tone],
      )}
    >
      {label}
    </span>
  );
}
