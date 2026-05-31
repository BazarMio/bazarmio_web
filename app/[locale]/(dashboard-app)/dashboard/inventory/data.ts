import type { Lang } from "@/lib/types";

export type DashboardInventoryPageData = {
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
      product: string;
      category: string;
      stock: string;
      minStock: string;
      price: string;
      cost: string;
      status: string;
      noSku: string;
      uncategorized: string;
      outOfStock: string;
      lowStock: string;
      active: string;
      inactive: string;
    };
  };
  filters: {
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

export const dashboardInventoryData: Record<Lang, DashboardInventoryPageData> = {
  en: {
    noInventory: {
      title: "No inventory available",
      description:
        "Create and sync an inventory from the mobile app to review product counts, stock status, and CSV exports here.",
    },
    titlePrefix: "Products in",
    countSingular: "product",
    countPlural: "products",
    export: {
      label: "Inventory CSV",
      tooltip:
        "Exports the current inventory snapshot for this selected inventory. Search and stock filters do not change the inventory CSV yet.",
    },
    table: {
      empty: "No products matched the current filters.",
      columns: {
        product: "Product",
        category: "Category",
        stock: "Stock",
        minStock: "Min stock",
        price: "Price",
        cost: "Cost",
        status: "Status",
        noSku: "No SKU",
        uncategorized: "Uncategorized",
        outOfStock: "Out of stock",
        lowStock: "Low stock",
        active: "Active",
        inactive: "Inactive",
      },
    },
    filters: {
      searchAria: "Search products",
      searchPlaceholder: "Search products",
      statusAria: "Product status",
      stockAria: "Stock status",
      status: {
        placeholder: "Status",
        all: "All",
        active: "Active",
        inactive: "Inactive",
      },
      stock: {
        placeholder: "Stock",
        all: "All stock",
        low: "Low stock",
        out: "Out of stock",
      },
      apply: "Apply",
      reset: "Reset",
    },
  },
  es: {
    noInventory: {
      title: "No hay inventario disponible",
      description:
        "Crea y sincroniza un inventario desde la app movil para revisar aqui cantidades de productos, estado del stock y exportaciones CSV.",
    },
    titlePrefix: "Productos en",
    countSingular: "producto",
    countPlural: "productos",
    export: {
      label: "CSV inventario",
      tooltip:
        "Exporta la captura actual del inventario seleccionado. La busqueda y los filtros de stock todavia no cambian este CSV.",
    },
    table: {
      empty: "Ningun producto coincide con los filtros actuales.",
      columns: {
        product: "Producto",
        category: "Categoria",
        stock: "Stock",
        minStock: "Stock min.",
        price: "Precio",
        cost: "Costo",
        status: "Estado",
        noSku: "Sin SKU",
        uncategorized: "Sin categoria",
        outOfStock: "Sin stock",
        lowStock: "Stock bajo",
        active: "Activo",
        inactive: "Inactivo",
      },
    },
    filters: {
      searchAria: "Buscar productos",
      searchPlaceholder: "Buscar productos",
      statusAria: "Estado del producto",
      stockAria: "Estado del stock",
      status: {
        placeholder: "Estado",
        all: "Todos",
        active: "Activos",
        inactive: "Inactivos",
      },
      stock: {
        placeholder: "Stock",
        all: "Todo stock",
        low: "Stock bajo",
        out: "Sin stock",
      },
      apply: "Aplicar",
      reset: "Resetear",
    },
  },
};
