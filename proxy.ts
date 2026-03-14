import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { Lang } from "./lib/types";

const locales: Lang[] = ["en", "es"];
const defaultLocale: Lang = "en";

function getLocale(request: NextRequest): Lang {
  // Cookie takes priority (explicit user choice)
  const cookieLocale = request.cookies.get("LOCALE")?.value as Lang | undefined;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // Fall back to Accept-Language header
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage?.toLowerCase().includes("es")) {
    return "es";
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a valid locale prefix
  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    // Sync cookie with the locale in the URL
    const urlLocale = pathname.split("/")[1] as Lang;
    const response = NextResponse.next();
    response.cookies.set("LOCALE", urlLocale, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      sameSite: "lax",
    });
    response.headers.set("x-locale", urlLocale);
    return response;
  }

  // Redirect to locale-prefixed path
  const locale = getLocale(request);
  const newUrl = request.nextUrl.clone();
  newUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(newUrl);
  response.cookies.set("LOCALE", locale, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
