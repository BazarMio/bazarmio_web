import { Lang } from "@/lib/types";

type Nav = {
  home: string;
  features: string;
  faq: string;
  contact: string;
  education: string;
};

type LegalNav = {
  terms: string;
  privacy: string;
};

type Footer = {
  tagline: string;
  navigate: string;
  followUs: string;
  downloads: string;
  copyright: string;
  LegalNav: LegalNav;
};

type Hero = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaSecondary: string;
  googlePlayAlt: string;
  appleStoreAlt: string;
  image: {
    src: string;
    alt: string;
  };
};

type Feature = {
  title: string;
  description: string;
  icon?: string;
  image?: { src: string; alt: string };
};

type FeaturesPreview = {
  title: string;
  subtitle: string;
  features: readonly Feature[];
};

type HowItWorksStep = {
  title: string;
  description: string;
};

type HowItWorks = {
  title: string;
  steps: readonly HowItWorksStep[];
};

type BottomCTA = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
};

export type HomePageData = {
  nav: Nav;
  footer: Footer;
  hero: Hero;
  trustBar: readonly string[];
  howItWorks: HowItWorks;
  featuresPreview: FeaturesPreview;
  bottomCTA: BottomCTA;
};

export const homeMetadata: Record<
  Lang,
  {
    title: string;
    description: string;
    keywords: string;
    openGraph: { title: string; description: string };
  }
> = {
  en: {
    title: "BazarMio — Free Inventory & Sales App for Small Shops in Ecuador",
    description:
      "Free offline inventory and sales app for small shops and street vendors in Ecuador. Track stock, record cash sales, and see your profits — no internet required.",
    keywords:
      "free inventory app, sales tracking, small shop app, Ecuador merchants, street vendor app, offline inventory, corner store app, BazarMio",
    openGraph: {
      title: "BazarMio — Free Inventory App. No Internet Required.",
      description:
        "Track stock, record sales, and see your profits — all offline. Built for small shops and street vendors in Ecuador. Free to download.",
    },
  },
  es: {
    title:
      "BazarMio — App Gratis de Inventario y Ventas para Tiendas en Ecuador",
    description:
      "App gratuita de inventario y ventas sin internet para tiendas pequeñas y vendedores en Ecuador. Controla tu stock, registra ventas en efectivo y ve tus ganancias — sin señal.",
    keywords:
      "app inventario gratis, registro de ventas, app tienda pequeña, comerciantes Ecuador, vendedores ambulantes, inventario sin internet, tienda de barrio, BazarMio",
    openGraph: {
      title: "BazarMio — App de Inventario Gratis. Sin Internet.",
      description:
        "Controla tu stock, registra ventas y ve tus ganancias — todo sin internet. Para tiendas pequeñas y vendedores en Ecuador. Gratis.",
    },
  },
};

