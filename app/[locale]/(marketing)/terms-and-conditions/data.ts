import { Lang } from "@/lib/types";

type TermsSection = {
  title: string;
  content: string | string[];
  subsections?: TermsSection[];
};

type TermsData = {
  title: string;
  effectiveDate: string;
  sections: TermsSection[];
  copyright: string;
};

export const termsData: { [key in Lang]: TermsData } = {
  en: {
    title: "Terms & Conditions",
    effectiveDate: "Effective Date: March 8, 2026",
    sections: [
      {
        title: "1. Parties to the Agreement",
        content: [
          'These Terms and Conditions ("Terms") constitute a legal agreement between you ("User") and Mio Labs LLC, a limited liability company incorporated in Wyoming, USA ("Mio Labs", "we", or "the Company"), regarding your use of the BazarMio mobile application ("the App").',
          "By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree, do not use the App.",
        ],
      },
      {
        title: "2. Description of Service",
        content:
          "BazarMio is an inventory and sales management application designed for informal vendors, corner stores, and small businesses. The App operates primarily on your device (offline-first) and will offer cloud synchronization in future versions.",
        subsections: [
          {
            title: "Included Features",
            content: [
              "Inventory creation and management",
              "Product registration and stock control",
              "Cash sales logging",
              "Sales analytics and statistics",
              "Data export in CSV and PDF format",
              "Offline operation (offline-first)",
            ],
          },
        ],
      },
      {
        title: "3. User Accounts",
        content:
          "The App currently operates with local storage on your device. In future versions, we may offer SMS authentication and cloud synchronization. You are responsible for maintaining the security of your device and the information stored on it.",
      },
      {
        title: "4. Plans and Subscriptions",
        content: "",
        subsections: [
          {
            title: "Free Plan",
            content: [
              "Up to 2 inventories",
              "Analytics for the last 30 days",
              "Basic sales and inventory features",
            ],
          },
          {
            title: "Premium Plan — $6.99 USD/month",
            content: [
              "Up to 10 inventories",
              "Analytics for up to 365 days",
              "Deleted product recovery",
              "Advanced analytics features",
            ],
          },
          {
            title: "Billing",
            content:
              "Payments are processed by Google Play Billing. By subscribing, you agree to Google Play's Terms of Service. Mio Labs does not store your credit card information. Subscriptions auto-renew unless cancelled at least 24 hours before the renewal period.",
          },
        ],
      },
      {
        title: "5. Acceptable Use",
        content: [
          "You agree not to:",
          "Use the App for illegal or fraudulent activities",
          "Attempt unauthorized access to systems related to the App",
          "Resell, sublicense, or distribute the App without written permission",
          "Reverse-engineer the App's code",
          "Upload malicious, defamatory, or third-party rights-infringing content",
        ],
      },
      {
        title: "6. Intellectual Property",
        content: [
          "The App, including its code, design, BazarMio brand, and all associated intellectual property, is the exclusive property of Mio Labs LLC. Nothing in these Terms transfers ownership rights over the App to you.",
          "The data you enter into the App (product names, prices, sales, etc.) is yours. Mio Labs claims no ownership rights over your content.",
        ],
      },
      {
        title: "7. Limitation of Liability",
        content: [
          "To the maximum extent permitted by law, Mio Labs LLC shall not be liable for:",
          "Data loss due to device failure",
          "Business losses from sales or inventory recording errors",
          "Service interruptions due to maintenance or technical causes",
          "Indirect, incidental, special, or consequential damages",
          "Mio Labs' total liability to you will not exceed the amount you paid to Mio Labs in the 12 months prior to the event giving rise to the claim.",
        ],
      },
      {
        title: "8. Data and Privacy",
        content:
          "The processing of your personal data is governed by our Privacy Policy, available in the App and on our website. The Privacy Policy is an integral part of these Terms.",
      },
      {
        title: "9. Modifications",
        content:
          "We reserve the right to modify these Terms at any time. Modifications take effect 30 days after in-app notification. Continued use of the App after that period constitutes your acceptance of the new Terms.",
      },
      {
        title: "10. Termination",
        content:
          "You may stop using the App at any time. Mio Labs may suspend or terminate your access if you violate these Terms. Upon termination, your license to use the App ceases immediately. Data stored locally on your device will remain there until you delete it.",
      },
      {
        title: "11. Governing Law and Dispute Resolution",
        content: [
          "These Terms are governed by the laws of the State of Wyoming, United States, without regard to conflict of law principles. For users in Ecuador, applicable local consumer protection provisions shall also apply to the extent required by law.",
          "Any dispute will first be resolved through good-faith negotiation (30 days). If unresolved, the parties may submit to binding arbitration under American Arbitration Association rules.",
        ],
      },
      {
        title: "12. General Provisions",
        content: [
          "If any provision of these Terms is declared invalid, the remaining provisions will remain in effect.",
          "Occasional failure to enforce these Terms does not constitute a waiver of Mio Labs' rights.",
          "These Terms constitute the entire agreement between you and Mio Labs regarding the App.",
        ],
      },
      {
        title: "13. Contact",
        content: [
          "For questions about these Terms:",
          "Mio Labs LLC · Email: support@bazarmio.com",
        ],
      },
    ],
    copyright: "© 2026 Mio Labs LLC. All rights reserved.",
  },
  es: {
    title: "Términos y Condiciones",
    effectiveDate: "Fecha de Vigencia: 8 de marzo de 2026",
    sections: [
      {
        title: "1. Partes del Acuerdo",
        content: [
          'Estos Términos y Condiciones ("Términos") constituyen un contrato legal entre usted ("Usuario") y Mio Labs LLC, una compañía de responsabilidad limitada constituida en el estado de Wyoming, Estados Unidos ("Mio Labs", "nosotros", o "la Compañía"), con respecto al uso de la aplicación móvil BazarMio ("la App").',
          "Al descargar, instalar o usar la App, usted acepta estar sujeto a estos Términos. Si no está de acuerdo, no utilice la App.",
        ],
      },
      {
        title: "2. Descripción del Servicio",
        content:
          "BazarMio es una aplicación de gestión de inventario y ventas diseñada para vendedores informales, tiendas de barrio, y pequeños negocios. La App opera principalmente de forma local en su dispositivo (modo sin conexión) y en versiones futuras ofrecerá sincronización en la nube.",
        subsections: [
          {
            title: "Funcionalidades incluidas",
            content: [
              "Creación y gestión de inventarios",
              "Registro de productos y control de stock",
              "Registro de ventas en efectivo",
              "Análisis y estadísticas de ventas",
              "Exportación de datos en formato CSV y PDF",
              "Operación sin conexión a internet (offline-first)",
            ],
          },
        ],
      },
      {
        title: "3. Cuentas de Usuario",
        content:
          "La App opera con almacenamiento local en su dispositivo. En versiones futuras, podremos ofrecer autenticación por SMS y sincronización en la nube. Usted es responsable de mantener la seguridad de su dispositivo y de la información almacenada en él.",
      },
      {
        title: "4. Planes y Suscripciones",
        content: "",
        subsections: [
          {
            title: "Plan Gratuito",
            content: [
              "Hasta 2 inventarios",
              "Análisis de los últimos 30 días",
              "Funciones básicas de venta e inventario",
            ],
          },
          {
            title: "Plan Premium — $6.99 USD/mes",
            content: [
              "Hasta 10 inventarios",
              "Análisis de hasta 365 días",
              "Recuperación de productos eliminados",
              "Funciones avanzadas de análisis",
            ],
          },
          {
            title: "Facturación",
            content:
              "Los pagos son procesados por Google Play Billing. Al suscribirse, acepta los Términos de Servicio de Google Play. Mio Labs no almacena información de su tarjeta de crédito. Las suscripciones se renuevan automáticamente a menos que se cancelen al menos 24 horas antes del período de renovación.",
          },
        ],
      },
      {
        title: "5. Uso Aceptable",
        content: [
          "Usted se compromete a no:",
          "Usar la App para actividades ilegales o fraudulentas",
          "Intentar acceder sin autorización a sistemas relacionados con la App",
          "Revender, sublicenciar o distribuir la App sin permiso escrito",
          "Realizar ingeniería inversa del código de la App",
          "Cargar contenido malicioso, difamatorio o que infrinja derechos de terceros",
        ],
      },
      {
        title: "6. Propiedad Intelectual",
        content: [
          "La App, incluyendo su código, diseño, marca BazarMio, y toda la propiedad intelectual asociada, es propiedad exclusiva de Mio Labs LLC. Nada en estos Términos le transfiere derechos de propiedad sobre la App.",
          "Los datos que usted ingresa en la App (nombres de productos, precios, ventas, etc.) son de su propiedad. Mio Labs no reclama derechos sobre su contenido.",
        ],
      },
      {
        title: "7. Limitación de Responsabilidad",
        content: [
          "En la máxima medida permitida por la ley, Mio Labs LLC no será responsable por:",
          "Pérdida de datos debido a fallas del dispositivo",
          "Pérdidas comerciales derivadas de errores de registro de ventas o inventario",
          "Interrupciones del servicio por mantenimiento o causas técnicas",
          "Daños indirectos, incidentales, especiales o consecuentes",
          "La responsabilidad total de Mio Labs ante usted no excederá el monto pagado en los 12 meses anteriores al evento que dio lugar a la reclamación.",
        ],
      },
      {
        title: "8. Datos y Privacidad",
        content:
          "El tratamiento de sus datos personales está regido por nuestra Política de Privacidad, disponible en la App y en nuestro sitio web. La Política de Privacidad forma parte integral de estos Términos.",
      },
      {
        title: "9. Modificaciones",
        content:
          "Nos reservamos el derecho de modificar estos Términos en cualquier momento. Las modificaciones entran en vigor 30 días después de la notificación dentro de la App. El uso continuado de la App después de ese período constituye su aceptación.",
      },
      {
        title: "10. Terminación",
        content:
          "Usted puede dejar de usar la App en cualquier momento. Mio Labs puede suspender o terminar su acceso si viola estos Términos. Al terminar, su licencia de uso cesa inmediatamente. Los datos almacenados localmente permanecerán en su dispositivo hasta que usted los elimine.",
      },
      {
        title: "11. Ley Aplicable y Resolución de Disputas",
        content: [
          "Estos Términos se rigen por las leyes del estado de Wyoming, Estados Unidos. Para usuarios en Ecuador, las disposiciones de protección al consumidor del Ecuador también se aplicarán en la medida que la ley lo requiera.",
          "Cualquier disputa se resolverá primero mediante negociación de buena fe (30 días). De no resolverse, las partes podrán acudir a arbitraje vinculante conforme a las reglas de la American Arbitration Association.",
        ],
      },
      {
        title: "12. Disposiciones Generales",
        content: [
          "Si alguna disposición es declarada inválida, las demás permanecerán vigentes.",
          "El incumplimiento ocasional de hacer cumplir estos Términos no constituye renuncia a los derechos de Mio Labs.",
          "Estos Términos constituyen el acuerdo completo entre usted y Mio Labs respecto a la App.",
        ],
      },
      {
        title: "13. Contacto",
        content: [
          "Para preguntas sobre estos Términos:",
          "Mio Labs LLC · Email: support@bazarmio.com",
        ],
      },
    ],
    copyright: "© 2026 Mio Labs LLC. Todos los derechos reservados.",
  },
} as const;

