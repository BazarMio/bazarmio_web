import { NextResponse } from "next/server";

import { getAuthedJson } from "@/clients/bazarmio-client/api";
import { createRouteErrorResponse } from "@/clients/bazarmio-client/http";
import { bazarmioApi, withQuery } from "@/lib/apiRoutes";

type RouteContext = {
  params: Promise<{
    inventoryId: string;
  }>;
};

export async function GET(request: Request, context: RouteContext) {
  try {
    const { inventoryId } = await context.params;

    if (!inventoryId || !/^[a-zA-Z0-9_-]+$/.test(inventoryId)) {
      return NextResponse.json({ error: "Invalid inventory ID" }, { status: 400 });
    }

    const searchParams = new URL(request.url).searchParams;
    const result = await getAuthedJson(
      withQuery(bazarmioApi.dashboard.overview(inventoryId), searchParams),
    );

    return NextResponse.json({
      status: "success",
      data: result,
    });
  } catch (error) {
    return createRouteErrorResponse(error);
  }
}
