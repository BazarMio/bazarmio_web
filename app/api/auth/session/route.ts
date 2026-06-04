import { NextResponse } from "next/server";

import { getAuthedJson } from "@/clients/bazarmio-client/api";
import {
  BazarmioApiError,
  createRouteErrorResponse,
} from "@/clients/bazarmio-client/http";
import {
  clearSessionTokens,
  hasSessionTokens,
} from "@/clients/bazarmio-client/session";
import { bazarmioApi } from "@/lib/apiRoutes";

type UserProfile = {
  id: string;
  updatedAt: string;
  phoneNumber: string;
  fullName: string;
  email: string | null;
  locale: "en" | "es";
  businessName: string | null;
  subscriptionTier: string;
  subscriptionStatus: string;
  subscriptionStartedAt: string | null;
  subscriptionExpiresAt: string | null;
  maxInventories: number;
  analyticsRangeDays: number;
  syncEnabled: boolean;
};

type GetMeResponse = {
  user: UserProfile;
};

export async function GET() {
  try {
    if (!(await hasSessionTokens())) {
      return NextResponse.json({
        status: "success",
        data: {
          authenticated: false,
          user: null,
        },
      });
    }

    const result = await getAuthedJson<GetMeResponse>(bazarmioApi.users.me());

    return NextResponse.json({
      status: "success",
      data: {
        authenticated: true,
        user: result.user,
      },
    });
  } catch (error) {
    if (error instanceof BazarmioApiError && error.statusCode === 401) {
      await clearSessionTokens();

      return NextResponse.json({
        status: "success",
        data: {
          authenticated: false,
          user: null,
        },
      });
    }

    return createRouteErrorResponse(error);
  }
}
