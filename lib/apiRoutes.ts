export const bazarmioApi = {
  auth: {
    login: () => "/api/v1/auth/login",
    logout: () => "/api/v1/auth/logout",
    refresh: () => "/api/v1/auth/refresh",
  },
  users: {
    me: () => "/api/v1/users/me",
  },
  dashboard: {
    bootstrap: () => "/api/v1/dashboard/bootstrap",
    overview: (inventoryId: string) =>
      `/api/v1/dashboard/inventories/${inventoryId}/overview`,
    products: (inventoryId: string) =>
      `/api/v1/dashboard/inventories/${inventoryId}/products`,
    sales: (inventoryId: string) =>
      `/api/v1/dashboard/inventories/${inventoryId}/sales`,
    exportInventoryCsv: (inventoryId: string) =>
      `/api/v1/dashboard/inventories/${inventoryId}/exports/inventory.csv`,
    exportSalesCsv: (inventoryId: string) =>
      `/api/v1/dashboard/inventories/${inventoryId}/exports/sales.csv`,
  },
};

export const nextApi = {
  auth: {
    login: () => "/api/auth/login",
    logout: () => "/api/auth/logout",
    session: () => "/api/auth/session",
  },
  users: {
    me: () => "/api/users/me",
  },
  dashboard: {
    bootstrap: () => "/api/dashboard/bootstrap",
    overview: (inventoryId: string) =>
      `/api/dashboard/inventories/${inventoryId}/overview`,
    products: (inventoryId: string) =>
      `/api/dashboard/inventories/${inventoryId}/products`,
    sales: (inventoryId: string) =>
      `/api/dashboard/inventories/${inventoryId}/sales`,
    exportInventoryCsv: (inventoryId: string) =>
      `/api/dashboard/inventories/${inventoryId}/exports/inventory.csv`,
    exportSalesCsv: (inventoryId: string) =>
      `/api/dashboard/inventories/${inventoryId}/exports/sales.csv`,
  },
};

export function withQuery(path: string, searchParams?: URLSearchParams | string) {
  if (!searchParams) {
    return path;
  }

  const query = typeof searchParams === "string" ? searchParams : searchParams.toString();
  return query ? `${path}?${query}` : path;
}
