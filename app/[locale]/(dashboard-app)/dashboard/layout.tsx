import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { clearSessionTokens } from "@/clients/bazarmio-client/session";
import { BazarmioApiError } from "@/clients/bazarmio-client/http";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { DASHBOARD_LOGIN, localePath } from "@/lib/routes";
import type { Lang } from "@/lib/types";

import { dashboardShellData } from "./data";
import { getDashboardBootstrap } from "./utils";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: "BazarMio Dashboard",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function DashboardLayout({ children, params }: Props) {
  const { locale } = await params;
  const lang = (locale === "es" ? "es" : "en") as Lang;
  let bootstrap;

  try {
    bootstrap = await getDashboardBootstrap();
  } catch (error) {
    if (error instanceof BazarmioApiError && error.statusCode === 401) {
      await clearSessionTokens();
      redirect(localePath(lang, DASHBOARD_LOGIN));
    }

    throw error;
  }

  return (
    <DashboardShell locale={lang} bootstrap={bootstrap} data={dashboardShellData[lang]}>
      {children}
    </DashboardShell>
  );
}