export const homeData: { [key in Lang]: HomePageData } = {
  en: {
    nav: {
      home: "Home",
      features: "Features",
      faq: "FAQ",
      contact: "Contact",
      education: "Education",
    },
    footer: {
      tagline: "For the ones who keep the neighborhood alive.",
      navigate: "Navigate",
      followUs: "Follow Us",
      copyright: "© 2026 Mio Labs LLC. All rights reserved.",
      LegalNav: {
        terms: "Terms and Conditions",
        privacy: "Privacy Policy",
      },
      downloads: "Downloads",
    },
    hero: {
      eyebrow: "Free · Inventory App",
      title: "No More Notebooks. Run Your Shop from Your Phone.",
      subtitle:
        "BazarMio is the free inventory and sales app built for small shops and street vendors in Ecuador. Track stock, record cash sales, and see your profits — no internet needed.",
      cta: "Download Free",
      ctaSecondary: "See How It Works",
      googlePlayAlt:
        "Download BazarMio on Google Play — Free Inventory App for Small Shops",
      appleStoreAlt:
        "Download BazarMio on the App Store — Free Inventory App for Small Shops",
      image: {
        src: "https://images.bazarmio.app/web-assets/marketing-home/welcome_screen_en.png",
        alt: "BazarMio Hero Image",
      },
    },
    trustBar: [
      "Works offline",
      "No sign-up to start",
      "Free forever",
      "Your data stays on your phone",
    ],
    howItWorks: {
      title: "How It Works",
      steps: [
        {
          title: "Download free",
          description: "No sign-up, no password — open it and you're ready to go.",
        },
        {
          title: "Name your shop",
          description: "That's your inventory created. Ten seconds, done.",
        },
        {
          title: "Add what you sell",
          description: "Name it, set a price, enter how many you have. Done in seconds per product.",
        },
        {
          title: "Sell & update stock",
          description: "Pick products sold, enter quantities, confirm. No math, no notebook, no guessing what's left.",
        },
      ],
    },
    featuresPreview: {
      title: "Everything You Need to Run a Tighter Shop",
      subtitle:
        "No accounting degree. No monthly fees to start. Just what small vendors actually need.",
      features: [
        {
          title: "Always Know What's Running Low",
          description:
            "See what's in stock, what's almost out, and what sells fastest — no notebook required.",
          icon: "alert-triangle",
        },
        {
          title: "Record Sales Without Internet",
          description:
            "Log every cash sale instantly, even offline. Your data stays on your phone.",
          icon: "wifi-off",
        },
        {
          title: "Reports You Can Actually Read",
          description:
            "Daily revenue, best sellers, monthly trends — in plain language, no spreadsheet needed.",
          icon: "chart-bar",
        },
      ],
    },
    bottomCTA: {
      title: "Your shop runs on hustle. Let BazarMio handle the numbers.",
      subtitle:
        "Free to download. No paperwork. No learning curve. Just your business, organized.",
      ctaText: "Get Started for Free",
      ctaLink: "#",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      features: "Funciones",
      faq: "FAQ",
      contact: "Contacto",
      education: "Educación",
    },
    footer: {
      tagline: "Para los que le dan vida al barrio.",
      navigate: "Navegar",
      followUs: "Síguenos",
      downloads: "Descargas",
      copyright: "© 2026 Mio Labs LLC. Todos los derechos reservados.",
      LegalNav: {
        terms: "Términos y Condiciones",
        privacy: "Política de Privacidad",
      },
    },
    hero: {
      eyebrow: "Gratis · App de Inventario",
      title: "Olvida el cuaderno. Maneja tu tienda desde el celular.",
      subtitle:
        "BazarMio es la app gratuita de inventario y ventas para tiendas pequeñas y vendedores en Ecuador. Controla tu stock, registra tus ventas y ve cuánto ganaste — aunque no tengas internet.",
      cta: "Descargar Gratis",
      ctaSecondary: "Ver Cómo Funciona",
      googlePlayAlt:
        "Descarga BazarMio en Google Play — App Gratuita de Inventario para Tiendas Pequeñas",
      appleStoreAlt:
        "Descarga BazarMio en la App Store — App Gratuita de Inventario para Tiendas Pequeñas",
      image: {
        src: "https://images.bazarmio.app/web-assets/marketing-home/welcome_screen_es.png",
        alt: "BazarMio Hero Image",
      },
    },
    trustBar: [
      "Funciona sin internet",
      "Sin registro para empezar",
      "Gratis para siempre",
      "Tus datos en tu celular",
    ],
    howItWorks: {
      title: "¿Cómo funciona?",
      steps: [
        {
          title: "Descárgala gratis",
          description: "Sin registro, sin contraseña — ábrela y ya puedes empezar.",
        },
        {
          title: "Ponle nombre a tu tienda",
          description: "Tu inventario queda listo. Diez segundos, listo.",
        },
        {
          title: "Agrega lo que vendes",
          description: "Nombre, precio y cantidad. Listo en segundos por producto.",
        },
        {
          title: "Vende y actualiza tu stock",
          description: "Elige los productos, pon las cantidades, confirma. Sin calculadora, sin cuaderno, sin adivinar.",
        },
      ],
    },
    featuresPreview: {
      title: "Todo lo que necesitas para manejar mejor tu negocio",
      subtitle:
        "Olvidate de la contabilidad complicada y de los pagos para empezar. Aquí tienes solo lo esencial: las herramientas que hace que vender y llevar tu inventario sea rápido y sencillo",
      features: [
        {
          title: "Actualiza tu inventario al instante",
          description:
            "Mira qué tienes, qué se está acabando y qué se vende más rápido — sin tocar un cuaderno.",
          icon: "alert-triangle",
        },
        {
          title: "Registra ventas sin internet",
          description:
            "Anota cada venta en efectivo al instante, aunque no tengas señal, tus datos quedan guardados en tu celular.",
          icon: "wifi-off",
        },
        {
          title: "Reportes de ventas fáciles",
          description:
            "Mira tus ingresos del día, tus productos más vendidos y las tendencias del mes — en palabras simples, sin hojas de cálculo.",
          icon: "chart-bar",
        },
      ],
    },
    bottomCTA: {
      title:
        "Tu negocio vive de tu esfuerzo. BazarMio se encarga de los números.",
      subtitle:
        "Gratis. Sin papeleos. Sin complicaciones. Solo tu negocio, en orden.",
      ctaText: "Empieza Gratis",
      ctaLink: "#",
    },
  },
};
