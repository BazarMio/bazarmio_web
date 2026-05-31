"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type OverviewCategoryChartProps = {
  data: Array<{
    categoryId: string | null;
    name: string;
    revenue: number;
    profit: number;
    quantitySold: number;
  }>;
  labels: {
    revenue: string;
    profit: string;
    quantity: string;
  };
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function OverviewCategoryChart({ data, labels }: OverviewCategoryChartProps) {
  return (
    <div className="h-full min-h-[320px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 24, right: 8, top: 8, bottom: 0 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" horizontal={false} />
          <XAxis
            type="number"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            tickFormatter={(value: number) => formatCurrency(value)}
          />
          <YAxis
            type="category"
            dataKey="name"
            tickLine={false}
            axisLine={false}
            width={110}
            tick={{ fill: "#d1d5db", fontSize: 12 }}
          />
          <Tooltip
            cursor={{ fill: "rgba(255,255,255,0.04)" }}
            contentStyle={{
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "12px",
              color: "white",
            }}
            formatter={(value, name, item) => {
              if (name === "revenue") {
                return [formatCurrency(Number(value ?? 0)), labels.revenue];
              }

              if (name === "profit") {
                return [formatCurrency(Number(value ?? 0)), labels.profit];
              }

              return [item.payload?.quantitySold ?? 0, labels.quantity];
            }}
            labelFormatter={(value) => String(value ?? "")}
          />
          <Bar dataKey="revenue" fill="var(--bazarmio-lime)" radius={[0, 8, 8, 0]} barSize={18} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
