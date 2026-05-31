import {
  AlertTriangle,
  CreditCard,
  DollarSign,
  Receipt,
  TrendingUp,
  XCircle,
} from "lucide-react";
import { EmptyState } from "@/components/dashboard/EmptyState";
import { InfoTooltip } from "@/components/helpers/InfoTooltip";
import { StatusChip } from "@/components/dashboard/StatusChip";
import { getSaleStatusDisplay } from "@/lib/chip-status";
import { OverviewCategoryChart } from "@/components/dashboard/OverviewCategoryChart";
import { OverviewFilters } from "@/components/dashboard/OverviewFilters";
import { OverviewPaymentMethodChart } from "@/components/dashboard/OverviewPaymentMethodChart";
import { OverviewRevenueChart } from "@/components/dashboard/OverviewRevenueChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAuthedJson } from "@/clients/bazarmio-client/api";
import { bazarmioApi, withQuery } from "@/lib/apiRoutes";
import { DASHBOARD, localePath } from "@/lib/routes";
import type { DashboardOverviewResponse } from "@/lib/types";

import { dashboardOverviewData } from "./overview.data";
import {
  getDashboardBootstrap,
  getScalarSearchParam,
  resolveSelectedInventoryId,
  toApiDateRange,
} from "./utils";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function getPaymentMethodLabel(
  paymentMethod: string,
  labels: (typeof dashboardOverviewData)["en"]["paymentMethods"]["methods"],
) {
  switch (paymentMethod) {
    case "efectivo":
      return labels.efectivo;
    case "transferencia":
      return labels.transferencia;
    case "credito":
      return labels.credito;
    default:
      return labels.fallback;
  }
}

