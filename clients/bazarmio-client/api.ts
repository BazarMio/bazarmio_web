import "server-only";

import { refreshSession } from "@/clients/bazarmio-client/auth";
import {
  BazarmioApiError,
  readJsonResponse,
  readTextResponse,
  requestApi,
} from "@/clients/bazarmio-client/http";
import {
  clearSessionTokens,
  getSessionTokens,
} from "@/clients/bazarmio-client/session";

function withAuthorization(init: RequestInit, accessToken: string) {
  const headers = new Headers(init.headers);
  headers.set("Authorization", `Bearer ${accessToken}`);

  return {
    ...init,
    headers,
  };
}

async function getAuthorizedResponse(path: string, init: RequestInit = {}) {
  const session = await getSessionTokens();

  if (!session?.accessToken) {
    throw new BazarmioApiError("Unauthorized", 401);
  }

  let response = await requestApi(path, withAuthorization(init, session.accessToken));

  if (response.status !== 401) {
    return response;
  }

  const refreshed = await refreshSession();

  if (!refreshed?.accessToken) {
    throw new BazarmioApiError("Unauthorized", 401);
  }

  response = await requestApi(path, withAuthorization(init, refreshed.accessToken));

  if (response.status === 401) {
    await clearSessionTokens();
    throw new BazarmioApiError("Unauthorized", 401);
  }

  return response;
}

export async function getAuthedJson<T>(path: string, init: RequestInit = {}) {
  const response = await getAuthorizedResponse(path, init);
  return readJsonResponse<T>(response);
}

export async function getAuthedText(path: string, init: RequestInit = {}) {
  const response = await getAuthorizedResponse(path, init);
  return readTextResponse(response);
}
