import "server-only";

import { cookies } from "next/headers";

const ACCESS_COOKIE_NAME = "bm_access";
const REFRESH_COOKIE_NAME = "bm_refresh";
const ACCESS_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const REFRESH_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

export type SessionTokens = {
  accessToken: string;
  refreshToken: string;
};

function getCookieOptions(maxAge: number) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge,
  };
}

export async function getSessionTokens(): Promise<SessionTokens | null> {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(ACCESS_COOKIE_NAME)?.value;
  const refreshToken = cookieStore.get(REFRESH_COOKIE_NAME)?.value;

  if (!accessToken || !refreshToken) {
    return null;
  }

  return { accessToken, refreshToken };
}

export async function setSessionTokens(tokens: SessionTokens) {
  const cookieStore = await cookies();

  cookieStore.set(
    ACCESS_COOKIE_NAME,
    tokens.accessToken,
    getCookieOptions(ACCESS_COOKIE_MAX_AGE),
  );

  cookieStore.set(
    REFRESH_COOKIE_NAME,
    tokens.refreshToken,
    getCookieOptions(REFRESH_COOKIE_MAX_AGE),
  );
}

export async function clearSessionTokens() {
  const cookieStore = await cookies();

  cookieStore.set(ACCESS_COOKIE_NAME, "", {
    ...getCookieOptions(0),
    expires: new Date(0),
  });

  cookieStore.set(REFRESH_COOKIE_NAME, "", {
    ...getCookieOptions(0),
    expires: new Date(0),
  });
}

export async function hasSessionTokens() {
  return (await getSessionTokens()) != null;
}
