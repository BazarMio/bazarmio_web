import type { Lang } from "./types";

// Raw path segments (no locale prefix)
export const HOME = "/";
export const FEATURES = "/features";
export const EDUCATION = "/education";
export const DASHBOARD = "/dashboard";
export const DASHBOARD_LOGIN = "/dashboard/login";
export const DASHBOARD_INVENTORY = "/dashboard/inventory";
export const DASHBOARD_SALES = "/dashboard/sales";
export const DASHBOARD_ACCOUNT = "/dashboard/account";

// Legal Pages
export const TERMS = "/terms-and-conditions";
export const PRIVACY = "/privacy-policy";

// Returns a locale-prefixed path
export function localePath(locale: Lang, path: string): string {
  return `/${locale}${path === "/" ? "" : path}`;
}
