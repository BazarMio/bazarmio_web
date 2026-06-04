import { redirect } from "next/navigation";

import { getAuthedJson } from "@/clients/bazarmio-client/api";
import {
  clearSessionTokens,
  hasSessionTokens,
} from "@/clients/bazarmio-client/session";
import { BazarmioApiError } from "@/clients/bazarmio-client/http";
import { LoginForm } from "@/components/dashboard/LoginForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { bazarmioApi } from "@/lib/apiRoutes";
import { DASHBOARD, localePath } from "@/lib/routes";
import type { GetMeResponse, Lang } from "@/lib/types";

import { dashboardLoginData } from "./data";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function DashboardLoginPage({ params }: Props) {
  const { locale } = await params;
  const lang = (locale === "es" ? "es" : "en") as Lang;
  const data = dashboardLoginData[lang];

  if (await hasSessionTokens()) {
    try {
      await getAuthedJson<GetMeResponse>(bazarmioApi.users.me());
      redirect(localePath(lang, DASHBOARD));
    } catch (error) {
      if (error instanceof BazarmioApiError && error.statusCode === 401) {
        await clearSessionTokens();
      } else {
        throw error;
      }
    }
  }

  return (
    <main className="flex min-h-[calc(100vh-73px)] items-center justify-center px-4 py-10">
      <Card className="w-full max-w-md border-white/10 bg-[#121212] text-white shadow-2xl shadow-black/20">
        <CardHeader className="space-y-4 text-center">
          <div className="space-y-2">
            <CardTitle className="text-2xl">{data.title}</CardTitle>
            <p className="text-sm text-gray-400">{data.subtitle}</p>
          </div>
        </CardHeader>
        <CardContent>
          <LoginForm locale={lang} data={data} />
        </CardContent>
      </Card>
    </main>
  );
}
