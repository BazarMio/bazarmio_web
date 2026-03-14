import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Lang } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLocale(locale: string | undefined): Lang {
  if (locale && isValidLocale(locale)) return locale;
  return DEFAULT_LOCALE;
}
function isValidLocale(locale: string) {
  throw new Error("Function not implemented.");
}

