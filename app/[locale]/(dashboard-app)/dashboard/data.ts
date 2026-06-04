import type { Lang } from "@/lib/types";

export type DashboardShellData = {
  dashboardLabel: string;
  inventorySectionLabel: string;
  chooseInventory: string;
  noInventories: string;
  noInventorySelected: string;
  mobileNavigationDescription: string;
  openNavigationLabel: string;
  languageLabel: string;
  lastSyncedLabel: string;
  neverSynced: string;
  nav: {
    overview: string;
    inventory: string;
    sales: string;
    account: string;
  };
  pageTitles: {
    overview: string;
    inventory: string;
    sales: string;
    account: string;
  };
  sync: {
    live: string;
    archive: string;
    synced: string;
    syncOff: string;
    syncExpired: string;
  };
  accountMenu: {
    fallbackAccount: string;
    accountSettings: string;
    signOut: string;
    signingOut: string;
    followBrand: string;
  };
  archiveBanner: {
    syncDisabled: string;
    expired: string;
  };
};

export const dashboardShellData: Record<Lang, DashboardShellData> = {
  en: {
    dashboardLabel: "Dashboard",
    inventorySectionLabel: "Inventory",
    chooseInventory: "Choose inventory",
    noInventories: "No inventories yet",
    noInventorySelected: "No inventory selected",
    mobileNavigationDescription: "Dashboard navigation and inventory switcher.",
    openNavigationLabel: "Open dashboard navigation",
    languageLabel: "Language",
    lastSyncedLabel: "Last synced",
    neverSynced: "Never synced",
    nav: {
      overview: "Overview",
      inventory: "Inventory",
      sales: "Sales",
      account: "Account",
    },
    pageTitles: {
      overview: "Overview",
      inventory: "Inventory",
      sales: "Sales",
      account: "Account",
    },
    sync: {
      live: "Live",
      archive: "Archive",
      synced: "Synced",
      syncOff: "Sync Off",
      syncExpired: "Sync Expired",
    },
    accountMenu: {
      fallbackAccount: "BazarMio account",
      accountSettings: "Account settings",
      signOut: "Sign out",
      signingOut: "Signing out...",
      followBrand: "Follow BazarMio",
    },
    archiveBanner: {
      syncDisabled:
        "Cloud sync is off for this account. The dashboard shows the latest snapshot already uploaded to BazarMio cloud.",
      expired:
        "You are viewing your latest synced cloud snapshot. Resubscribe to refresh this dashboard with new phone activity.",
    },
  },
  es: {
    dashboardLabel: "Dashboard",
    inventorySectionLabel: "Inventario",
    chooseInventory: "Elegir inventario",
    noInventories: "Aun no hay inventarios",
    noInventorySelected: "Ningun inventario seleccionado",
    mobileNavigationDescription: "Navegacion del dashboard y selector de inventario.",
    openNavigationLabel: "Abrir navegacion del dashboard",
    languageLabel: "Idioma",
    lastSyncedLabel: "Ultima sincronizacion",
    neverSynced: "Nunca sincronizado",
    nav: {
      overview: "Resumen",
      inventory: "Inventario",
      sales: "Ventas",
      account: "Cuenta",
    },
    pageTitles: {
      overview: "Resumen",
      inventory: "Inventario",
      sales: "Ventas",
      account: "Cuenta",
    },
    sync: {
      live: "Activo",
      archive: "Archivo",
      synced: "Sincronizado",
      syncOff: "Sync apagado",
      syncExpired: "Sync vencido",
    },
    accountMenu: {
      fallbackAccount: "Cuenta de BazarMio",
      accountSettings: "Configuracion de cuenta",
      signOut: "Cerrar sesion",
      signingOut: "Cerrando sesion...",
      followBrand: "Sigue a BazarMio",
    },
    archiveBanner: {
      syncDisabled:
        "La sincronizacion cloud esta apagada para esta cuenta. El dashboard muestra la ultima captura ya subida a BazarMio cloud.",
      expired:
        "Estas viendo tu ultima captura cloud sincronizada. Vuelve a suscribirte para refrescar este dashboard con nueva actividad del telefono.",
    },
  },
};
