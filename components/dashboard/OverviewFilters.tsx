"use client";

import Link from "next/link";
import { useState } from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type OverviewFiltersProps = {
  action: string;
  inventoryId: string;
  values: {
    startDate: string;
    endDate: string;
  };
  resetHref: string;
  data: {
    startDate: string;
    endDate: string;
    apply: string;
    reset: string;
  };
};

export function OverviewFilters({ action, inventoryId, values, resetHref, data }: OverviewFiltersProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form
      action={action}
      method="get"
      className="flex flex-wrap items-center justify-end gap-2"
      onSubmit={() => setIsSubmitting(true)}
    >
      <input type="hidden" name="inventory" value={inventoryId} />

      <label htmlFor="overview-start-date" className="sr-only">
        {data.startDate}
      </label>
      <Input
        id="overview-start-date"
        name="startDate"
        type="date"
        defaultValue={values.startDate}
        className="h-9 border-white/10 bg-white/5 text-white sm:w-[150px]"
      />

      <label htmlFor="overview-end-date" className="sr-only">
        {data.endDate}
      </label>
      <Input
        id="overview-end-date"
        name="endDate"
        type="date"
        defaultValue={values.endDate}
        className="h-9 border-white/10 bg-white/5 text-white sm:w-[150px]"
      />

      <Button
        type="submit"
        size="sm"
        disabled={isSubmitting}
        className="min-h-0 rounded-lg px-3 py-2"
      >
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : data.apply}
      </Button>
      <Button
        asChild
        type="button"
        variant="ghost"
        size="sm"
        className="min-h-0 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white hover:bg-white/10 hover:text-white"
      >
        <Link href={resetHref}>{data.reset}</Link>
      </Button>
    </form>
  );
}
