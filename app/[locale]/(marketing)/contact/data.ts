import type { Lang } from "@/lib/types";

export const contactMetadata: Record<
  Lang,
  {
    title: string;
    description: string;
    keywords: string;
    openGraph: { title: string; description: string };
  }
> = {
  en: {
    title: "Contact BazarMio — Support, Privacy & Account Help",
    description:
      "Need help with BazarMio? Contact our team for app support, billing questions, privacy requests, or account deletion. We respond to every message.",
    keywords:
      "contact BazarMio, BazarMio support, Mio Labs contact, inventory app support, delete BazarMio account, BazarMio help, small business app support",
    openGraph: {
      title: "Contact BazarMio — We're Here to Help",
      description:
        "Reach the BazarMio team for support, billing, or privacy requests. One inbox, one team — we respond to every message.",
    },
  },
  es: {
    title: "Contacto BazarMio — Soporte, Privacidad y Ayuda con tu Cuenta",
    description:
      "¿Necesitas ayuda con BazarMio? Escríbenos para soporte técnico, preguntas de facturación, solicitudes de privacidad o eliminación de cuenta. Respondemos a cada mensaje.",
    keywords:
      "contactar BazarMio, soporte BazarMio, ayuda BazarMio Ecuador, Mio Labs contacto, eliminar cuenta BazarMio, app inventario Ecuador, soporte app bodega",
    openGraph: {
      title: "Contacto BazarMio — Estamos para Ayudarte",
      description:
        "Escríbenos para soporte, facturación o solicitudes de privacidad. Un solo correo, un solo equipo — respondemos a cada mensaje.",
    },
  },
};

export type ContactPageData = {
  title: string;
  intro: string;
  contactLabel: string;
  email: string;
  emailDescription: string;
  deleteAccountLabel: string;
  deleteAccountDescription: string;
  deleteAccountLink: string;
};

export const contactData: Record<Lang, ContactPageData> = {
  en: {
    title: "Contact Us",
    intro:
      "Have a question or need help? Reach out directly — we read every message and respond within 1 business day.",
    contactLabel: "Email us",
    email: "support@bazarmio.com",
    emailDescription:
      "For app support, billing, privacy requests, or account deletion — one inbox, one team.",
    deleteAccountLabel: "Need to delete your account?",
    deleteAccountDescription:
      "View our step-by-step guide explaining what data gets deleted, what's retained, and how to submit your request.",
    deleteAccountLink: "Go to account deletion guide →",
  },
  es: {
    title: "Contáctanos",
    intro:
      "¿Tienes una pregunta o necesitas ayuda? Escríbenos directamente — leemos cada mensaje y respondemos en un día hábil.",
    contactLabel: "Escríbenos",
    email: "support@bazarmio.com",
    emailDescription:
      "Para soporte técnico, facturación, solicitudes de privacidad o eliminación de cuenta — un solo correo, un solo equipo.",
    deleteAccountLabel: "¿Necesitas eliminar tu cuenta?",
    deleteAccountDescription:
      "Consulta nuestra guía paso a paso: qué datos se eliminan, cuáles se conservan y cómo enviar tu solicitud.",
    deleteAccountLink: "Ir a la guía de eliminación de cuenta →",
  },
};
