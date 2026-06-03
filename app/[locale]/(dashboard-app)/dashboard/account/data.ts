import type { Lang } from "@/lib/types";

export type DashboardAccountPageData = {
  error: {
    title: string;
    description: string;
  };
  profile: {
    title: string;
    fullName: string;
    phoneNumber: string;
    email: string;
    businessName: string;
  };
  plan: {
    title: string;
    dashboardMode: string;
    subscription: string;
    syncEnabled: string;
    inventoryLimit: string;
    analyticsRange: string;
    yes: string;
    no: string;
    daysSuffix: string;
  };
  snapshot: {
    title: string;
    lastSynced: string;
    neverSynced: string;
    archiveNote: string;
  };
};

export const dashboardAccountData: Record<Lang, DashboardAccountPageData> = {
  en: {
    error: {
      title: "Unable to load account",
      description: "There was a problem loading your account data. Please try refreshing.",
    },
    profile: {
      title: "Profile details",
      fullName: "Full name",
      phoneNumber: "Phone number",
      email: "Email",
      businessName: "Business name",
    },
    plan: {
      title: "Plan and sync",
      dashboardMode: "Dashboard mode",
      subscription: "Subscription",
      syncEnabled: "Sync enabled",
      inventoryLimit: "Inventory limit",
      analyticsRange: "Analytics range",
      yes: "Yes",
      no: "No",
      daysSuffix: "days",
    },
    snapshot: {
      title: "Cloud snapshot",
      lastSynced: "Last synced",
      neverSynced: "Never synced",
      archiveNote:
        "Web dashboard access remains available as archive mode even after premium ends.",
    },
  },
  es: {
    error: {
      title: "No se pudo cargar la cuenta",
      description: "Hubo un problema al cargar los datos de tu cuenta. Por favor, intenta actualizar la pagina.",
    },
    profile: {
      title: "Detalles del perfil",
      fullName: "Nombre completo",
      phoneNumber: "Numero de telefono",
      email: "Correo",
      businessName: "Nombre del negocio",
    },
    plan: {
      title: "Plan y sync",
      dashboardMode: "Modo dashboard",
      subscription: "Suscripcion",
      syncEnabled: "Sync habilitado",
      inventoryLimit: "Limite de inventarios",
      analyticsRange: "Rango de analiticas",
      yes: "Si",
      no: "No",
      daysSuffix: "dias",
    },
    snapshot: {
      title: "Captura cloud",
      lastSynced: "Ultima sincronizacion",
      neverSynced: "Nunca sincronizado",
      archiveNote:
        "El acceso web al dashboard sigue disponible en modo archivo incluso despues de que termine premium.",
    },
  },
};
