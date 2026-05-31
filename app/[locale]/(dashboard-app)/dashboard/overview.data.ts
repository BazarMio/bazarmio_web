import type { Lang } from "@/lib/types";

export type DashboardOverviewPageData = {
  noInventory: {
    title: string;
    description: string;
  };
  summary: {
    revenue: string;
    profit: string;
    transactions: string;
    avgTicket: string;
    tooltips: {
      revenue: string;
      profit: string;
      transactions: string;
      avgTicket: string;
    };
  };
  dailySales: {
    title: string;
    defaultRange: string;
    rangePrefix: string;
    emptyTitle: string;
    emptyDescription: string;
  };
  overviewFilters: {
    startDate: string;
    endDate: string;
    apply: string;
    reset: string;
  };
  inventoryHealth: {
    title: string;
    lowStock: string;
    outOfStock: string;
    tooltip: string;
  };
  topProducts: {
    title: string;
    columns: {
      product: string;
      unitsSold: string;
      revenue: string;
    };
    emptyTitle: string;
    emptyDescription: string;
  };
  paymentMethods: {
    title: string;
    emptyTitle: string;
    emptyDescription: string;
    amountLabel: string;
    countLabel: string;
    methods: {
      efectivo: string;
      transferencia: string;
      credito: string;
      fallback: string;
    };
  };
  topCategories: {
    title: string;
    soldSuffix: string;
    revenueLabel: string;
    profitLabel: string;
    quantityLabel: string;
    emptyTitle: string;
    emptyDescription: string;
  };
  recentSales: {
    title: string;
    columns: {
      date: string;
      amount: string;
      profit: string;
      items: string;
      status: string;
    };
    statuses: {
      completed: string;
      refunded: string;
      voided: string;
    };
    empty: string;
  };
};

export const dashboardOverviewData: Record<Lang, DashboardOverviewPageData> = {
  en: {
    noInventory: {
      title: "No inventory available",
      description:
        "Create and sync an inventory from the mobile app to populate the dashboard. Once your phone uploads data, reports and exports will appear here.",
    },
    summary: {
      revenue: "Revenue",
      profit: "Profit",
      transactions: "Transactions",
      avgTicket: "Avg. ticket",
      tooltips: {
        revenue: "Total money generated from completed sales in the selected date range.",
        profit: "Money left after subtracting product cost from completed sales.",
        transactions: "Number of completed sales recorded in the selected date range.",
        avgTicket: "Average value of each completed sale in the selected date range.",
      },
    },
    dailySales: {
      title: "Daily sales snapshot",
      defaultRange: "Last 30 days by default",
      rangePrefix: "Range",
      emptyTitle: "No sales in this range",
      emptyDescription:
        "Adjust the dates or keep the default range to compare revenue and profit over time.",
    },
    overviewFilters: {
      startDate: "Start date",
      endDate: "End date",
      apply: "Apply",
      reset: "Reset",
    },
    inventoryHealth: {
      title: "Inventory health",
      lowStock: "Low stock",
      outOfStock: "Out of stock",
      tooltip: "Snapshot of active products currently below their minimum stock level or already out of stock.",
    },
    topProducts: {
      title: "Top products",
      columns: {
        product: "Product",
        unitsSold: "Units sold",
        revenue: "Revenue",
      },
      emptyTitle: "No top products yet",
      emptyDescription:
        "Once sales land in this date range, your highest-grossing products will appear here.",
    },
    paymentMethods: {
      title: "Payment methods",
      emptyTitle: "No payment breakdown yet",
      emptyDescription:
        "Completed sales in the selected range will show how revenue is split by payment method.",
      amountLabel: "Amount",
      countLabel: "Transactions",
      methods: {
        efectivo: "Cash",
        transferencia: "Transfer",
        credito: "Credit",
        fallback: "Other",
      },
    },
    topCategories: {
      title: "Top categories",
      soldSuffix: "sold",
      revenueLabel: "Revenue",
      profitLabel: "Profit",
      quantityLabel: "Units sold",
      emptyTitle: "No category trends yet",
      emptyDescription:
        "Category rankings will appear once the selected range has completed sales.",
    },
    recentSales: {
      title: "Recent sales",
      columns: {
        date: "Date",
        amount: "Amount",
        profit: "Profit",
        items: "Items",
        status: "Status",
      },
      statuses: {
        completed: "Completed",
        refunded: "Refunded",
        voided: "Voided",
      },
      empty: "No recent sales available for this inventory yet.",
    },
  },
  es: {
    noInventory: {
      title: "No hay inventario disponible",
      description:
        "Crea y sincroniza un inventario desde la app movil para poblar el dashboard. Cuando tu telefono suba datos, los reportes y exportaciones apareceran aqui.",
    },
    summary: {
      revenue: "Ingresos",
      profit: "Ganancia",
      transactions: "Transacciones",
      avgTicket: "Ticket prom.",
      tooltips: {
        revenue: "Dinero total generado por ventas completadas en el rango de fechas seleccionado.",
        profit: "Dinero que queda despues de restar el costo de producto a las ventas completadas.",
        transactions: "Numero de ventas completadas registradas en el rango de fechas seleccionado.",
        avgTicket: "Valor promedio de cada venta completada en el rango de fechas seleccionado.",
      },
    },
    dailySales: {
      title: "Resumen diario de ventas",
      defaultRange: "Ultimos 30 dias por defecto",
      rangePrefix: "Rango",
      emptyTitle: "No hay ventas en este rango",
      emptyDescription:
        "Ajusta las fechas o deja el rango por defecto para comparar ingresos y ganancia a lo largo del tiempo.",
    },
    overviewFilters: {
      startDate: "Fecha inicial",
      endDate: "Fecha final",
      apply: "Aplicar",
      reset: "Resetear",
    },
    inventoryHealth: {
      title: "Salud del inventario",
      lowStock: "Stock bajo",
      outOfStock: "Sin stock",
      tooltip: "Resumen de productos activos que estan por debajo del stock minimo o ya estan sin stock.",
    },
    topProducts: {
      title: "Productos destacados",
      columns: {
        product: "Producto",
        unitsSold: "Unidades vendidas",
        revenue: "Ingresos",
      },
      emptyTitle: "Aun no hay productos destacados",
      emptyDescription:
        "Cuando existan ventas en este rango, aqui apareceran tus productos con mayor ingreso.",
    },
    paymentMethods: {
      title: "Metodos de pago",
      emptyTitle: "Aun no hay desglose por pago",
      emptyDescription:
        "Las ventas completadas en el rango seleccionado mostraran como se reparten los ingresos por metodo de pago.",
      amountLabel: "Monto",
      countLabel: "Transacciones",
      methods: {
        efectivo: "Efectivo",
        transferencia: "Transferencia",
        credito: "Credito",
        fallback: "Otro",
      },
    },
    topCategories: {
      title: "Categorias destacadas",
      soldSuffix: "vendidos",
      revenueLabel: "Ingresos",
      profitLabel: "Ganancia",
      quantityLabel: "Unidades vendidas",
      emptyTitle: "Aun no hay tendencias por categoria",
      emptyDescription:
        "El ranking por categorias aparecera cuando el rango seleccionado tenga ventas completadas.",
    },
    recentSales: {
      title: "Ventas recientes",
      columns: {
        date: "Fecha",
        amount: "Monto",
        profit: "Ganancia",
        items: "Items",
        status: "Estado",
      },
      statuses: {
        completed: "Completada",
        refunded: "Reembolsada",
        voided: "Anulada",
      },
      empty: "Aun no hay ventas recientes para este inventario.",
    },
  },
};
