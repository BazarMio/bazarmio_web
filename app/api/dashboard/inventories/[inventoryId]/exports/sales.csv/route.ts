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
    const searchParams = new URL(request.url).searchParams;
    const result = await getAuthedText(
      withQuery(bazarmioApi.dashboard.exportSalesCsv(inventoryId), searchParams),
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
