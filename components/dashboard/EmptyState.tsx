import { AlertCircle } from "lucide-react";

import { cn } from "@/lib/utils";

type EmptyStateProps = {
  title: string;
  description?: string;
  className?: string;
};

export function EmptyState({ title, description, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/[0.03] px-6 py-10 text-center",
        className,
      )}
    >
      <div className="mb-3 rounded-full border border-white/10 bg-white/5 p-3 text-gray-300">
        <AlertCircle className="size-5" />
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      {description && (
        <p className="mt-2 max-w-md text-sm text-gray-400">{description}</p>
      )}
    </div>
  );
}
