import { Info } from "lucide-react";
import { EmptyState } from "@/components/dashboard/EmptyState";
import { StatusChip } from "@/components/dashboard/StatusChip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDashboardModeTone, getSubscriptionTone } from "@/lib/chip-status";
import type { Lang } from "@/lib/types";
import { cn } from "@/lib/utils";

import { dashboardAccountData } from "./data";
import { getDashboardBootstrap, getDashboardUserProfile } from "../utils";

type Props = {
  params: Promise<{ locale: string }>;
};

function DisplayField({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
        {label}
      </p>
      <p
        className={cn(
          "text-sm font-medium",
          value ? "text-white" : "text-gray-500",
        )}
      >
        {value || "—"}
      </p>
    </div>
  );
}

function PlanRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-3 py-2.5">
      <span className="text-sm text-gray-400">{label}</span>
      <span className="text-sm text-white">{children}</span>
    </div>
  );
}

export default async function DashboardAccountPage({ params }: Props) {
  const { locale } = await params;
  const lang: Lang = locale === "es" ? "es" : "en";
  const data = dashboardAccountData[lang];
  const [bootstrap, profile] = await Promise.all([
    getDashboardBootstrap(),
    getDashboardUserProfile().catch(() => null),
  ]);

  if (!profile) {
    return (
      <Card className="border-white/10 bg-white/5 text-white">
        <CardContent className="py-12">
          <EmptyState
            title={data.error.title}
            description={data.error.description}
          />
        </CardContent>
      </Card>
    );
  }

  const lastSynced = bootstrap.dashboard.lastSyncedAt
    ? new Intl.DateTimeFormat(lang, {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date(bootstrap.dashboard.lastSyncedAt))
    : data.snapshot.neverSynced;

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)]">
      <Card className="border-white/10 bg-white/5 text-white">
        <CardHeader>
          <CardTitle>{data.profile.title}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <DisplayField
              label={data.profile.fullName}
              value={profile.user.fullName}
            />
          </div>
          <DisplayField
            label={data.profile.phoneNumber}
            value={profile.user.phoneNumber}
          />
          <DisplayField
            label={data.profile.email}
            value={profile.user.email || ""}
          />
          <div className="sm:col-span-2">
            <DisplayField
              label={data.profile.businessName}
              value={profile.user.businessName || ""}
            />
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="border-white/10 bg-white/5 text-white">
          <CardHeader>
            <CardTitle>{data.plan.title}</CardTitle>
          </CardHeader>
          <CardContent className="divide-y divide-white/5">
            <PlanRow label={data.plan.dashboardMode}>
              <StatusChip
                label={bootstrap.dashboard.mode}
                tone={getDashboardModeTone(bootstrap.dashboard.mode)}
              />
            </PlanRow>
            <PlanRow label={data.plan.subscription}>
              <StatusChip
                label={profile.user.subscriptionStatus}
                tone={getSubscriptionTone(profile.user.subscriptionStatus)}
              />
            </PlanRow>
            <PlanRow label={data.plan.syncEnabled}>
              <StatusChip
                label={profile.user.syncEnabled ? data.plan.yes : data.plan.no}
                tone={profile.user.syncEnabled ? "success" : "neutral"}
              />
            </PlanRow>
            <PlanRow label={data.plan.inventoryLimit}>
              {profile.user.maxInventories}
            </PlanRow>
            <PlanRow label={data.plan.analyticsRange}>
              {profile.user.analyticsRangeDays} {data.plan.daysSuffix}
            </PlanRow>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/5 text-white">
          <CardHeader>
            <CardTitle>{data.snapshot.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm text-gray-400">
                {data.snapshot.lastSynced}
              </span>
              <span className="text-sm text-white">{lastSynced}</span>
            </div>
            <div className="flex gap-2.5 rounded-lg border border-white/10 bg-white/5 p-3">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
              <p className="text-xs leading-relaxed text-gray-400">
                {data.snapshot.archiveNote}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
