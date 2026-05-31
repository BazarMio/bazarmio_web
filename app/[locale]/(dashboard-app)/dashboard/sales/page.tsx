import { EmptyState } from "@/components/dashboard/EmptyState";
import { ExportButton } from "@/components/dashboard/ExportButton";
import { InfoTooltip } from "@/components/helpers/InfoTooltip";
import { PaginationControls } from "@/components/dashboard/PaginationControls";
import { SalesFilters } from "@/components/dashboard/SalesFilters";
import { StatusChip } from "@/components/dashboard/StatusChip";
import { getSaleStatusDisplay } from "@/lib/chip-status";
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
import { nextApi, bazarmioApi, withQuery } from "@/lib/apiRoutes";
import { DASHBOARD_SALES, localePath } from "@/lib/routes";
import type { DashboardSalesResponse } from "@/lib/types";

import { dashboardSalesData } from "./data";
import {
  getDashboardBootstrap,
  getExportSearchParams,
  getScalarSearchParam,
  parsePositiveInt,
  resolveSelectedInventoryId,
  toApiDateRange,
  toUrlSearchParams,
} from "../utils";

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


export default async function DashboardSalesPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const lang = locale === "es" ? "es" : "en";
  const currentParams = await searchParams;
  const data = dashboardSalesData[lang];
  const bootstrap = await getDashboardBootstrap();
  const inventoryId = resolveSelectedInventoryId(bootstrap, currentParams.inventory);

  if (!inventoryId) {
    return (
      <Card className="border-white/10 bg-white/5 text-white">
        <CardHeader>
          <CardTitle>{data.noInventory.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState title={data.noInventory.title} description={data.noInventory.description} className="py-12" />
        </CardContent>
      </Card>
    );
  }

  const page = parsePositiveInt(getScalarSearchParam(currentParams.page), 1);
  const pageSize = 25;
  const startDate = getScalarSearchParam(currentParams.startDate) || "";
  const endDate = getScalarSearchParam(currentParams.endDate) || "";
  const paymentMethodValue = getScalarSearchParam(currentParams.paymentMethod);
  const salesStatusValue = getScalarSearchParam(currentParams.status);
  const paymentMethod =
    paymentMethodValue === "efectivo" ||
    paymentMethodValue === "transferencia" ||
    paymentMethodValue === "credito"
      ? paymentMethodValue
      : "all";
  const status =
    salesStatusValue === "completed" ||
    salesStatusValue === "voided" ||
    salesStatusValue === "refunded"
      ? salesStatusValue
      : "all";
  const query = new URLSearchParams();
  query.set("page", String(page));
  query.set("pageSize", String(pageSize));

  if (startDate) {
    query.set("startDate", toApiDateRange(startDate, false));
  }

  if (endDate) {
    query.set("endDate", toApiDateRange(endDate, true));
  }

  if (paymentMethod !== "all") {
    query.set("paymentMethod", paymentMethod);
  }

  query.set("status", status);

  const currentSearchParams = toUrlSearchParams(currentParams);
  currentSearchParams.set("pageSize", String(pageSize));
  currentSearchParams.set("status", status);

  if (startDate) {
    currentSearchParams.set("startDate", startDate);
  } else {
    currentSearchParams.delete("startDate");
  }

  if (endDate) {
    currentSearchParams.set("endDate", endDate);
  } else {
    currentSearchParams.delete("endDate");
  }

  if (paymentMethod !== "all") {
    currentSearchParams.set("paymentMethod", paymentMethod);
  } else {
    currentSearchParams.delete("paymentMethod");
  }

  const action = localePath(lang, DASHBOARD_SALES);
  const resetHref = `${action}?${new URLSearchParams({ inventory: inventoryId }).toString()}`;
  const exportHref = withQuery(
    nextApi.dashboard.exportSalesCsv(inventoryId),
    getExportSearchParams(currentSearchParams),
  );

  const sales = await getAuthedJson<DashboardSalesResponse>(
    withQuery(bazarmioApi.dashboard.sales(inventoryId), query),
  );

  return (
    <Card className="border-white/10 bg-white/5 text-white">
      <CardHeader>
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="space-y-1">
            <CardTitle>{data.titlePrefix} {sales.inventory.name}</CardTitle>
            <p className="text-sm text-gray-400">
              {sales.meta.total} {sales.meta.total === 1 ? data.countSingular : data.countPlural}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-2">
            <SalesFilters
              action={action}
              inventoryId={inventoryId}
              values={{ startDate, endDate, paymentMethod, status }}
              resetHref={resetHref}
              data={data.filters}
            />
            <div className="flex items-center gap-1.5">
              <ExportButton href={exportHref} label={data.export.label} locale={lang} />
              <InfoTooltip content={data.export.tooltip} side="bottom" align="end" />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Table className="min-w-[760px]">
          <TableHeader>
            <TableRow>
              <TableHead>{data.table.columns.date}</TableHead>
              <TableHead>{data.table.columns.amount}</TableHead>
              <TableHead>{data.table.columns.profit}</TableHead>
              <TableHead>{data.table.columns.items}</TableHead>
              <TableHead>{data.table.columns.payment}</TableHead>
              <TableHead>{data.table.columns.status}</TableHead>
              <TableHead>{data.table.columns.notes}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sales.items.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="py-10 text-center text-gray-400">
                  {data.table.empty}
                </TableCell>
              </TableRow>
            ) : (
              sales.items.map((sale) => (
                <TableRow key={sale.id}>
                  {(() => {
                    const saleStatus = getSaleStatusDisplay(sale.status, data.filters.status);

                    return (
                      <>
                  <TableCell>{new Date(sale.createdAt).toLocaleString()}</TableCell>
                  <TableCell>{formatCurrency(sale.totalAmount)}</TableCell>
                  <TableCell>{formatCurrency(sale.totalProfit)}</TableCell>
                  <TableCell>{sale.itemCount}</TableCell>
                  <TableCell className="capitalize">{sale.paymentMethod}</TableCell>
                  <TableCell>
                    <StatusChip label={saleStatus.label} tone={saleStatus.tone} />
                  </TableCell>
                  <TableCell>{sale.notes || data.table.columns.emptyNotes}</TableCell>
                      </>
                    );
                  })()}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        <PaginationControls
          page={sales.meta.page}
          pageCount={sales.meta.pageCount}
          pageSize={sales.meta.pageSize}
          total={sales.meta.total}
          searchParams={currentSearchParams}
          locale={lang}
        />
      </CardContent>
    </Card>
  );
}
