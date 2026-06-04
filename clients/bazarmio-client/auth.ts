import "server-only";

import {
  clearSessionTokens,
  getSessionTokens,
  setSessionTokens,
} from "@/clients/bazarmio-client/session";
import {
  BazarmioApiError,
  readJsonResponse,
  requestApi,
} from "@/clients/bazarmio-client/http";
import { bazarmioApi } from "@/lib/apiRoutes";

type AuthUser = {
  id: string;
  phoneNumber: string;
  subscriptionTier: string;
};

type LoginResponse = {
  user: AuthUser;
  accessToken: string;
  refreshToken: string;
};

type RefreshResponse = {
  accessToken: string;
  refreshToken: string;
};

export async function login(phoneNumber: string, pin: string) {
  const response = await requestApi(bazarmioApi.auth.login(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phoneNumber, pin }),
  });

  const result = await readJsonResponse<LoginResponse>(response);
  await setSessionTokens({
    accessToken: result.accessToken,
    refreshToken: result.refreshToken,
  });

  return {
    user: result.user,
  };
}

export async function refreshSession() {
  const session = await getSessionTokens();

  if (!session?.refreshToken) {
    await clearSessionTokens();
    return null;
  }

  try {
    const response = await requestApi(bazarmioApi.auth.refresh(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken: session.refreshToken }),
    });

    const result = await readJsonResponse<RefreshResponse>(response);
    await setSessionTokens(result);
    return result;
  } catch (error) {
    if (error instanceof BazarmioApiError && error.statusCode === 401) {
      await clearSessionTokens();
      return null;
    }

    throw error;
  }
}

export async function logout() {
  const session = await getSessionTokens();

  try {
    if (session?.refreshToken) {
      const response = await requestApi(bazarmioApi.auth.logout(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken: session.refreshToken }),
      });

      if (!response.ok && response.status !== 401) {
        await readJsonResponse(response);
      }
    }
  } finally {
    await clearSessionTokens();
  }
}
