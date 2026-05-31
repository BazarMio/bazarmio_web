import type { Lang } from "@/lib/types";

export type DashboardComponentData = {
  exportButton: {
    preparing: string;
  };
  pagination: {
    noResults: string;
    showingResult: string;
    showingResults: string;
    showingRange: string;
    of: string;
    results: string;
    previous: string;
    next: string;
  };
};

export const dashboardComponentData: Record<Lang, DashboardComponentData> = {
  en: {
    exportButton: {
      preparing: "Preparing...",
    },
    pagination: {
      noResults: "No results",
      showingResult: "Showing 1 result",
      showingResults: "Showing {count} results",
      showingRange: "Showing {start} to {end}",
      of: "of",
      results: "results",
      previous: "Previous",
      next: "Next",
    },
  },
  es: {
    exportButton: {
      preparing: "Preparando...",
    },
    pagination: {
      noResults: "Sin resultados",
      showingResult: "Mostrando 1 resultado",
      showingResults: "Mostrando {count} resultados",
      showingRange: "Mostrando {start} a {end}",
      of: "de",
      results: "resultados",
      previous: "Anterior",
      next: "Siguiente",
    },
  },
};
