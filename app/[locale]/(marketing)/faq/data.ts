import type { Lang } from "@/lib/types";

export type FaqItem = {
  question: string;
  answer: string;
  learnMore?: { label: string; href: string };
};

export type FaqSection = {
  id: string;
  label: string;
  title: string;
  items: readonly FaqItem[];
};

export type FaqPageData = {
  hero: { title: string; subtitle: string };
  sections: readonly FaqSection[];
  cta: { title: string; subtitle: string; button: string };
};

export type FaqMetadata = {
  title: string;
  description: string;
  keywords: string;
  openGraph: { title: string; description: string };
};

export const faqMetadata: Record<Lang, FaqMetadata> = {
  en: {
    title: "FAQ | BazarMio — Frequently Asked Questions",
    description:
      "Answers to the most common questions about BazarMio — billing, data privacy, your account, and support. Free inventory and sales app for small businesses.",
    keywords:
      "BazarMio FAQ, BazarMio help, BazarMio pricing, free inventory app, BazarMio premium, small business app questions",
    openGraph: {
      title: "BazarMio FAQ — Billing, Privacy, Account & Support",
      description:
        "Everything you need to know about BazarMio: how the free plan works, what Premium includes, how your data is stored, and how to get help.",
    },
  },
  es: {
    title: "FAQ | BazarMio — Preguntas Frecuentes",
    description:
      "Respuestas a las preguntas más comunes sobre BazarMio — facturación, privacidad de datos, tu cuenta y soporte. App gratuita de inventario y ventas para pequeños negocios.",
    keywords:
      "BazarMio preguntas frecuentes, ayuda BazarMio, precios BazarMio, app inventario gratis, BazarMio premium, preguntas app pequeños negocios",
    openGraph: {
      title: "FAQ de BazarMio — Facturación, Privacidad, Cuenta y Soporte",
      description:
        "Todo lo que necesitas saber sobre BazarMio: cómo funciona el plan gratuito, qué incluye Premium, cómo se guardan tus datos y cómo obtener ayuda.",
    },
  },
};

