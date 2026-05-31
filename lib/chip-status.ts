export type StatusTone = "success" | "danger" | "warning" | "neutral";

export type SaleStatusLabels = {
  completed: string;
  refunded: string;
  voided: string;
};

export function getSaleStatusDisplay(
  status: string,
  labels: SaleStatusLabels,
): { label: string; tone: StatusTone } {
  switch (status) {
    case "completed":
      return { label: labels.completed, tone: "success" };
    case "refunded":
      return { label: labels.refunded, tone: "danger" };
    case "voided":
      return { label: labels.voided, tone: "warning" };
    default:
      return { label: status, tone: "neutral" };
  }
}
