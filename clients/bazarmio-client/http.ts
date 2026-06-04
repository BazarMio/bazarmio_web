import "server-only";

import { NextResponse } from "next/server";

type ApiSuccessEnvelope<T> = {
  status: "success";
  data: T;
};

type ApiErrorEnvelope = {
  status?: "error";
  statusCode?: number;
  message?: string;
  errors?: unknown[];
};

export class BazarmioApiError extends Error {
  statusCode: number;
  errors?: unknown[];

  constructor(message: string, statusCode: number, errors?: unknown[]) {
    super(message);
    this.name = "BazarmioApiError";
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

function getApiBaseUrl() {
  const baseUrl = process.env.BAZARMIO_API_URL;

  if (!baseUrl) {
    throw new Error("Missing BAZARMIO_API_URL environment variable");
  }

  return baseUrl;
}

function getRequestUrl(path: string) {
  return new URL(path, getApiBaseUrl()).toString();
}

export async function requestApi(path: string, init: RequestInit = {}) {
  const headers = new Headers(init.headers);

  if (!headers.has("Accept")) {
    headers.set("Accept", "application/json");
  }

  return fetch(getRequestUrl(path), {
    ...init,
    headers,
    cache: "no-store",
  });
}

async function parseApiError(response: Response) {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const payload = (await response.json()) as ApiErrorEnvelope;
    throw new BazarmioApiError(
      payload.message || `API request failed with status ${response.status}`,
      payload.statusCode || response.status,
      payload.errors,
    );
  }

  const message = (await response.text()) || `API request failed with status ${response.status}`;
  throw new BazarmioApiError(message, response.status);
}

export async function readJsonResponse<T>(response: Response) {
  if (!response.ok) {
    await parseApiError(response);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  const payload = (await response.json()) as ApiSuccessEnvelope<T>;
  return payload.data;
}

export async function readTextResponse(response: Response) {
  if (!response.ok) {
    await parseApiError(response);
  }

  return {
    content: await response.text(),
    contentType: response.headers.get("content-type") || "text/plain; charset=utf-8",
    disposition: response.headers.get("content-disposition"),
  };
}

export function createRouteErrorResponse(error: unknown) {
  if (error instanceof BazarmioApiError) {
    return NextResponse.json(
      {
        status: "error",
        statusCode: error.statusCode,
        message: error.message,
        errors: error.errors,
        timestamp: new Date().toISOString(),
      },
      { status: error.statusCode },
    );
  }

  const message = error instanceof Error ? error.message : "Internal server error";

  return NextResponse.json(
    {
      status: "error",
      statusCode: 500,
      message,
      timestamp: new Date().toISOString(),
    },
    { status: 500 },
  );
}
