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

type SalesFiltersProps = {
  action: string;
  inventoryId: string;
  values: {
    startDate: string;
    endDate: string;
    paymentMethod: "all" | "efectivo" | "transferencia" | "credito";
    status: "all" | "completed" | "voided" | "refunded";
  };
  resetHref: string;
  data: {
    startDate: string;
    endDate: string;
    paymentMethodAria: string;
    statusAria: string;
    paymentMethod: {
      placeholder: string;
      all: string;
      cash: string;
      transfer: string;
      credit: string;
    };
    status: {
      placeholder: string;
      all: string;
      completed: string;
      voided: string;
      refunded: string;
    };
    apply: string;
    reset: string;
  };
};

export function SalesFilters({ action, inventoryId, values, resetHref, data }: SalesFiltersProps) {
  const [paymentMethod, setPaymentMethod] = useState<SalesFiltersProps["values"]["paymentMethod"]>(
    values.paymentMethod,
  );
  const [status, setStatus] = useState<SalesFiltersProps["values"]["status"]>(values.status);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form action={action} method="get" className="flex flex-wrap items-center justify-end gap-2" onSubmit={() => setIsSubmitting(true)}>
      <input type="hidden" name="inventory" value={inventoryId} />
      <input type="hidden" name="paymentMethod" value={paymentMethod} />
      <input type="hidden" name="status" value={status} />

      <label htmlFor="sales-start-date" className="sr-only">
        {data.startDate}
      </label>
      <Input
        id="sales-start-date"
        name="startDate"
        type="date"
        defaultValue={values.startDate}
        className="h-9 border-white/10 bg-white/5 text-white sm:w-[150px]"
      />

      <label htmlFor="sales-end-date" className="sr-only">
        {data.endDate}
      </label>
      <Input
        id="sales-end-date"
        name="endDate"
        type="date"
        defaultValue={values.endDate}
        className="h-9 border-white/10 bg-white/5 text-white sm:w-[150px]"
      />

      <label htmlFor="sales-payment-method" className="sr-only">
        {data.paymentMethodAria}
      </label>
      <Select value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as typeof paymentMethod)}>
        <SelectTrigger
          id="sales-payment-method"
          className="h-9 min-h-9 border-white/10 bg-white/5 px-3 py-2 text-sm leading-none text-white sm:w-[155px]"
        >
          <SelectValue placeholder={data.paymentMethod.placeholder} />
        </SelectTrigger>
        <SelectContent position="popper" side="bottom" sideOffset={6} className="border-white/10 bg-[#111111] text-white">
          <SelectItem value="all">{data.paymentMethod.all}</SelectItem>
          <SelectItem value="efectivo">{data.paymentMethod.cash}</SelectItem>
          <SelectItem value="transferencia">{data.paymentMethod.transfer}</SelectItem>
          <SelectItem value="credito">{data.paymentMethod.credit}</SelectItem>
        </SelectContent>
      </Select>

      <label htmlFor="sales-status" className="sr-only">
        {data.statusAria}
      </label>
      <Select value={status} onValueChange={(value) => setStatus(value as typeof status)}>
        <SelectTrigger
          id="sales-status"
          className="h-9 min-h-9 border-white/10 bg-white/5 px-3 py-2 text-sm leading-none text-white sm:w-[145px]"
        >
          <SelectValue placeholder={data.status.placeholder} />
        </SelectTrigger>
        <SelectContent position="popper" side="bottom" sideOffset={6} className="border-white/10 bg-[#111111] text-white">
          <SelectItem value="all">{data.status.all}</SelectItem>
          <SelectItem value="completed">{data.status.completed}</SelectItem>
          <SelectItem value="voided">{data.status.voided}</SelectItem>
          <SelectItem value="refunded">{data.status.refunded}</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" size="sm" disabled={isSubmitting} className="min-h-0 rounded-lg px-3 py-2">
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : data.apply}
      </Button>
      <Button asChild type="button" variant="ghost" size="sm" className="min-h-0 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white hover:bg-white/10 hover:text-white">
        <Link href={resetHref}>{data.reset}</Link>
      </Button>
    </form>
  );
}
