import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { Lang } from "@/lib/types";

import { dashboardAccountData } from "./data";
import { getDashboardBootstrap, getDashboardUserProfile } from "../utils";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function DashboardAccountPage({ params }: Props) {
  const { locale } = await params;
  const lang: Lang = locale === "es" ? "es" : "en";
  const data = dashboardAccountData[lang];
  const [bootstrap, profile] = await Promise.all([
    getDashboardBootstrap(),
    getDashboardUserProfile(),
  ]);

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)]">
      <Card className="border-white/10 bg-white/5 text-white">
        <CardHeader>
          <CardTitle>{data.profile.title}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2 sm:col-span-2">
            <label className="text-sm font-medium text-white">{data.profile.fullName}</label>
            <Input value={profile.user.fullName} readOnly className="border-white/10 bg-white/5 text-white" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">{data.profile.phoneNumber}</label>
            <Input value={profile.user.phoneNumber} readOnly className="border-white/10 bg-white/5 text-white" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">{data.profile.email}</label>
            <Input value={profile.user.email || ""} readOnly className="border-white/10 bg-white/5 text-white" />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <label className="text-sm font-medium text-white">{data.profile.businessName}</label>
            <Input value={profile.user.businessName || ""} readOnly className="border-white/10 bg-white/5 text-white" />
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="border-white/10 bg-white/5 text-white">
          <CardHeader>
            <CardTitle>{data.plan.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-center justify-between gap-3">
              <span className="text-gray-400">{data.plan.dashboardMode}</span>
              <span className="capitalize text-white">{bootstrap.dashboard.mode}</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="text-gray-400">{data.plan.subscription}</span>
              <span className="capitalize text-white">{profile.user.subscriptionStatus}</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="text-gray-400">{data.plan.syncEnabled}</span>
              <span className="text-white">{profile.user.syncEnabled ? data.plan.yes : data.plan.no}</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="text-gray-400">{data.plan.inventoryLimit}</span>
              <span className="text-white">{profile.user.maxInventories}</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="text-gray-400">{data.plan.analyticsRange}</span>
              <span className="text-white">{profile.user.analyticsRangeDays} {data.plan.daysSuffix}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/5 text-white">
          <CardHeader>
            <CardTitle>{data.snapshot.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-gray-300">
            <p>
              {data.snapshot.lastSynced}:{" "}
              <span className="text-white">
                {bootstrap.dashboard.lastSyncedAt
                  ? new Date(bootstrap.dashboard.lastSyncedAt).toLocaleString()
                  : data.snapshot.neverSynced}
              </span>
            </p>
            <p>{data.snapshot.archiveNote}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
