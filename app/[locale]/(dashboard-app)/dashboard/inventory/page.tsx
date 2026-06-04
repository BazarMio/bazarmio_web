import { EmptyState } from "@/components/dashboard/EmptyState";
import { ExportButton } from "@/components/dashboard/ExportButton";
import { InfoTooltip } from "@/components/helpers/InfoTooltip";
import { InventoryFilters } from "@/components/dashboard/InventoryFilters";
import { PaginationControls } from "@/components/dashboard/PaginationControls";
import { StatusChip } from "@/components/dashboard/StatusChip";
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
import { redirect } from "next/navigation";

import { DASHBOARD_INVENTORY, localePath } from "@/lib/routes";
import type { DashboardProductsResponse } from "@/lib/types";

import { formatCurrency } from "@/lib/utils";

import { dashboardInventoryData, type DashboardInventoryPageData } from "./data";
import {
  getDashboardBootstrap,
  getExportSearchParams,
  getScalarSearchParam,
  parsePositiveInt,
  resolveSelectedInventoryId,
  setOrDelete,
  toUrlSearchParams,
} from "../utils";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function getStockChip(
  product: { isOutOfStock: boolean; isLowStock: boolean; isActive: boolean },
  columns: DashboardInventoryPageData["table"]["columns"],
) {
  if (product.isOutOfStock) return { label: columns.outOfStock, tone: "danger" as const };
  if (product.isLowStock) return { label: columns.lowStock, tone: "warning" as const };
  if (product.isActive) return { label: columns.active, tone: "success" as const };
  return { label: columns.inactive, tone: "neutral" as const };
}

export default async function DashboardInventoryPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const lang = locale === "es" ? "es" : "en";
  const currentParams = await searchParams;
  const data = dashboardInventoryData[lang];
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
  const queryValue = getScalarSearchParam(currentParams.query)?.trim() || "";
  const statusValue = getScalarSearchParam(currentParams.status);
  const stockValue = getScalarSearchParam(currentParams.stock);
  const status = statusValue === "all" || statusValue === "inactive" ? statusValue : "active";
  const stock = stockValue === "low" || stockValue === "out" ? stockValue : "all";
  const query = new URLSearchParams();
  query.set("page", String(page));
  query.set("pageSize", String(pageSize));
  query.set("status", status);
  query.set("stock", stock);

  if (queryValue) {
    query.set("query", queryValue);
  }

  const currentSearchParams = toUrlSearchParams(currentParams);
  currentSearchParams.set("pageSize", String(pageSize));
  currentSearchParams.set("status", status);
  currentSearchParams.set("stock", stock);
  setOrDelete(currentSearchParams, "query", queryValue);

  const action = localePath(lang, DASHBOARD_INVENTORY);
  const resetHref = `${action}?${new URLSearchParams({ inventory: inventoryId }).toString()}`;
  const exportHref = withQuery(
    nextApi.dashboard.exportInventoryCsv(inventoryId),
    getExportSearchParams(currentSearchParams),
  );

  const products = await getAuthedJson<DashboardProductsResponse>(
    withQuery(bazarmioApi.dashboard.products(inventoryId), query),
  ).catch(() => null);

  if (!products) {
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

  if (products.meta.pageCount > 0 && page > products.meta.pageCount) {
    const nextParams = new URLSearchParams(currentSearchParams.toString());
    nextParams.set("page", String(products.meta.pageCount));
    redirect(`?${nextParams.toString()}`);
  }

  return (
    <Card className="border-white/10 bg-white/5 text-white">
      <CardHeader>
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="space-y-1">
            <CardTitle>{data.titlePrefix} {products.inventory.name}</CardTitle>
            <p className="text-sm text-gray-400">
              {products.meta.total} {products.meta.total === 1 ? data.countSingular : data.countPlural}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-2">
            <InventoryFilters
              action={action}
              inventoryId={inventoryId}
              values={{ query: queryValue, status, stock }}
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
        {products.items.length === 0 ? (
          <EmptyState title={data.table.empty} className="py-8" />
        ) : (
          <>
            <Table className="min-w-190">
              <TableHeader>
                <TableRow>
                  <TableHead>{data.table.columns.product}</TableHead>
                  <TableHead>{data.table.columns.category}</TableHead>
                  <TableHead>{data.table.columns.stock}</TableHead>
                  <TableHead>{data.table.columns.minStock}</TableHead>
                  <TableHead>{data.table.columns.price}</TableHead>
                  <TableHead>{data.table.columns.cost}</TableHead>
                  <TableHead>{data.table.columns.status}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.items.map((product) => {
                  const chip = getStockChip(product, data.table.columns);
                  const stockClass = product.isOutOfStock
                    ? "text-red-400"
                    : product.isLowStock
                      ? "text-amber-400"
                      : "text-white";

                  return (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium text-white">{product.name}</p>
                          <p className="text-xs text-gray-400">{product.sku || data.table.columns.noSku}</p>
                        </div>
                      </TableCell>
                      <TableCell className={product.categoryName ? "text-white" : "text-gray-500"}>
                        {product.categoryName || data.table.columns.uncategorized}
                      </TableCell>
                      <TableCell className={stockClass} title={chip.label}>
                        {product.currentStock} {product.unit}
                      </TableCell>
                      <TableCell>{product.minStock}</TableCell>
                      <TableCell>{formatCurrency(product.defaultPrice)}</TableCell>
                      <TableCell>{formatCurrency(product.costPrice)}</TableCell>
                      <TableCell>
                        <StatusChip label={chip.label} tone={chip.tone} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            <PaginationControls
              page={products.meta.page}
              pageCount={products.meta.pageCount}
              pageSize={products.meta.pageSize}
              total={products.meta.total}
              searchParams={currentSearchParams}
              locale={lang}
            />
          </>
        )}
      </CardContent>
    </Card>
  );
}
