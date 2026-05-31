import Link from "next/link";

import { dashboardComponentData } from "@/components/dashboard/data";
import { Button } from "@/components/ui/button";
import type { Lang } from "@/lib/types";
import { cn } from "@/lib/utils";

type PaginationControlsProps = {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
  searchParams: URLSearchParams;
  locale: Lang;
};

type PageToken = number | "ellipsis";

function getVisiblePages(page: number, pageCount: number): PageToken[] {
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  const pages = new Set<number>([1, pageCount, page - 1, page, page + 1]);
  const sorted = Array.from(pages)
    .filter((value) => value >= 1 && value <= pageCount)
    .sort((left, right) => left - right);

  const result: PageToken[] = [];

  for (let index = 0; index < sorted.length; index += 1) {
    const current = sorted[index];
    const previous = sorted[index - 1];

    if (previous != null && current - previous > 1) {
      result.push("ellipsis");
    }

    result.push(current);
  }

  return result;
}

export function PaginationControls({
  page,
  pageCount,
  pageSize,
  total,
  searchParams,
  locale,
}: PaginationControlsProps) {
  const copy = dashboardComponentData[locale].pagination;

  if (pageCount <= 1) {
    return (
      <div className="flex items-center justify-between gap-3 border-t border-white/5 pt-4 text-sm text-gray-400">
        <p>
          {total === 0
            ? copy.noResults
            : total === 1
              ? copy.showingResult
              : copy.showingResults.replace("{count}", String(total))}
        </p>
      </div>
    );
  }

  const start = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);

  function buildHref(nextPage: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(nextPage));
    return `?${params.toString()}`;
  }

  const visiblePages = getVisiblePages(page, pageCount);

  return (
    <div className="flex flex-col gap-4 border-t border-white/5 pt-4 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
      <p>
        {copy.showingRange.replace("{start}", String(start)).replace("{end}", String(end))} <span className="text-white">{copy.of}</span> <span className="text-white">{total}</span> {copy.results}
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className={cn("min-h-0 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white hover:bg-white/10", page <= 1 && "pointer-events-none opacity-40")}
        >
          <Link href={page <= 1 ? "#" : buildHref(page - 1)} aria-disabled={page <= 1}>
            {copy.previous}
          </Link>
        </Button>

        {visiblePages.map((token, index) =>
          token === "ellipsis" ? (
            <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
              ...
            </span>
          ) : (
            <Button
              key={token}
              asChild
              variant="ghost"
              size="sm"
              className={cn(
                "min-h-0 rounded-lg px-3 py-2",
                token === page
                  ? "bg-lime text-black hover:bg-lime/90 hover:text-black"
                  : "border border-white/10 bg-white/5 text-white hover:bg-white/10",
              )}
            >
              <Link href={buildHref(token)}>{token}</Link>
            </Button>
          ),
        )}

        <Button
          asChild
          variant="ghost"
          size="sm"
          className={cn(
            "min-h-0 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white hover:bg-white/10",
            page >= pageCount && "pointer-events-none opacity-40",
          )}
        >
          <Link href={page >= pageCount ? "#" : buildHref(page + 1)} aria-disabled={page >= pageCount}>
            {copy.next}
          </Link>
        </Button>
      </div>
    </div>
  );
}
