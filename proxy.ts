import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Lang } from "./lib/types";

export function proxy(request: NextRequest) {
  // Get the locale from cookie or detect from browser
  let locale = request.cookies.get("LOCALE")?.value as Lang | undefined;

  // If no cookie is set, try to detect from Accept-Language header
  if (!locale) {
    const acceptLanguage = request.headers.get("accept-language");
    locale = acceptLanguage?.toLowerCase().includes("es") ? "es" : "en";
  }

  // Ensure locale is valid
  if (locale !== "en" && locale !== "es") {
    locale = "en";
  }

  const response = NextResponse.next();

  // Set the cookie if it doesn't exist
  if (!request.cookies.get("LOCALE")) {
    response.cookies.set("LOCALE", locale, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: "/",
      sameSite: "lax",
    });
  }

  // Add locale to response headers for server components
  response.headers.set("x-locale", locale);

  return response;
}

// Configure which routes use middleware
export const config = {
  matcher: [
    // Match all routes except static files and API routes
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
