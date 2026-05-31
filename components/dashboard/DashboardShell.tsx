"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import {
  Archive,
  ChartNoAxesColumn,
  MoreVertical,
  LogOut,
  Menu,
  Package,
  ReceiptText,
  Settings,
  UserRound,
  Wifi,
} from "lucide-react";

import type { DashboardShellData } from "@/app/[locale]/(dashboard-app)/dashboard/data";
import { LanguageSelector } from "@/components/navigation/LanguageSelector";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Logo } from "@/components/ui/logo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nextApi } from "@/lib/apiRoutes";
import {
  DASHBOARD,
  DASHBOARD_ACCOUNT,
  DASHBOARD_INVENTORY,
  DASHBOARD_LOGIN,
  DASHBOARD_SALES,
  localePath,
} from "@/lib/routes";
import type { DashboardBootstrap, Lang } from "@/lib/types";
import { cn } from "@/lib/utils";

type DashboardShellProps = {
  locale: Lang;
  bootstrap: DashboardBootstrap;
  data: DashboardShellData;
  children: React.ReactNode;
};

type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

function formatLastSynced(value: string | null) {
  if (!value) {
    return null;
  }

  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
}

function StatusPill({
  tone,
  children,
}: {
  tone: "lime" | "slate";
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
        tone === "lime"
          ? "border-lime/40 bg-lime/10 text-lime"
          : "border-white/10 bg-white/5 text-gray-300",
      )}
    >
      {children}
    </span>
  );
}

