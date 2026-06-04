"use client";

import { useEffect, useState } from "react";
import { FileDown } from "lucide-react";

import { dashboardComponentData } from "@/components/dashboard/data";
import { Button } from "@/components/ui/button";
import type { Lang } from "@/lib/types";

type ExportButtonProps = {
  href: string;
  label: string;
  locale: Lang;
};

export function ExportButton({ href, label, locale }: ExportButtonProps) {
  const [isPreparing, setIsPreparing] = useState(false);
  const copy = dashboardComponentData[locale].exportButton;

  useEffect(() => {
    if (!isPreparing) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsPreparing(false);
    }, 2200);

    return () => window.clearTimeout(timeoutId);
  }, [isPreparing]);

  return (
    <Button
      asChild
      type="button"
      variant="ghost"
      size="sm"
      className="min-h-0 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white hover:bg-white/10 hover:text-white"
    >
      <a href={href} onClick={() => setIsPreparing(true)}>
        <FileDown className="size-4" />
        <span>{isPreparing ? copy.preparing : label}</span>
      </a>
    </Button>
  );
}
