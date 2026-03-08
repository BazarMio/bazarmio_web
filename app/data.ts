import { Lang } from "@/lib/types";

type Nav = {
  home: string;
  features: string;
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
  copyright: string;
  LegalNav: LegalNav;
};

type Hero = {
  title: string;
  subtitle: string;
  cta: string;
  ctaSecondary: string;
  googlePlayAlt: string;
};

type Feature = {
  title: string;
  description: string;
};

type FeaturesPreview = {
  title: string;
  subtitle: string;
  features: readonly Feature[];
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
  featuresPreview: FeaturesPreview;
  bottomCTA: BottomCTA;
};

export const homeData: { [key in Lang]: HomePageData } = {
  en: {
    nav: {
      home: "Home",
      features: "Features",
      education: "Education",
    },
    footer: {
      tagline:
        "Free inventory app for small shops, street vendors, and local merchants in Ecuador.",
      navigate: "Navigate",
      followUs: "Follow Us",
      copyright: "© 2026 Mio Labs LLC. All rights reserved.",
      LegalNav: {
        terms: "Terms and Conditions",
        privacy: "Privacy Policy",
      },
    },
    hero: {
      title: "Ditch the Notebook. Run Your Shop from Your Phone.",
      subtitle:
        "BazarMio is the free inventory and sales app built for small shops and street vendors in Ecuador. Track stock, record sales, and see your profits — even without internet.",
      cta: "Download Free",
      ctaSecondary: "See How It Works",
      googlePlayAlt:
        "Download BazarMio on Google Play — Free Inventory App for Small Shops",
    },
    featuresPreview: {
      title: "Inventory Management Simple Enough for Any Shop",
      subtitle:
        "No accounting degree. No monthly fees to start. Just the tools small merchants actually need.",
      features: [
        {
          title: "Inventory Tracking for Small Shops",
          description:
            "Always know what's in stock, what's running low, and what sells fastest — without touching a notebook.",
        },
        {
          title: "Sales Recording Without Internet",
          description:
            "Log every cash sale instantly, even offline. Your data stays safe on your phone.",
        },
        {
          title: "Sales Reports That Make Sense",
          description:
            "See your daily revenue, best-selling products, and monthly trends in plain language — no spreadsheets needed.",
        },
      ],
    },
    bottomCTA: {
      title: "Your shop runs on Hustle. Let BazarMio handle the numbers.",
      subtitle:
        "Free to download. No paperwork. No learning curve. Just your  business, organized",
      ctaText: "Get Started for Free",
      ctaLink: "#",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      features: "Funciones",
      education: "Educación",
    },
    footer: {
      tagline:
        "App gratuita de inventario para tiendas pequeñas, vendedores ambulantes y negocios locales en Ecuador.",
      navigate: "Navegar",
      followUs: "Síguenos",
      copyright: "© 2026 Mio Labs LLC. Todos los derechos reservados.",
      LegalNav: {
        terms: "Términos y Condiciones",
        privacy: "Política de Privacidad",
      },
    },
    hero: {
      title: "Olvida el Cuaderno. Maneja tu Tienda desde el Celular.",
      subtitle:
        "BazarMio es la app gratuita de inventario y ventas para tiendas pequeñas y vendedores en Ecuador. Controla tu stock, registra tus ventas y ve cuánto ganaste — aunque no tengas internet.",
      cta: "Descargar Gratis",
      ctaSecondary: "Ver Cómo Funciona",
      googlePlayAlt:
        "Descarga BazarMio en Google Play — App Gratuita de Inventario para Tiendas Pequeñas",
    },
    featuresPreview: {
      title: "Control de Inventario Tan Simple que Cualquiera Puede Usarlo",
      subtitle:
        "Sin contabilidad. Sin pagos para empezar. Solo las herramientas que los vendedores de verdad necesitan.",
      features: [
        {
          title: "Control de Stock para Tiendas Pequeñas",
          description:
            "Siempre sabe qué tienes, qué se está acabando y qué se vende más rápido — sin tocar un cuaderno.",
        },
        {
          title: "Registra Ventas Sin Internet",
          description:
            "Anota cada venta en efectivo al instante, aunque no tengas señal. Tus datos quedan guardados en tu celular.",
        },
        {
          title: "Reportes de Ventas Fáciles de Entender",
          description:
            "Ve tus ingresos del día, tus productos más vendidos y las tendencias del mes — en palabras simples, sin hojas de cálculo.",
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
