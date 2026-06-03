import { NextResponse } from "next/server";

import { getAuthedText } from "@/clients/bazarmio-client/api";
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
    const result = await getAuthedText(
      withQuery(bazarmioApi.dashboard.exportInventoryCsv(inventoryId), searchParams),
    );

    return new Response(result.content, {
      status: 200,
      headers: {
        "Content-Type": result.contentType,
        ...(result.disposition ? { "Content-Disposition": result.disposition } : {}),
      },
    });
  } catch (error) {
    return createRouteErrorResponse(error);
  }
}