export default async function DashboardOverviewPage({
  params,
  searchParams,
}: Props) {
  const { locale } = await params;
  const lang = locale === "es" ? "es" : "en";
  const currentParams = await searchParams;
  const data = dashboardOverviewData[lang];
  const bootstrap = await getDashboardBootstrap();
  const inventoryId = resolveSelectedInventoryId(
    bootstrap,
    currentParams.inventory,
  );

  if (!inventoryId) {
    return (
      <Card className="border-white/10 bg-white/5 text-white">
        <CardHeader>
          <CardTitle>{data.noInventory.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState
            title={data.noInventory.title}
            description={data.noInventory.description}
            className="py-12"
          />
        </CardContent>
      </Card>
    );
  }

  const startDate = getScalarSearchParam(currentParams.startDate) || "";
  const endDate = getScalarSearchParam(currentParams.endDate) || "";
  const query = new URLSearchParams();

  if (startDate) {
    query.set("startDate", toApiDateRange(startDate, false));
  }

  if (endDate) {
    query.set("endDate", toApiDateRange(endDate, true));
  }

  const action = localePath(lang, DASHBOARD);
  const resetHref = `${action}?${new URLSearchParams({ inventory: inventoryId }).toString()}`;

  const overview = await getAuthedJson<DashboardOverviewResponse>(
    withQuery(bazarmioApi.dashboard.overview(inventoryId), query),
  );

  const hasDailySales = overview.dailySales.some(
    (day) => day.revenue > 0 || day.profit > 0 || day.count > 0,
  );

  const summaryCards = [
    {
      label: data.summary.revenue,
      value: formatCurrency(overview.summary.totalRevenue),
      tooltip: data.summary.tooltips.revenue,
      icon: DollarSign,
      iconClass: "bg-lime-500/10 text-lime-400",
    },
    {
      label: data.summary.profit,
      value: formatCurrency(overview.summary.totalProfit),
      tooltip: data.summary.tooltips.profit,
      icon: TrendingUp,
      iconClass: "bg-blue-500/10 text-blue-400",
    },
    {
      label: data.summary.transactions,
      value: overview.summary.totalTransactions.toString(),
      tooltip: data.summary.tooltips.transactions,
      icon: Receipt,
      iconClass: "bg-violet-500/10 text-violet-400",
    },
    {
      label: data.summary.avgTicket,
      value: formatCurrency(overview.summary.avgTransactionValue),
      tooltip: data.summary.tooltips.avgTicket,
      icon: CreditCard,
      iconClass: "bg-orange-500/10 text-orange-400",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <Card
            key={card.label}
            className="border-white/10 bg-white/5 text-white"
          >
            <CardHeader className="px-5">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <p>{card.label}</p>
                    <InfoTooltip
                      content={card.tooltip}
                      side="top"
                      align="start"
                    />
                  </div>
                  <CardTitle className="text-3xl font-bold">
                    {card.value}
                  </CardTitle>
                </div>
                <div className={`rounded-lg p-2 ${card.iconClass}`}>
                  <card.icon className="h-5 w-5" />
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] xl:items-stretch">
        <div className="flex min-h-0 flex-col gap-6">
          <Card className="border-white/10 bg-white/5 text-white">
            <CardHeader>
              <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div className="space-y-1">
                  <CardTitle>{data.dailySales.title}</CardTitle>
                  <p className="text-sm text-gray-400">
                    {startDate && endDate
                      ? `${data.dailySales.rangePrefix}: ${startDate} to ${endDate}`
                      : data.dailySales.defaultRange}
                  </p>
                </div>
                <OverviewFilters
                  action={action}
                  inventoryId={inventoryId}
                  values={{ startDate, endDate }}
                  resetHref={resetHref}
                  data={data.overviewFilters}
                />
              </div>
            </CardHeader>
            <CardContent>
              {hasDailySales ? (
                <OverviewRevenueChart
                  data={overview.dailySales}
                  locale={lang}
                />
              ) : (
                <EmptyState
                  title={data.dailySales.emptyTitle}
                  description={data.dailySales.emptyDescription}
                  className="py-12"
                />
              )}
            </CardContent>
          </Card>

          <Card className="flex min-h-0 flex-1 flex-col border-white/10 bg-white/5 text-white">
            <CardHeader>
              <CardTitle>{data.topCategories.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex min-h-[320px] flex-1">
              {overview.topCategories.length === 0 ? (
                <EmptyState
                  title={data.topCategories.emptyTitle}
                  description={data.topCategories.emptyDescription}
                  className="py-12"
                />
              ) : (
                <OverviewCategoryChart
                  data={overview.topCategories}
                  labels={{
                    revenue: data.topCategories.revenueLabel,
                    profit: data.topCategories.profitLabel,
                    quantity: data.topCategories.quantityLabel,
                  }}
                />
              )}
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-6">
          <Card className="border-white/10 bg-white/5 text-white">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CardTitle>{data.inventoryHealth.title}</CardTitle>
                <InfoTooltip
                  content={data.inventoryHealth.tooltip}
                  side="top"
                  align="start"
                />
              </div>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border-l-4 border-l-amber-500 bg-amber-500/5 p-4">
                <div className="flex items-center gap-1.5 text-amber-400">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  <p className="text-xs font-medium uppercase tracking-wide">
                    {data.inventoryHealth.lowStock}
                  </p>
                </div>
                <p className="mt-3 text-3xl font-semibold text-amber-300">
                  {overview.stock.lowStockCount}
                </p>
              </div>
              <div className="rounded-xl border-l-4 border-l-red-500 bg-red-500/5 p-4">
                <div className="flex items-center gap-1.5 text-red-400">
                  <XCircle className="h-3.5 w-3.5" />
                  <p className="text-xs font-medium uppercase tracking-wide">
                    {data.inventoryHealth.outOfStock}
                  </p>
                </div>
                <p className="mt-3 text-3xl font-semibold text-red-300">
                  {overview.stock.outOfStockCount}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 text-white">
            <CardHeader>
              <CardTitle>{data.topProducts.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {overview.topProducts.length === 0 ? (
                <EmptyState
                  title={data.topProducts.emptyTitle}
                  description={data.topProducts.emptyDescription}
                  className="py-8"
                />
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{data.topProducts.columns.product}</TableHead>
                      <TableHead>
                        {data.topProducts.columns.unitsSold}
                      </TableHead>
                      <TableHead>{data.topProducts.columns.revenue}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {overview.topProducts.map((item) => (
                      <TableRow key={item.productId}>
                        <TableCell className="font-medium text-white">
                          {item.name}
                        </TableCell>
                        <TableCell>{item.quantitySold}</TableCell>
                        <TableCell>{formatCurrency(item.revenue)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>

          <Card className="flex flex-1 flex-col border-white/10 bg-white/5 text-white">
            <CardHeader>
              <CardTitle>{data.paymentMethods.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {overview.paymentMethodBreakdown.length === 0 ? (
                <EmptyState
                  title={data.paymentMethods.emptyTitle}
                  description={data.paymentMethods.emptyDescription}
                  className="py-8"
                />
              ) : (
                <OverviewPaymentMethodChart
                  data={overview.paymentMethodBreakdown.map((item) => ({
                    ...item,
                    label: getPaymentMethodLabel(
                      item.paymentMethod,
                      data.paymentMethods.methods,
                    ),
                  }))}
                  labels={{
                    amount: data.paymentMethods.amountLabel,
                    count: data.paymentMethods.countLabel,
                  }}
                />
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="border-white/10 bg-white/5 text-white">
        <CardHeader>
          <CardTitle>{data.recentSales.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="min-w-[540px]">
            <TableHeader>
              <TableRow>
                <TableHead>{data.recentSales.columns.date}</TableHead>
                <TableHead>{data.recentSales.columns.amount}</TableHead>
                <TableHead>{data.recentSales.columns.profit}</TableHead>
                <TableHead>{data.recentSales.columns.items}</TableHead>
                <TableHead>{data.recentSales.columns.status}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {overview.recentSales.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="py-10 text-center text-gray-400"
                  >
                    {data.recentSales.empty}
                  </TableCell>
                </TableRow>
              ) : (
                overview.recentSales.map((sale) => (
                  <TableRow key={sale.id}>
                    <TableCell>
                      {new Date(sale.createdAt).toLocaleString()}
                    </TableCell>
                    <TableCell>{formatCurrency(sale.totalAmount)}</TableCell>
                    <TableCell>{formatCurrency(sale.totalProfit)}</TableCell>
                    <TableCell>{sale.itemCount}</TableCell>
                    <TableCell>
                      {(() => {
                        const s = getSaleStatusDisplay(sale.status, data.recentSales.statuses);
                        return <StatusChip label={s.label} tone={s.tone} />;
                      })()}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