function InventorySwitcher({
  inventories,
  fallbackInventoryId,
  data,
}: {
  inventories: DashboardBootstrap["inventories"];
  fallbackInventoryId: string | null;
  data: Pick<DashboardShellData, "chooseInventory" | "noInventories">;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedInventoryId =
    searchParams.get("inventory") ??
    fallbackInventoryId ??
    inventories[0]?.id ??
    "";

  if (inventories.length === 0) {
    return (
      <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-400">
        {data.noInventories}
      </div>
    );
  }

  return (
    <Select
      value={selectedInventoryId}
      onValueChange={(value) => {
        const nextSearchParams = new URLSearchParams(searchParams.toString());
        nextSearchParams.set("inventory", value);
        nextSearchParams.delete("page");
        router.push(`${pathname}?${nextSearchParams.toString()}`);
      }}
    >
      <SelectTrigger className="w-full border-white/10 bg-white/5 text-white hover:bg-white/10">
        <SelectValue placeholder={data.chooseInventory} />
      </SelectTrigger>
      <SelectContent
        position="popper"
        side="bottom"
        sideOffset={6}
        className="border-white/10 bg-[#111111] text-white"
      >
        {inventories.map((inventory) => (
          <SelectItem key={inventory.id} value={inventory.id}>
            {inventory.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function DashboardNav({
  items,
  currentPath,
  onNavigate,
}: {
  items: NavItem[];
  currentPath: string;
  onNavigate?: () => void;
}) {
  return (
    <nav className="space-y-1">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
              currentPath === item.href.split("?")[0]
                ? "bg-lime/10 text-lime"
                : "text-gray-400 hover:bg-white/5 hover:text-white",
            )}
          >
            <Icon className="size-4" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export function DashboardShell({
  locale,
  bootstrap,
  data,
  children,
}: DashboardShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const selectedInventoryId =
    searchParams.get("inventory") ??
    bootstrap.selectedInventoryId ??
    bootstrap.inventories[0]?.id ??
    null;

  const selectedInventory =
    bootstrap.inventories.find(
      (inventory) => inventory.id === selectedInventoryId,
    ) ??
    bootstrap.inventories[0] ??
    null;

  const accountPrimary =
    bootstrap.user.businessName ||
    bootstrap.user.fullName ||
    data.accountMenu.fallbackAccount;
  const accountSecondary =
    bootstrap.user.businessName && bootstrap.user.fullName
      ? bootstrap.user.fullName
      : bootstrap.user.phoneNumber;

  const inventoryQuery = selectedInventoryId
    ? `?${new URLSearchParams({ inventory: selectedInventoryId }).toString()}`
    : "";

  const navItems = useMemo<NavItem[]>(
    () => [
      {
        href: `${localePath(locale, DASHBOARD)}${inventoryQuery}`,
        label: data.nav.overview,
        icon: ChartNoAxesColumn,
      },
      {
        href: `${localePath(locale, DASHBOARD_INVENTORY)}${inventoryQuery}`,
        label: data.nav.inventory,
        icon: Package,
      },
      {
        href: `${localePath(locale, DASHBOARD_SALES)}${inventoryQuery}`,
        label: data.nav.sales,
        icon: ReceiptText,
      },
      {
        href: `${localePath(locale, DASHBOARD_ACCOUNT)}${inventoryQuery}`,
        label: data.nav.account,
        icon: Settings,
      },
    ],
    [
      data.nav.account,
      data.nav.inventory,
      data.nav.overview,
      data.nav.sales,
      inventoryQuery,
      locale,
    ],
  );

  const pageTitle = pathname.endsWith(DASHBOARD_ACCOUNT)
    ? data.pageTitles.account
    : pathname.endsWith(DASHBOARD_SALES)
      ? data.pageTitles.sales
      : pathname.endsWith(DASHBOARD_INVENTORY)
        ? data.pageTitles.inventory
        : data.pageTitles.overview;

  const syncBadgeLabel =
    bootstrap.dashboard.mode === "live"
      ? bootstrap.dashboard.syncEnabled
        ? data.sync.synced
        : data.sync.syncOff
      : data.sync.syncExpired;

  async function handleLogout() {
    const loginHref = localePath(locale, DASHBOARD_LOGIN);

    try {
      setIsLoggingOut(true);
      await fetch(nextApi.auth.logout(), { method: "POST", cache: "no-store" });
    } catch {
      // The server route clears cookies; still redirect on local request failure.
    } finally {
      setIsLoggingOut(false);
      router.replace(loginHref);
      router.refresh();
    }
  }

  return (
    <div className="h-screen overflow-hidden bg-[--bazarmio-darker] text-white lg:grid lg:grid-cols-[256px_1fr]">
      <aside className="hidden h-screen overflow-y-auto border-r border-white/5 bg-[#121212] lg:flex lg:flex-col">
        <div className="border-b border-white/5 px-6 py-5">
          <Logo href={localePath(locale, DASHBOARD)} size="md" />
        </div>
        <div className="space-y-6 px-4 py-6">
          <div className="space-y-2">
            <p className="px-3 text-xs font-medium uppercase tracking-[0.16em] text-gray-500">
              {data.inventorySectionLabel}
            </p>
            <InventorySwitcher
              inventories={bootstrap.inventories}
              fallbackInventoryId={bootstrap.selectedInventoryId}
              data={{
                chooseInventory: data.chooseInventory,
                noInventories: data.noInventories,
              }}
            />
          </div>
          <DashboardNav items={navItems} currentPath={pathname} />
        </div>
        <div className="mt-auto border-t border-white/5 px-4 py-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-auto min-h-0 w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 px-2.5 py-2.5 text-left text-white hover:bg-white/8 hover:text-white"
              >
                <span className="flex min-w-0 items-center gap-2">
                  <span className="flex size-8 min-h-0 min-w-0 items-center justify-center rounded-md border border-white/10 bg-[#181818] text-gray-300">
                    <UserRound className="size-3.5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium text-white">
                      {accountPrimary}
                    </span>
                    <span className="block truncate pt-0.5 text-xs text-gray-400">
                      {accountSecondary}
                    </span>
                  </span>
                </span>
                <span className="flex min-h-0 min-w-0 items-center justify-center rounded-sm text-gray-500 transition-colors hover:text-white">
                  <MoreVertical className="size-3.5 shrink-0" />
                  <span className="sr-only">
                    {data.accountMenu.accountSettings}
                  </span>
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="min-w-56 border-white/10 bg-[#111111] text-white"
              onCloseAutoFocus={(event) => event.preventDefault()}
            >
              <DropdownMenuLabel>
                <div className="space-y-1">
                  <p className="font-medium text-white">{accountPrimary}</p>
                  <p className="text-xs text-gray-400">{accountSecondary}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/10" />
              <DropdownMenuItem asChild>
                <Link
                  href={`${localePath(locale, DASHBOARD_ACCOUNT)}${inventoryQuery}`}
                >
                  {data.accountMenu.accountSettings}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleLogout}
                className="text-red-300 focus:bg-red-500/10 focus:text-red-200"
                disabled={isLoggingOut}
              >
                <LogOut className="size-4" />
                <span>
                  {isLoggingOut
                    ? data.accountMenu.signingOut
                    : data.accountMenu.signOut}
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>

      <div className="flex h-screen min-h-0 flex-col overflow-hidden">
        <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0f0f0f]/90 backdrop-blur">
          <div className="flex items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
            <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="size-5" />
                  <span className="sr-only">{data.openNavigationLabel}</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="border-white/10 bg-[#101010] text-white"
                showCloseButton={false}
              >
                <SheetHeader className="border-b border-white/5 px-5 py-5">
                  <SheetTitle>
                    <Logo href={localePath(locale, DASHBOARD)} size="md" />
                  </SheetTitle>
                  <SheetDescription className="text-gray-400">
                    {data.mobileNavigationDescription}
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-6 px-4 py-6">
                  <InventorySwitcher
                    inventories={bootstrap.inventories}
                    fallbackInventoryId={bootstrap.selectedInventoryId}
                    data={{
                      chooseInventory: data.chooseInventory,
                      noInventories: data.noInventories,
                    }}
                  />
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300">
                    <span>{data.languageLabel}</span>
                    <LanguageSelector
                      triggerClassName="h-8 px-2 text-white hover:bg-white/10"
                      contentClassName="border-white/10 bg-[#111111] text-white"
                    />
                  </div>
                  <DashboardNav
                    items={navItems}
                    currentPath={pathname}
                    onNavigate={() => setIsMobileNavOpen(false)}
                  />
                </div>
              </SheetContent>
            </Sheet>

            <div className="min-w-0 flex-1">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                {data.dashboardLabel}
              </p>
              <div className="mt-1 flex flex-wrap items-center gap-3">
                <h1 className="text-xl font-semibold text-white sm:text-2xl">
                  {pageTitle}
                </h1>
                <StatusPill
                  tone={bootstrap.dashboard.mode === "live" ? "lime" : "slate"}
                >
                  {bootstrap.dashboard.mode === "live" ? (
                    <Wifi className="mr-1 size-3" />
                  ) : (
                    <Archive className="mr-1 size-3" />
                  )}
                  {bootstrap.dashboard.mode === "live"
                    ? data.sync.live
                    : data.sync.archive}
                </StatusPill>
                <StatusPill
                  tone={bootstrap.dashboard.mode === "live" ? "lime" : "slate"}
                >
                  {syncBadgeLabel}
                </StatusPill>
              </div>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <div className="min-w-0 text-right">
                <p className="truncate text-sm font-medium text-white">
                  {selectedInventory?.name || data.noInventorySelected}
                </p>
                <p className="text-xs text-gray-400">
                  {data.lastSyncedLabel}{" "}
                  {formatLastSynced(bootstrap.dashboard.lastSyncedAt) ??
                    data.neverSynced}
                </p>
              </div>
              <LanguageSelector
                triggerClassName="border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                contentClassName="border-white/10 bg-[#111111] text-white"
              />
            </div>
          </div>

          {bootstrap.dashboard.mode === "archive" ? (
            <div className="border-t border-white/5 bg-white/5 px-4 py-2 text-sm text-gray-300 sm:px-6 lg:px-8">
              {bootstrap.dashboard.syncEnabled
                ? data.archiveBanner.expired
                : data.archiveBanner.syncDisabled}
            </div>
          ) : null}
        </header>

        <main className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
