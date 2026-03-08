import { Lang } from "@/lib/types";

type PolicySection = {
  title: string;
  content: string | string[];
  subsections?: PolicySection[];
};

type PrivacyPolicyData = {
  title: string;
  effectiveDate: string;
  intro: string;
  corePrinciple: string;
  sections: PolicySection[];
};

export const privacyPolicyData: { [key in Lang]: PrivacyPolicyData } = {
  en: {
    title: "Privacy Policy",
    effectiveDate: "Effective Date: March 8, 2026",
    intro:
      "This Privacy Policy explains how Mio Labs LLC collects, uses, stores, and protects your personal information in connection with the BazarMio mobile application. We comply with Ecuador's Ley Orgánica de Protección de Datos Personales (LOPDP) and applicable US privacy laws.",
    corePrinciple:
      "Core principle: if you use the Free Plan, Mio Labs collects zero personal data. Everything stays on your device, completely private.",
    sections: [
      {
        title: "1. Data Controller",
        content: [
          "Mio Labs LLC is the controller of your personal data.",
          "Contact: support@bazarmio.com",
        ],
      },
      {
        title: "2. Data Collection by Plan",
        content: "",
        subsections: [
          {
            title: "Free Plan — Zero data collection",
            content: [
              "Free Plan users enjoy complete privacy. The App works entirely offline (offline-first): all your inventories, products, and sales are stored exclusively on your device using SQLite. Mio Labs has no access to this information, does not transmit it, and does not collect it under any circumstances.",
              "No personal data is collected",
              "No data is transmitted to external servers",
              "No online account or registration required",
              "Your business data is entirely yours and stays on your device",
            ],
          },
          {
            title: "Premium Plan — Collection with explicit consent",
            content: [
              "Cloud synchronization is an exclusive Premium Plan feature and is entirely optional. You decide whether to enable it. Only when you choose to activate sync does Mio Labs collect the following data:",
              "Phone number for SMS authentication",
              "Inventory and sales data that you choose to sync",
              "Device identifier to manage synchronization",
              "App version and operating system (for technical support)",
            ],
          },
          {
            title: "Data we NEVER collect (on any plan)",
            content: [
              "Credit card or banking data (processed directly by Google Play)",
              "Biometric data",
              "Geographic location",
              "Content of personal communications",
            ],
          },
        ],
      },
      {
        title: "3. Purposes of Processing",
        content: [
          "Applicable only to Premium users who activate cloud synchronization:",
          "Secure data synchronization between your devices",
          "Technical support and customer service",
          "Subscription management through Google Play",
          "Compliance with legal obligations",
          "We do not use your data for third-party advertising or sell it under any circumstances.",
        ],
      },
      {
        title: "4. Legal Basis for Processing",
        content: [
          "Contract performance: to provide the cloud sync you request (Premium only)",
          "Explicit consent: you voluntarily activate synchronization",
          "Legal compliance: when required by law",
        ],
      },
      {
        title: "5. Data Storage",
        content: "",
        subsections: [
          {
            title: "5.1 Free Plan — Local storage only",
            content:
              "Everything stays on your device. BazarMio uses SQLite within the secure sandbox of the Android operating system. Neither Mio Labs nor any third party has access to this data. If you uninstall the App or reset your device, the data is permanently deleted, because it never existed on any server.",
          },
          {
            title: "5.2 Premium Plan — Cloud synchronization (optional)",
            content:
              "If you activate synchronization, your data is stored on secure servers located in South America (São Paulo, Brazil region). You can disable synchronization at any time from the App settings, at which point your data will stop being transmitted and you may request deletion of your cloud copy.",
          },
        ],
      },
      {
        title: "6. Data Retention",
        content: [
          "Active account data: throughout the life of your account",
          "Sales and inventory data: minimum 7 years to comply with fiscal requirements",
          "Support records: 2 years from last interaction",
          "You may request deletion of your data by emailing support@bazarmio.com. We will process your request within 30 days, subject to legal retention obligations.",
        ],
      },
      {
        title: "7. Your Rights",
        content: [
          "Under the LOPDP and applicable US privacy laws, you have the right to:",
          "Access: request a copy of the personal data we hold about you",
          "Rectification: correct inaccurate or incomplete data",
          "Erasure: request deletion of your data (subject to legal exceptions)",
          "Portability: receive your data in a structured, machine-readable format",
          "Objection: object to processing of your data for certain purposes",
          "Restriction: request restriction of processing in certain cases",
          "We will respond within the 15 business days established by the LOPDP. If you believe your rights have not been addressed, you may file a complaint with Ecuador's Superintendencia de Protección de Datos Personales.",
        ],
      },
      {
        title: "8. Data Security",
        content: [
          "Local storage within the device's secure sandbox",
          "Short-lived JWT tokens for authentication (future versions)",
          "HTTPS encrypted communications with the server (future versions)",
          "Internal access controls to production data",
          "We recommend protecting your device with a PIN or fingerprint.",
        ],
      },
      {
        title: "9. Minors",
        content:
          "BazarMio is not directed at persons under 18 years of age. We do not intentionally collect personal data from minors. If you are a parent or guardian and believe your child has provided data to the App, contact us at support@bazarmio.com.",
      },
      {
        title: "10. International Transfers",
        content:
          "As Mio Labs LLC is a US company, your data may be processed on servers in the United States or South America. For international transfers, we ensure appropriate safeguards under the LOPDP, including standard contractual clauses where necessary.",
      },
      {
        title: "11. Cookies and Similar Technologies",
        content:
          "The BazarMio mobile app does not use cookies. We use SharedPreferences and local SQLite storage to save App preferences and data on your device.",
      },
      {
        title: "12. Third-Party Services",
        content: [
          "Google Play Billing: for payment processing. Subject to Google's Privacy Policy.",
          "Performance analytics services (future versions): anonymous, aggregated data for error detection.",
          "We do not sell or share your inventory or sales data with third parties for commercial purposes.",
        ],
      },
      {
        title: "13. LOPDP Compliance",
        content: [
          "This policy complies with the principles of Ecuador's LOPDP (in force since May 2023):",
          "Lawfulness, fairness, and transparency",
          "Purpose limitation",
          "Data minimization",
          "Accuracy",
          "Storage limitation",
          "Integrity and confidentiality",
        ],
      },
      {
        title: "14. Changes to this Policy",
        content:
          "We may update this Privacy Policy periodically. We will notify you of material changes through the App with at least 15 days' notice.",
      },
      {
        title: "15. Contact",
        content: [
          "Mio Labs LLC · Email: support@bazarmio.com",
          "Response guaranteed within 15 business days.",
        ],
      },
    ],
  },
  es: {
    title: "Política de Privacidad",
    effectiveDate: "Fecha de Vigencia: 8 de marzo de 2026",
    intro:
      "Esta Política de Privacidad explica cómo Mio Labs LLC recopila, usa, almacena y protege su información personal. Cumplimos con la Ley Orgánica de Protección de Datos Personales del Ecuador (LOPDP) y las leyes de privacidad aplicables de los Estados Unidos.",
    corePrinciple:
      "Principio fundamental: si usted utiliza el Plan Gratuito, Mio Labs no recopila ningún dato personal. Todo permanece en su dispositivo, completamente privado.",
    sections: [
      {
        title: "1. Responsable del Tratamiento",
        content: [
          "Mio Labs LLC es el responsable del tratamiento de sus datos personales.",
          "Contacto: support@bazarmio.com",
        ],
      },
      {
        title: "2. Recopilación de Datos según Plan",
        content: "",
        subsections: [
          {
            title: "Plan Gratuito — Cero recopilación de datos",
            content: [
              "Los usuarios del Plan Gratuito disfrutan de privacidad total. La App funciona completamente sin conexión (offline-first): todos sus inventarios, productos y ventas se almacenan exclusivamente en su dispositivo mediante SQLite. Mio Labs no tiene acceso a esta información, no la transmite, y no la recopila bajo ninguna circunstancia.",
              "No se recopilan datos personales",
              "No hay transmisión de datos a servidores externos",
              "No se requiere cuenta ni registro en línea",
              "Sus datos de negocio son completamente suyos y permanecen en su dispositivo",
            ],
          },
          {
            title: "Plan Premium — Recopilación con consentimiento explícito",
            content: [
              "La sincronización en la nube es una funcionalidad exclusiva del Plan Premium y es completamente opcional. Usted decide si activarla. Solo cuando usted elige activar la sincronización, Mio Labs recopila los siguientes datos:",
              "Número de teléfono para autenticación SMS",
              "Datos de inventario y ventas que usted elija sincronizar",
              "Identificador de dispositivo para gestionar la sincronización",
              "Versión de la App y sistema operativo (para soporte técnico)",
            ],
          },
          {
            title: "Datos que NUNCA recopilamos (en ningún plan)",
            content: [
              "Información de tarjetas de crédito (procesados directamente por Google Play)",
              "Datos biométricos",
              "Ubicación geográfica",
              "Contenido de comunicaciones personales",
            ],
          },
        ],
      },
      {
        title: "3. Finalidades del Tratamiento",
        content: [
          "Solo aplicable a usuarios Premium que activan la sincronización en la nube:",
          "Sincronización segura de datos entre sus dispositivos",
          "Soporte técnico y atención al cliente",
          "Gestión de suscripciones a través de Google Play",
          "Cumplimiento de obligaciones legales",
          "No usamos sus datos para publicidad de terceros ni los vendemos bajo ningún concepto.",
        ],
      },
      {
        title: "4. Base Legal del Tratamiento",
        content: [
          "Ejecución del contrato: para proveer la sincronización en la nube que usted solicita (solo Premium)",
          "Consentimiento explícito: usted activa la sincronización voluntariamente",
          "Cumplimiento legal: cuando la ley lo requiere",
        ],
      },
      {
        title: "5. Almacenamiento de Datos",
        content: "",
        subsections: [
          {
            title: "5.1 Plan Gratuito — Solo almacenamiento local",
            content:
              "Todo permanece en su dispositivo. BazarMio usa SQLite dentro del sandbox seguro del sistema operativo Android. Ni Mio Labs ni ningún tercero tiene acceso a estos datos. Si usted desinstala la App o resetea su dispositivo, los datos se eliminan permanentemente, ya que nunca existieron en ningún servidor.",
          },
          {
            title: "5.2 Plan Premium — Sincronización en la nube (opcional)",
            content:
              "Si usted activa la sincronización, sus datos se almacenan en servidores seguros ubicados en América del Sur (región de São Paulo, Brasil). Puede desactivar la sincronización en cualquier momento desde la configuración de la App, momento a partir del cual sus datos dejan de transmitirse y puede solicitar la eliminación de su copia en la nube.",
          },
        ],
      },
      {
        title: "6. Retención de Datos",
        content: [
          "Datos de cuenta activa: durante toda la vigencia de su cuenta",
          "Datos de ventas e inventario: mínimo 7 años para cumplir requisitos fiscales",
          "Registros de soporte: 2 años desde la última interacción",
          "Puede solicitar la eliminación de sus datos enviando un correo a support@bazarmio.com. Procesaremos su solicitud dentro de 30 días, sujeto a obligaciones legales de retención.",
        ],
      },
      {
        title: "7. Sus Derechos (LOPDP)",
        content: [
          "Conforme al LOPDP, usted tiene derecho a:",
          "Acceso: solicitar una copia de los datos personales que tenemos sobre usted",
          "Rectificación: corregir datos inexactos o incompletos",
          "Supresión: solicitar la eliminación de sus datos (sujeto a excepciones legales)",
          "Portabilidad: recibir sus datos en formato estructurado y legible por máquina",
          "Oposición: oponerse al tratamiento para ciertos fines",
          "Limitación: solicitar la restricción del tratamiento en ciertos casos",
          "Responderemos dentro de los 15 días hábiles establecidos por el LOPDP. Si sus derechos no son atendidos, puede presentar una queja ante la Superintendencia de Protección de Datos Personales del Ecuador.",
        ],
      },
      {
        title: "8. Seguridad de los Datos",
        content: [
          "Almacenamiento local en el sandbox seguro del dispositivo",
          "Tokens JWT de corta duración para autenticación (versiones futuras)",
          "Comunicaciones HTTPS cifradas con el servidor (versiones futuras)",
          "Controles de acceso interno a los datos de producción",
          "Le recomendamos proteger su dispositivo con PIN o huella digital.",
        ],
      },
      {
        title: "9. Menores de Edad",
        content:
          "BazarMio no está dirigida a personas menores de 18 años. No recopilamos intencionalmente datos de menores. Si usted es padre o tutor y cree que su hijo ha proporcionado datos a la App, contáctenos en support@bazarmio.com.",
      },
      {
        title: "10. Transferencias Internacionales",
        content:
          "Dado que Mio Labs LLC es una empresa estadounidense, sus datos pueden ser procesados en servidores en Estados Unidos o América del Sur. En transferencias internacionales garantizamos salvaguardas adecuadas conforme al LOPDP, incluyendo cláusulas contractuales estándar cuando sea necesario.",
      },
      {
        title: "11. Cookies y Tecnologías Similares",
        content:
          "La App móvil BazarMio no usa cookies. Utilizamos SharedPreferences y almacenamiento local SQLite para guardar preferencias y datos en su dispositivo.",
      },
      {
        title: "12. Servicios de Terceros",
        content: [
          "Google Play Billing: para procesamiento de pagos. Sujeto a la Política de Privacidad de Google.",
          "Servicios de análisis de rendimiento (versiones futuras): datos anónimos y agregados para detectar errores técnicos.",
          "No vendemos ni compartimos sus datos de inventario o ventas con terceros para fines comerciales.",
        ],
      },
      {
        title: "13. Cumplimiento LOPDP",
        content: [
          "Esta política cumple con los principios de la LOPDP (vigente desde mayo de 2023):",
          "Licitud, lealtad y transparencia",
          "Limitación de la finalidad",
          "Minimización de datos",
          "Exactitud",
          "Limitación del plazo de conservación",
          "Integridad y confidencialidad",
        ],
      },
      {
        title: "14. Cambios a esta Política",
        content:
          "Podemos actualizar esta Política periódicamente. Le notificaremos sobre cambios materiales con al menos 15 días de anticipación a través de la App.",
      },
      {
        title: "15. Contacto",
        content: [
          "Mio Labs LLC · Email: support@bazarmio.com",
          "Respuesta garantizada en 15 días hábiles.",
        ],
      },
    ],
  },
} as const;
