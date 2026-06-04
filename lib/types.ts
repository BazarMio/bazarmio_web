export type Lang = "en" | "es";

export type DashboardMode = "live" | "archive";

export type DashboardInventorySummary = {
  id: string;
  name: string;
  description: string;
  colorHex: string;
  iconName: string;
};

export type DashboardBootstrap = {
  user: {
    id: string;
    phoneNumber: string;
    fullName: string;
    email: string | null;
    businessName: string | null;
  };
  dashboard: {
    mode: DashboardMode;
    syncEligible: boolean;
    syncEnabled: boolean;
    subscriptionTier: string;
    subscriptionStatus: string;
    lastSyncedAt: string | null;
  };
  inventories: DashboardInventorySummary[];
  selectedInventoryId: string | null;
};

export type DashboardOverviewResponse = {
  inventory: {
    id: string;
    name: string;
  };
  range: {
    startDate: string;
    endDate: string;
  };
  summary: {
    totalRevenue: number;
    totalProfit: number;
    totalTransactions: number;
    avgTransactionValue: number;
    profitMargin: number;
    totalItemsSold: number;
  };
  stock: {
    lowStockCount: number;
    outOfStockCount: number;
  };
  dailySales: Array<{
    date: string;
    revenue: number;
    profit: number;
    count: number;
  }>;
  topProducts: Array<{
    productId: string;
    name: string;
    revenue: number;
    profit: number;
    quantitySold: number;
  }>;
  topCategories: Array<{
    categoryId: string | null;
    name: string;
    revenue: number;
    profit: number;
    quantitySold: number;
  }>;
  paymentMethodBreakdown: Array<{
    paymentMethod: string;
    totalAmount: number;
    count: number;
  }>;
  recentSales: Array<{
    id: string;
    createdAt: string;
    totalAmount: number;
    totalProfit: number;
    itemCount: number;
    paymentMethod: string;
    status: string;
  }>;
};

export type DashboardProductsResponse = {
  inventory: {
    id: string;
    name: string;
  };
  filters: {
    query: string | null;
    status: "active" | "inactive" | "all";
    stock: "all" | "low" | "out";
  };
  items: Array<{
    id: string;
    name: string;
    description: string;
    sku: string | null;
    categoryName: string | null;
    currentStock: number;
    minStock: number;
    unit: string;
    defaultPrice: number;
    costPrice: number;
    isActive: boolean;
    isLowStock: boolean;
    isOutOfStock: boolean;
  }>;
  meta: {
    page: number;
    pageSize: number;
    total: number;
    pageCount: number;
  };
};

export type DashboardSalesResponse = {
  inventory: {
    id: string;
    name: string;
  };
  filters: {
    startDate: string;
    endDate: string;
    paymentMethod: string | null;
    status: "all" | "completed" | "voided" | "refunded";
  };
  items: Array<{
    id: string;
    createdAt: string;
    totalAmount: number;
    totalProfit: number;
    itemCount: number;
    paymentMethod: string;
    status: string;
    notes: string;
  }>;
  meta: {
    page: number;
    pageSize: number;
    total: number;
    pageCount: number;
  };
};

export type UserProfile = {
  id: string;
  updatedAt: string;
  phoneNumber: string;
  fullName: string;
  email: string | null;
  locale: "en" | "es";
  businessName: string | null;
  subscriptionTier: string;
  subscriptionStatus: string;
  subscriptionStartedAt: string | null;
  subscriptionExpiresAt: string | null;
  maxInventories: number;
  analyticsRangeDays: number;
  syncEnabled: boolean;
};

export type GetMeResponse = {
  user: UserProfile;
};
