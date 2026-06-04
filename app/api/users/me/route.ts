import { NextResponse } from "next/server";

import { getAuthedJson } from "@/clients/bazarmio-client/api";
import { createRouteErrorResponse } from "@/clients/bazarmio-client/http";
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

type UpdateMeInput = {
  fullName?: string;
  email?: string;
  locale?: "en" | "es";
  businessName?: string;
  syncEnabled?: boolean;
};

export async function GET() {
  try {
    const result = await getAuthedJson<GetMeResponse>(bazarmioApi.users.me());

    return NextResponse.json({
      status: "success",
      data: result,
    });
  } catch (error) {
    return createRouteErrorResponse(error);
  }
}

export async function PATCH(request: Request) {
  try {
    const body = (await request.json()) as UpdateMeInput;

    const result = await getAuthedJson<GetMeResponse>(bazarmioApi.users.me(), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return NextResponse.json({
      status: "success",
      data: result,
    });
  } catch (error) {
    return createRouteErrorResponse(error);
  }
}
