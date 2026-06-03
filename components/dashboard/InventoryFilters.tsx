"use client";

import Link from "next/link";
import { useState } from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type InventoryFiltersProps = {
  action: string;
  inventoryId: string;
  values: {
    query: string;
    status: "active" | "inactive" | "all";
    stock: "all" | "low" | "out";
  };
  resetHref: string;
  data: {
    searchAria: string;
    searchPlaceholder: string;
    statusAria: string;
    stockAria: string;
    status: {
      placeholder: string;
      all: string;
      active: string;
      inactive: string;
    };
    stock: {
      placeholder: string;
      all: string;
      low: string;
      out: string;
    };
    apply: string;
    reset: string;
  };
};

export function InventoryFilters({
  action,
  inventoryId,
  values,
  resetHref,
  data,
}: InventoryFiltersProps) {
  const [status, setStatus] = useState<
    InventoryFiltersProps["values"]["status"]
  >(values.status);
  const [stock, setStock] = useState<InventoryFiltersProps["values"]["stock"]>(
    values.stock,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form
      action={action}
      method="get"
      className="flex flex-wrap items-center justify-end gap-2"
      onSubmit={() => setIsSubmitting(true)}
    >
      <input type="hidden" name="inventory" value={inventoryId} />
      <input type="hidden" name="status" value={status} />
      <input type="hidden" name="stock" value={stock} />

      <label htmlFor="inventory-query" className="sr-only">
        {data.searchAria}
      </label>
      <Input
        id="inventory-query"
        name="query"
        defaultValue={values.query}
        placeholder={data.searchPlaceholder}
        className="h-9 w-full border-white/10 bg-white/5 text-white placeholder:text-gray-500 sm:w-[220px]"
      />

      <label htmlFor="inventory-status" className="sr-only">
        {data.statusAria}
      </label>
      <Select
        value={status}
        onValueChange={(value) => setStatus(value as typeof status)}
      >
        <SelectTrigger
          id="inventory-status"
          className="h-9 min-h-9 border-white/10 bg-white/5 px-3 py-2 text-sm leading-none text-white sm:w-[140px]"
        >
          <SelectValue placeholder={data.status.placeholder} />
        </SelectTrigger>
        <SelectContent
          position="popper"
          side="bottom"
          sideOffset={-2}
          className="border-white/10 bg-[#111111] text-white"
        >
          <SelectItem value="all">{data.status.all}</SelectItem>
          <SelectItem value="active">{data.status.active}</SelectItem>
          <SelectItem value="inactive">{data.status.inactive}</SelectItem>
        </SelectContent>
      </Select>

      <label htmlFor="inventory-stock" className="sr-only">
        {data.stockAria}
      </label>
      <Select
        value={stock}
        onValueChange={(value) => setStock(value as typeof stock)}
      >
        <SelectTrigger
          id="inventory-stock"
          className="h-9 min-h-9 border-white/10 bg-white/5 px-3 py-2 text-sm leading-none text-white sm:w-[150px]"
        >
          <SelectValue placeholder={data.stock.placeholder} />
        </SelectTrigger>
        <SelectContent
          position="popper"
          side="bottom"
          sideOffset={-2}
          className="border-white/10 bg-[#111111] text-white"
        >
          <SelectItem value="all">{data.stock.all}</SelectItem>
          <SelectItem value="low">{data.stock.low}</SelectItem>
          <SelectItem value="out">{data.stock.out}</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" size="sm" disabled={isSubmitting} className="min-h-0 rounded-lg px-3 py-2">
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : data.apply}
      </Button>
      <Button
        asChild
        type="button"
        variant="ghost"
        size="sm"
        className="min-h-0 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white hover:bg-white/10 hover:text-white"
      >
        <Link href={resetHref}>{data.reset}</Link>
      </Button>
    </form>
  );
}
