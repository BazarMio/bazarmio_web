import { NextResponse } from "next/server";

import { getAuthedJson } from "@/clients/bazarmio-client/api";
import { createRouteErrorResponse } from "@/clients/bazarmio-client/http";
import { bazarmioApi } from "@/lib/apiRoutes";

export async function GET() {
  try {
    const result = await getAuthedJson(bazarmioApi.dashboard.bootstrap());

    return NextResponse.json({
      status: "success",
      data: result,
    });
  } catch (error) {
    return createRouteErrorResponse(error);
  }
}
