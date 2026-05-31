"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type OverviewRevenueChartProps = {
  data: Array<{
    date: string;
    revenue: number;
    profit: number;
  }>;
  locale?: string;
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function OverviewRevenueChart({ data, locale = "en" }: OverviewRevenueChartProps) {
  const formatDate = (value: string) =>
    new Intl.DateTimeFormat(locale === "es" ? "es" : "en", {
      month: "short",
      day: "numeric",
    }).format(new Date(`${value}T00:00:00`));

  return (
    <div className="h-[380px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ left: 4, right: 4, top: 12, bottom: 0 }}>
          <defs>
            <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--bazarmio-lime)" stopOpacity={0.35} />
              <stop offset="95%" stopColor="var(--bazarmio-lime)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="profitFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--chart-2)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--chart-2)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            minTickGap={24}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            tickFormatter={formatDate}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            width={72}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            tickFormatter={(value: number) => formatCurrency(value)}
          />
          <Tooltip
            cursor={{ stroke: "rgba(255,255,255,0.12)", strokeWidth: 1 }}
            contentStyle={{
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "12px",
              color: "white",
            }}
            formatter={(value, name) => [formatCurrency(Number(value ?? 0)), name === "revenue" ? "Revenue" : "Profit"]}
            labelFormatter={(value) =>
              typeof value === "string" ? formatDate(value) : String(value ?? "")
            }
          />
          <Area
            type="monotone"
            dataKey="profit"
            stroke="var(--chart-2)"
            fill="url(#profitFill)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="var(--bazarmio-lime)"
            fill="url(#revenueFill)"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
