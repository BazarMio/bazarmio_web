import type { Lang } from "@/lib/types";

export const deleteAccountMetadata: Record<
  Lang,
  {
    title: string;
    description: string;
    keywords: string;
    openGraph: { title: string; description: string };
  }
> = {
  en: {
    title: "Delete Your Account & Data | BazarMio",
    description:
      "Your data, your control. Free users: uninstall and you're done. Premium: email us and we'll delete everything within 30 days.",
    keywords:
      "delete BazarMio account, delete data, account deletion, privacy, right to erasure, BazarMio",
    openGraph: {
      title: "Delete Your Account & Data | BazarMio",
      description:
        "Free users: uninstall to delete all data. Premium users: email support@bazarmio.com. Data deleted within 30 days.",
    },
  },
  es: {
    title: "Eliminar tu Cuenta y Datos | BazarMio",
    description:
      "Tus datos, tu control. Usuarios gratuitos: desinstala y listo. Premium: escríbenos y eliminamos todo en 30 días.",
    keywords:
      "eliminar cuenta BazarMio, eliminar datos, baja de cuenta, privacidad, derecho al olvido, BazarMio",
    openGraph: {
      title: "Eliminar tu Cuenta y Datos | BazarMio",
      description:
        "Usuarios gratuitos: desinstala la app. Usuarios premium: escribe a support@bazarmio.com. Datos eliminados en 30 días.",
    },
  },
};

export type DeleteAccountPageData = {
  title: string;
  intro: string;
  sections: {
    dataStorageTitle: string;
    freeUsers: {
      label: string;
      description: string;
    };
    premiumUsers: {
      label: string;
      description: string;
    };
    deletionStepsTitle: string;
    freeSteps: {
      title: string;
      steps: string[];
    };
    premiumSteps: {
      title: string;
      steps: string[];
      emailLabel: string;
      emailAddress: string;
    };
    retentionTitle: string;
    retentionBody: string;
    contactTitle: string;
    contactBody: string;
    contactEmail: string;
  };
};

export const deleteAccountData: Record<Lang, DeleteAccountPageData> = {
  en: {
    title: "Delete Your Account & Data",
    intro:
      "You have the right to request deletion of your data at any time. The process depends on whether you use the free or premium plan.",
    sections: {
      dataStorageTitle: "What data does BazarMio store?",
      freeUsers: {
        label: "Free Plan users",
        description:
          "All your data — inventory, sales, and settings — is stored exclusively on your device. BazarMio never sends this data to our servers. Uninstalling the app permanently deletes everything.",
      },
      premiumUsers: {
        label: "Premium / Synced users",
        description:
          "If you activated cloud sync, BazarMio stores your registered phone number and synced business data (inventory, sales history) on our servers so your data is accessible across devices.",
      },
      deletionStepsTitle: "How to delete your data",
      freeSteps: {
        title: "Free Plan",
        steps: [
          "Open your device settings.",
          'Find BazarMio under "Apps" or "Installed apps".',
          "Tap Uninstall.",
          "All data is immediately and permanently deleted from your device.",
        ],
      },
      premiumSteps: {
        title: "Premium Plan",
        steps: [
          "Send an email to the address below.",
          "Use the subject line: Account Deletion Request.",
          "Include the phone number registered with your BazarMio account.",
          "We will confirm receipt and process your request within 30 days.",
        ],
        emailLabel: "Email us at",
        emailAddress: "support@bazarmio.com",
      },
      retentionTitle: "Data retention",
      retentionBody:
        "Upon receiving a valid deletion request, we will permanently delete all associated account and business data from our servers within 30 days. You will receive a confirmation email once the deletion is complete.",
      contactTitle: "Questions?",
      contactBody:
        "If you have any questions about this process or your data rights, contact us at",
      contactEmail: "support@bazarmio.com",
    },
  },
  es: {
    title: "Eliminar tu Cuenta y Datos",
    intro:
      "Tienes el derecho de solicitar la eliminación de tus datos en cualquier momento. El proceso depende de si usas el plan gratuito o premium.",
    sections: {
      dataStorageTitle: "¿Qué datos almacena BazarMio?",
      freeUsers: {
        label: "Usuarios del Plan Gratuito",
        description:
          "Todos tus datos — inventario, ventas y configuración — se almacenan exclusivamente en tu dispositivo. BazarMio nunca envía estos datos a nuestros servidores. Desinstalar la app elimina todo de forma permanente.",
      },
      premiumUsers: {
        label: "Usuarios Premium / Sincronizados",
        description:
          "Si activaste la sincronización en la nube, BazarMio almacena tu número de teléfono registrado y los datos sincronizados de tu negocio (inventario, historial de ventas) en nuestros servidores para que puedas acceder desde varios dispositivos.",
      },
      deletionStepsTitle: "Cómo eliminar tus datos",
      freeSteps: {
        title: "Plan Gratuito",
        steps: [
          "Abre la configuración de tu dispositivo.",
          'Busca BazarMio en "Aplicaciones" o "Apps instaladas".',
          "Toca Desinstalar.",
          "Todos los datos se eliminan de forma inmediata y permanente de tu dispositivo.",
        ],
      },
      premiumSteps: {
        title: "Plan Premium",
        steps: [
          "Envía un correo electrónico a la dirección indicada abajo.",
          "Usa el asunto: Solicitud de eliminación de cuenta.",
          "Incluye el número de teléfono registrado en tu cuenta de BazarMio.",
          "Confirmaremos la recepción y procesaremos tu solicitud en un plazo de 30 días.",
        ],
        emailLabel: "Escríbenos a",
        emailAddress: "support@bazarmio.com",
      },
      retentionTitle: "Retención de datos",
      retentionBody:
        "Al recibir una solicitud de eliminación válida, eliminaremos de forma permanente todos los datos de la cuenta y del negocio de nuestros servidores en un plazo de 30 días. Recibirás un correo de confirmación una vez completada la eliminación.",
      contactTitle: "¿Tienes preguntas?",
      contactBody:
        "Si tienes preguntas sobre este proceso o tus derechos sobre los datos, contáctanos en",
      contactEmail: "support@bazarmio.com",
    },
  },
};
