"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

type OverviewPaymentMethodChartProps = {
  data: Array<{
    paymentMethod: string;
    totalAmount: number;
    count: number;
    label: string;
  }>;
  labels: {
    amount: string;
    count: string;
  };
};

const CHART_COLORS = ["var(--bazarmio-lime)", "var(--chart-2)", "var(--chart-3)", "var(--chart-4)"];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function OverviewPaymentMethodChart({ data, labels }: OverviewPaymentMethodChartProps) {
  return (
    <div className="grid gap-4 xl:grid-cols-[180px_minmax(0,1fr)] xl:items-center">
      <div className="h-[180px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip
              contentStyle={{
                background: "#111111",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "12px",
                color: "white",
              }}
              formatter={(value, name, item) => {
                if (name === "totalAmount") {
                  return [formatCurrency(Number(value ?? 0)), labels.amount];
                }

                return [item.payload?.count ?? 0, labels.count];
              }}
              labelFormatter={(value) => String(value ?? "")}
            />
            <Pie
              data={data}
              dataKey="totalAmount"
              nameKey="label"
              innerRadius={52}
              outerRadius={76}
              paddingAngle={4}
              stroke="rgba(17,17,17,0.8)"
              strokeWidth={2}
            >
              {data.map((entry, index) => (
                <Cell key={entry.paymentMethod} fill={CHART_COLORS[index % CHART_COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-3">
        {data.map((entry, index) => (
          <div key={entry.paymentMethod} className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm">
            <div className="flex items-center gap-3">
              <span
                className="size-3 rounded-full"
                style={{ backgroundColor: CHART_COLORS[index % CHART_COLORS.length] }}
              />
              <div>
                <p className="font-medium text-white">{entry.label}</p>
                <p className="text-xs text-gray-400">{entry.count} {labels.count.toLowerCase()}</p>
              </div>
            </div>
            <span className="text-white">{formatCurrency(entry.totalAmount)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