export const termsMetadata: Record<
  Lang,
  {
    title: string;
    description: string;
    keywords: string;
    openGraph: { title: string; description: string };
  }
> = {
  en: {
    title: "Terms & Conditions | BazarMio by Mio Labs LLC",
    description:
      "Terms and Conditions for using BazarMio. Free Plan is fully offline with no account required. Premium Plan offers optional cloud sync via Google Play subscription.",
    keywords:
      "terms and conditions, terms of service, BazarMio, Mio Labs, inventory app, Wyoming LLC",
    openGraph: {
      title: "Terms & Conditions | BazarMio by Mio Labs LLC",
      description:
        "Legal agreement between you and Mio Labs LLC for use of the BazarMio mobile application.",
    },
  },
  es: {
    title: "Términos y Condiciones | BazarMio de Mio Labs LLC",
    description:
      "Términos y Condiciones de uso de BazarMio. El Plan Gratuito funciona sin conexión y sin cuenta. El Plan Premium ofrece sincronización cloud opcional por suscripción en Google Play.",
    keywords:
      "términos y condiciones, términos de servicio, BazarMio, Mio Labs, app inventario, Wyoming LLC",
    openGraph: {
      title: "Términos y Condiciones | BazarMio de Mio Labs LLC",
      description:
        "Acuerdo legal entre usted y Mio Labs LLC para el uso de la aplicación móvil BazarMio.",
    },
  },
};