export const faqData: Record<Lang, FaqPageData> = {
  en: {
    hero: {
      title: "Frequently Asked Questions",
      subtitle:
        "Everything you need to know about BazarMio — from pricing to privacy to getting started.",
    },
    sections: [
      {
        id: "billing",
        label: "BILLING",
        title: "Billing",
        items: [
          {
            question: "Is BazarMio free? How much does the premium plan cost?",
            answer:
              "BazarMio is free, forever. The free plan includes 1 inventory space and everything you need to run your business — no hidden fees. If you need more inventory slots, you can add them as a one-time purchase of $4.99 per slot. Your free data lives entirely on your phone, which means the app works even without internet. If you'd like cloud backup, sync across devices, and advanced analytics, Premium is available at $6.99/month.",
            learnMore: { label: "See all Premium features →", href: "/features" },
          },
          {
            question: "What's included in the free plan and what are its limits?",
            answer:
              "The free plan includes 1 inventory space and full access to all core features — adding products, recording sales, and viewing your reports. The only limitation is that your data stays on your phone and is not backed up to the cloud. This also means if you switch phones, your data won't transfer automatically.",
          },
          {
            question: "How do I upgrade to the premium plan?",
            answer:
              "Open the app and tap the settings icon on the home screen. From there, follow the steps to activate your Premium subscription. The process takes less than a minute.",
          },
          {
            question: "Can I cancel my subscription at any time?",
            answer:
              "Yes, you can cancel at any time. Go to Settings in the app and tap the subscription option — this will take you directly to Google Play where you can manage or cancel your subscription.",
          },
          {
            question: "How is the subscription charged — monthly or yearly?",
            answer: "Premium is billed monthly at $6.99/month through Google Play.",
          },
          {
            question: "What happens to my data if I cancel the premium plan?",
            answer:
              "Your data is always yours. If you cancel Premium, cloud sync is disabled but all your data remains safely stored on your phone. Nothing gets deleted.",
          },
          {
            question: "Is there a free trial for the premium plan?",
            answer:
              "We don't offer a free trial at this time. However, the free plan is fully functional and has no expiration — take as long as you need to decide.",
          },
          {
            question: "What payment methods do you accept?",
            answer:
              "Payments are processed through Google Play, so any payment method accepted by Google Play works — including debit cards, credit cards, and Google Pay.",
          },
        ],
      },
      {
        id: "privacy",
        label: "DATA & PRIVACY",
        title: "Data & Privacy",
        items: [
          {
            question: "Where is my data stored — on my phone or in the cloud?",
            answer:
              "By default, all your data is stored privately on your phone. No data is sent anywhere without your knowledge. If you upgrade to Premium, you get the option to sync your data to the cloud — but this is always your choice, never automatic.",
          },
          {
            question: "Is my sales and inventory data secure?",
            answer:
              "Yes. On the free plan, your data lives entirely on your phone's internal storage — only you have access to it. On Premium, your data is synced to secure, encrypted cloud servers. We take your privacy seriously and access to your data is strictly limited to you.",
          },
          {
            question: "Does BazarMio sell or share my information with third parties?",
            answer:
              "Never. Your data belongs to you and you alone. BazarMio does not sell, share, or give access to your information to any third party — period.",
          },
          {
            question: "Can I export or download all my data?",
            answer:
              "Yes, exporting your sales and inventory reports is available on the Premium plan. Exports are available as CSV files, making it easy to open them in Excel or Google Sheets.",
          },
          {
            question: "What happens to my data if I delete the app?",
            answer:
              "If you delete the app on the free plan, all your data is permanently deleted with it — so make sure to export anything important beforehand. If you're on Premium and have synced your data to the cloud, your data remains safe and can be restored when you reinstall the app.",
          },
          {
            question: "Does the app work without internet?",
            answer:
              "Yes, always. BazarMio is built to work fully offline — record sales, manage inventory, and view your reports without needing a connection. Internet is only needed if you choose to sync your data to the cloud on Premium.",
          },
          {
            question: "How do I request permanent deletion of my data?",
            answer:
              "On the free plan, simply deleting the app removes all your data from your device. If you're on Premium and want your cloud data permanently deleted, reach out to us at support@bazarmio.com and we'll take care of it promptly.",
          },
        ],
      },
      {
        id: "account",
        label: "ACCOUNT",
        title: "Account",
        items: [
          {
            question: "How do I create a BazarMio account?",
            answer:
              "Getting started is simple. Open the app, tap Get Started, and enter your phone number. From there you'll be guided to create your first inventory and add your products — the whole setup takes just a few minutes.",
          },
          {
            question: "I forgot my PIN — how do I recover it?",
            answer:
              "On the free plan, no PIN is needed — your phone number is all you need to log in. On Premium, if you forget your PIN, tap the Forgot PIN link on the login screen. You'll be asked for your email address and we'll send you a one-time code to reset it.",
          },
          {
            question: "Can I use the same account on multiple phones?",
            answer:
              "On Premium, yes — simply log in with your credentials on any device and your data will sync automatically. On the free plan, each phone has its own separate account and data. If you log into a second phone on the free plan, it will start as a fresh empty account — your original data stays safely on your first device.",
          },
          {
            question: "How do I change my phone number or email address?",
            answer:
              "To change your phone number, go to the login screen and request a number change — a one-time code will be sent to your registered email to verify the update. To change your email address, go to your Profile screen while logged in and edit it directly from there.",
          },
          {
            question: "How do I delete my account?",
            answer:
              "On the free plan, simply deleting the app removes all your data from your device. If you're on Premium and want your cloud data permanently deleted, reach out to us at support@bazarmio.com and we'll take care of it promptly.",
          },
          {
            question: "Can I have multiple users or employees on the same account?",
            answer:
              "Right now, multiple people can access the same account by sharing login credentials. A dedicated multi-user system with individual employee logins is on our roadmap — we'll announce it when it's ready.",
          },
          {
            question: "What is an inventory and how many can I have on the free plan?",
            answer:
              "An inventory is like a virtual shelf where all your products live — just like organizing products in a real store. On the free plan you get 1 inventory. When you upgrade to Premium, you receive 1 additional inventory slot as part of your plan — and that extra slot stays with you even if you cancel your subscription.",
          },
        ],
      },
      {
        id: "support",
        label: "SUPPORT",
        title: "Support",
        items: [
          {
            question: "How do I contact the support team?",
            answer:
              "You can reach us anytime at support@bazarmio.com. We're a small team building something we care about, and we read every message.",
          },
          {
            question: "What are your support hours?",
            answer:
              "We don't have set support hours yet, but we aim to respond to every email within 24–48 hours. We appreciate your patience as we grow.",
          },
          {
            question: "The app isn't loading or is acting up — what do I do?",
            answer:
              "First, try closing the app completely and reopening it. If the issue continues, try restarting your phone. Still having trouble? Email us at support@bazarmio.com with a short description of what's happening and we'll help you sort it out. A built-in feedback form is also on the way so you'll be able to report issues directly from the app.",
          },
          {
            question: "I recorded a sale by mistake — can I undo it?",
            answer:
              "Yes. Go to the Sales screen, select the sale in question, and void it. Your inventory will be automatically restored as if the sale never happened.",
          },
          {
            question: "How do I report a bug or technical issue?",
            answer:
              "Email us at support@bazarmio.com with a description of the issue and, if possible, the steps that led to it. Screenshots are always helpful. We take every report seriously and use them to make the app better for everyone.",
          },
          {
            question: "Are there tutorials or videos to learn how to use the app?",
            answer:
              "Not yet, but it's something we're actively planning. In the meantime, if you get stuck on anything, don't hesitate to email us at support@bazarmio.com — we're happy to walk you through it.",
          },
          {
            question: "I lost my phone — how do I recover my account?",
            answer:
              "If you were on the free plan, unfortunately your data is stored only on your device and cannot be recovered remotely. We know that's tough, and we're sorry. When you're back up and running, BazarMio will be ready for you. If you'd like to make sure this never happens again, upgrading to Premium automatically backs up your data to the cloud — so switching phones or losing one never means losing your business data.",
          },
        ],
      },
    ],
    cta: {
      title: "Still have questions?",
      subtitle: "We're a small team and we read every message. Reach out anytime.",
      button: "Contact us",
    },
  },
  es: {
    hero: {
      title: "Preguntas Frecuentes",
      subtitle:
        "Todo lo que necesitas saber sobre BazarMio — desde precios hasta privacidad y cómo empezar.",
    },
    sections: [
      {
        id: "billing",
        label: "FACTURACIÓN",
        title: "Facturación",
        items: [
          {
            question: "¿BazarMio es gratis? ¿Cuánto cuesta la versión premium?",
            answer:
              "BazarMio es gratis, para siempre. El plan gratuito incluye 1 espacio de inventario y todo lo que necesitas para manejar tu negocio — sin costos ocultos. Si necesitas más espacios, puedes agregarlos con un pago único de $4.99 por espacio. Tus datos gratuitos viven en tu celular, lo que significa que la app funciona sin internet. Si quieres respaldo en la nube, sincronización entre dispositivos y analíticas avanzadas, el plan Premium está disponible por $6.99/mes.",
            learnMore: { label: "Ver todas las funciones Premium →", href: "/features" },
          },
          {
            question: "¿Qué incluye el plan gratuito y cuáles son sus límites?",
            answer:
              "El plan gratuito incluye 1 espacio de inventario y acceso completo a todas las funciones principales — agregar productos, registrar ventas y ver tus reportes. La única limitación es que tus datos se quedan en tu celular y no se respaldan en la nube. Esto también significa que si cambias de celular, tus datos no se transfieren automáticamente.",
          },
          {
            question: "¿Cómo puedo actualizar al plan premium?",
            answer:
              "Abre la app y toca el ícono de configuración en la pantalla principal. Desde ahí, sigue los pasos para activar tu suscripción Premium. El proceso toma menos de un minuto.",
          },
          {
            question: "¿Puedo cancelar mi suscripción en cualquier momento?",
            answer:
              "Sí, puedes cancelar en cualquier momento. Ve a Configuración en la app y toca la opción de suscripción — esto te llevará directamente a Google Play donde puedes administrar o cancelar tu suscripción.",
          },
          {
            question: "¿Cómo se cobra la suscripción — mensual o anual?",
            answer: "El plan Premium se cobra mensualmente a $6.99/mes a través de Google Play.",
          },
          {
            question: "¿Qué pasa con mis datos si cancelo el plan premium?",
            answer:
              "Tus datos siempre son tuyos. Si cancelas el plan Premium, la sincronización con la nube se desactiva, pero todos tus datos permanecen guardados en tu celular. No se elimina nada.",
          },
          {
            question: "¿Hay un período de prueba gratuito del plan premium?",
            answer:
              "Por el momento no ofrecemos un período de prueba. Sin embargo, el plan gratuito es completamente funcional y no tiene fecha de vencimiento — tómate el tiempo que necesites para decidir.",
          },
          {
            question: "¿Qué métodos de pago aceptan?",
            answer:
              "Los pagos se procesan a través de Google Play, por lo que cualquier método de pago aceptado por Google Play funciona — incluyendo tarjetas de débito, crédito y Google Pay.",
          },
        ],
      },
      {
        id: "privacy",
        label: "DATOS & PRIVACIDAD",
        title: "Datos & Privacidad",
        items: [
          {
            question: "¿Dónde se guardan mis datos — en mi celular o en la nube?",
            answer:
              "Por defecto, todos tus datos se guardan de forma privada en tu celular. Ningún dato se envía a ningún lado sin tu conocimiento. Si actualizas a Premium, tienes la opción de sincronizar tus datos con la nube — pero esto siempre es tu decisión, nunca es automático.",
          },
          {
            question: "¿Mis datos de ventas e inventario están seguros?",
            answer:
              "Sí. En el plan gratuito, tus datos viven completamente en el almacenamiento interno de tu celular — solo tú tienes acceso. En Premium, tus datos se sincronizan con servidores en la nube seguros y cifrados. Tomamos tu privacidad en serio y el acceso a tus datos está estrictamente limitado a ti.",
          },
          {
            question: "¿BazarMio vende o comparte mi información con terceros?",
            answer:
              "Nunca. Tus datos te pertenecen solo a ti. BazarMio no vende, comparte ni da acceso a tu información a ningún tercero — punto.",
          },
          {
            question: "¿Puedo exportar o descargar mis datos?",
            answer:
              "Sí, exportar tus reportes de ventas e inventario está disponible en el plan Premium. Las exportaciones están disponibles en formato CSV, lo que te permite abrirlos fácilmente en Excel o Google Sheets.",
          },
          {
            question: "¿Qué pasa con mis datos si borro la aplicación?",
            answer:
              "Si borras la app en el plan gratuito, todos tus datos se eliminan permanentemente con ella — así que asegúrate de exportar lo que sea importante antes de hacerlo. Si estás en Premium y has sincronizado tus datos con la nube, tu información permanece segura y puede restaurarse cuando reinstales la app.",
          },
          {
            question: "¿La app funciona sin internet?",
            answer:
              "Sí, siempre. BazarMio está diseñada para funcionar completamente sin internet — registra ventas, gestiona tu inventario y ve tus reportes sin necesitar conexión. El internet solo es necesario si eliges sincronizar tus datos con la nube en Premium.",
          },
          {
            question: "¿Cómo solicito que se eliminen mis datos permanentemente?",
            answer:
              "En el plan gratuito, simplemente borrar la app elimina todos tus datos del dispositivo. Si estás en Premium y deseas que tus datos en la nube sean eliminados permanentemente, escríbenos a support@bazarmio.com y lo resolveremos a la brevedad.",
          },
        ],
      },
      {
        id: "account",
        label: "CUENTA",
        title: "Cuenta",
        items: [
          {
            question: "¿Cómo creo una cuenta en BazarMio?",
            answer:
              "Empezar es muy sencillo. Abre la app, toca Empezar e ingresa tu número de teléfono. Desde ahí serás guiado para crear tu primer inventario y agregar tus productos — la configuración inicial toma solo unos minutos.",
          },
          {
            question: "Olvidé mi PIN — ¿cómo lo recupero?",
            answer:
              "En el plan gratuito no necesitas PIN — solo tu número de teléfono es suficiente para iniciar sesión. En Premium, si olvidaste tu PIN, toca el enlace ¿Olvidaste tu PIN? en la pantalla de inicio de sesión. Se te pedirá tu correo electrónico y te enviaremos un código de un solo uso para restablecerlo.",
          },
          {
            question: "¿Puedo usar la misma cuenta en varios celulares?",
            answer:
              "En Premium, sí — simplemente inicia sesión con tus credenciales en cualquier dispositivo y tus datos se sincronizarán automáticamente. En el plan gratuito, cada celular tiene su propia cuenta y datos independientes. Si inicias sesión en un segundo celular con el plan gratuito, comenzará como una cuenta nueva vacía — tus datos originales permanecen seguros en tu primer dispositivo.",
          },
          {
            question: "¿Cómo cambio mi número de teléfono o correo electrónico?",
            answer:
              "Para cambiar tu número de teléfono, ve a la pantalla de inicio de sesión y solicita un cambio de número — se enviará un código de un solo uso a tu correo registrado para verificar el cambio. Para cambiar tu correo electrónico, ve a la pantalla de Perfil mientras estás conectado y edítalo directamente desde ahí.",
          },
          {
            question: "¿Cómo elimino mi cuenta?",
            answer:
              "En el plan gratuito, simplemente borrar la app elimina todos tus datos del dispositivo. Si estás en Premium y deseas que tus datos en la nube sean eliminados permanentemente, escríbenos a support@bazarmio.com y lo resolveremos a la brevedad.",
          },
          {
            question: "¿Puedo tener varios usuarios o empleados en la misma cuenta?",
            answer:
              "Por el momento, varias personas pueden acceder a la misma cuenta compartiendo las credenciales de inicio de sesión. Un sistema dedicado de múltiples usuarios con acceso individual para empleados está en nuestros planes — lo anunciaremos cuando esté listo.",
          },
          {
            question: "¿Qué es un inventario y cuántos puedo tener en el plan gratuito?",
            answer:
              "Un inventario es como un estante virtual donde viven todos tus productos — igual que organizar productos en una tienda real. En el plan gratuito tienes 1 inventario. Cuando actualizas a Premium, recibes 1 espacio de inventario adicional como parte de tu plan — y ese espacio extra se queda contigo incluso si cancelas tu suscripción.",
          },
        ],
      },
      {
        id: "support",
        label: "SOPORTE",
        title: "Soporte",
        items: [
          {
            question: "¿Cómo contacto al equipo de soporte?",
            answer:
              "Puedes escribirnos en cualquier momento a support@bazarmio.com. Somos un equipo pequeño construyendo algo que nos importa, y leemos cada mensaje.",
          },
          {
            question: "¿En qué horario está disponible el soporte?",
            answer:
              "Aún no tenemos horario de soporte establecido, pero nos comprometemos a responder cada correo en un plazo de 24 a 48 horas. Agradecemos tu paciencia mientras crecemos.",
          },
          {
            question: "La app no carga o está funcionando mal — ¿qué hago?",
            answer:
              "Primero intenta cerrar la app completamente y volver a abrirla. Si el problema continúa, intenta reiniciar tu celular. ¿Sigue fallando? Escríbenos a support@bazarmio.com con una breve descripción de lo que está pasando y te ayudaremos a resolverlo. También estamos trabajando en un formulario de comentarios dentro de la app para que puedas reportar problemas directamente.",
          },
          {
            question: "Registré una venta por error — ¿puedo deshacerla?",
            answer:
              "Sí. Ve a la pantalla de Ventas, selecciona la venta en cuestión y anúlala. Tu inventario se restaurará automáticamente como si la venta nunca hubiera ocurrido.",
          },
          {
            question: "¿Cómo reporto un error o problema técnico?",
            answer:
              "Escríbenos a support@bazarmio.com con una descripción del problema y, si es posible, los pasos que lo causaron. Las capturas de pantalla siempre ayudan. Tomamos cada reporte en serio y los usamos para mejorar la app para todos.",
          },
          {
            question: "¿Hay tutoriales o videos para aprender a usar la app?",
            answer:
              "Aún no, pero es algo que estamos planeando activamente. Mientras tanto, si tienes alguna duda, no dudes en escribirnos a support@bazarmio.com — con gusto te orientamos.",
          },
          {
            question: "Perdí mi celular — ¿cómo recupero mi cuenta?",
            answer:
              "Si estabas en el plan gratuito, lamentablemente tus datos están almacenados únicamente en tu dispositivo y no pueden recuperarse de forma remota. Sabemos que es difícil y lo sentimos mucho. Cuando estés listo para comenzar de nuevo, BazarMio estará aquí para ti. Si quieres asegurarte de que esto no vuelva a ocurrir, actualizar a Premium respalda automáticamente tus datos en la nube — para que cambiar de celular o perderlo nunca signifique perder los datos de tu negocio.",
          },
        ],
      },
    ],
    cta: {
      title: "¿Aún tienes preguntas?",
      subtitle: "Somos un equipo pequeño y leemos cada mensaje. Escríbenos cuando quieras.",
      button: "Contáctanos",
    },
  },
};
