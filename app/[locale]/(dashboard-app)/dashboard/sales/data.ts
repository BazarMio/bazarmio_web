import type { Lang } from "@/lib/types";

export type DashboardSalesPageData = {
  noInventory: {
    title: string;
    description: string;
  };
  titlePrefix: string;
  countSingular: string;
  countPlural: string;
  export: {
    label: string;
    tooltip: string;
  };
  table: {
    empty: string;
    columns: {
      date: string;
      amount: string;
      profit: string;
      items: string;
      payment: string;
      status: string;
      notes: string;
      emptyNotes: string;
    };
  };
  filters: {
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

export const dashboardSalesData: Record<Lang, DashboardSalesPageData> = {
  en: {
    noInventory: {
      title: "No inventory available",
      description:
        "Create and sync an inventory from the mobile app to review sales history, payment methods, and exportable reports.",
    },
    titlePrefix: "Sales in",
    countSingular: "sale",
    countPlural: "sales",
    export: {
      label: "Sales CSV",
      tooltip:
        "Exports sales for this inventory using the current date range, payment method, and status filters.",
    },
    table: {
      empty: "No sales matched the current filters.",
      columns: {
        date: "Date",
        amount: "Amount",
        profit: "Profit",
        items: "Items",
        payment: "Payment",
        status: "Status",
        notes: "Notes",
        emptyNotes: "-",
      },
    },
    filters: {
      startDate: "Start date",
      endDate: "End date",
      paymentMethodAria: "Payment method",
      statusAria: "Sale status",
      paymentMethod: {
        placeholder: "Payment method",
        all: "All methods",
        cash: "Cash",
        transfer: "Transfer",
        credit: "Credit",
      },
      status: {
        placeholder: "Status",
        all: "All",
        completed: "Completed",
        voided: "Voided",
        refunded: "Refunded",
      },
      apply: "Apply",
      reset: "Reset",
    },
  },
  es: {
    noInventory: {
      title: "No hay inventario disponible",
      description:
        "Crea y sincroniza un inventario desde la app movil para revisar historial de ventas, medios de pago y reportes exportables.",
    },
    titlePrefix: "Ventas en",
    countSingular: "venta",
    countPlural: "ventas",
    export: {
      label: "CSV ventas",
      tooltip:
        "Exporta las ventas de este inventario usando el rango de fechas, metodo de pago y estado actuales.",
    },
    table: {
      empty: "Ninguna venta coincide con los filtros actuales.",
      columns: {
        date: "Fecha",
        amount: "Monto",
        profit: "Ganancia",
        items: "Items",
        payment: "Pago",
        status: "Estado",
        notes: "Notas",
        emptyNotes: "-",
      },
    },
    filters: {
      startDate: "Fecha inicial",
      endDate: "Fecha final",
      paymentMethodAria: "Metodo de pago",
      statusAria: "Estado de venta",
      paymentMethod: {
        placeholder: "Metodo de pago",
        all: "Todos los metodos",
        cash: "Efectivo",
        transfer: "Transferencia",
        credit: "Credito",
      },
      status: {
        placeholder: "Estado",
        all: "Todos",
        completed: "Completadas",
        voided: "Anuladas",
        refunded: "Reembolsadas",
      },
      apply: "Aplicar",
      reset: "Resetear",
    },
  },
};
