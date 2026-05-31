import { cache } from "react";

import { getAuthedJson } from "@/clients/bazarmio-client/api";
import { bazarmioApi } from "@/lib/apiRoutes";
import type { DashboardBootstrap, GetMeResponse } from "@/lib/types";

export const getDashboardBootstrap = cache(async () => {
  return getAuthedJson<DashboardBootstrap>(bazarmioApi.dashboard.bootstrap());
});

export function resolveSelectedInventoryId(
  bootstrap: DashboardBootstrap,
  inventoryId?: string | string[],
) {
  const requestedInventoryId = Array.isArray(inventoryId) ? inventoryId[0] : inventoryId;
  const exists = bootstrap.inventories.some((inventory) => inventory.id === requestedInventoryId);

  if (requestedInventoryId && exists) {
    return requestedInventoryId;
  }

  return bootstrap.selectedInventoryId ?? bootstrap.inventories[0]?.id ?? null;
}

export function getScalarSearchParam(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

export function toApiDateRange(date: string, endOfDay: boolean) {
  return `${date}T${endOfDay ? "23:59:59.999" : "00:00:00.000"}Z`;
}

export function parsePositiveInt(value: string | undefined, fallback: number) {
  const parsed = Number.parseInt(value || "", 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export function toUrlSearchParams(params: Record<string, string | string[] | undefined>) {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        searchParams.append(key, item);
      }
      continue;
    }

    if (typeof value === "string") {
      searchParams.set(key, value);
    }
  }

  return searchParams;
}

export function getExportSearchParams(searchParams: URLSearchParams) {
  const exportSearchParams = new URLSearchParams(searchParams.toString());

  exportSearchParams.delete("page");
  exportSearchParams.delete("pageSize");
  exportSearchParams.delete("inventory");

  return exportSearchParams;
}

export async function getDashboardUserProfile() {
  return getAuthedJson<GetMeResponse>(bazarmioApi.users.me());
}
