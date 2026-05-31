import { logout } from "@/clients/bazarmio-client/auth";
import { createRouteErrorResponse } from "@/clients/bazarmio-client/http";

export async function POST() {
  try {
    await logout();
    return new Response(null, { status: 204 });
  } catch (error) {
    return createRouteErrorResponse(error);
  }
}
