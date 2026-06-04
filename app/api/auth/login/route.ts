import { NextResponse } from "next/server";

import { login } from "@/clients/bazarmio-client/auth";
import { createRouteErrorResponse } from "@/clients/bazarmio-client/http";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      phoneNumber?: unknown;
      pin?: unknown;
    };

    if (typeof body.phoneNumber !== "string" || typeof body.pin !== "string") {
      return NextResponse.json(
        {
          status: "error",
          statusCode: 400,
          message: "phoneNumber and pin are required",
          timestamp: new Date().toISOString(),
        },
        { status: 400 },
      );
    }

    const result = await login(body.phoneNumber, body.pin);

    return NextResponse.json({
      status: "success",
      data: result,
    });
  } catch (error) {
    return createRouteErrorResponse(error);
  }
}
