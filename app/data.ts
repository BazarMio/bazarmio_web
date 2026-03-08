import { Lang } from "@/lib/types";

type Nav = {
  home: string;
  features: string;
  education: string;
};

type Footer = {
  tagline: string;
  navigate: string;
  followUs: string;
  copyright: string;
};

type Hero = {
  title: string;
  subtitle: string;
  cta: string;
  ctaSecondary: string;
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

export type HomePageData = {
  nav: Nav;
  footer: Footer;
  hero: Hero;
  featuresPreview: FeaturesPreview;
};

export const homeData: { [key in Lang]: HomePageData } = {
  en: {
    nav: {
      home: "Home",
      features: "Features",
      education: "Education",
    },
    footer: {
      tagline: "Simple inventory management built for local merchants.",
      navigate: "Navigate",
      followUs: "Follow Us",
      copyright: "© 2026 Mio Labs LLC. All rights reserved.",
    },
    hero: {
      title: "Your Market, Your Way",
      subtitle:
        "Simple inventory management built for local merchants. Track products, manage sales, and grow your business.",
      cta: "Get Started",
      ctaSecondary: "Learn More",
    },
    featuresPreview: {
      title: "Built for Your Business",
      subtitle:
        "Everything you need to manage your market stall or small store",
      features: [
        {
          title: "Inventory Tracking",
          description:
            "Know what you have, what's running low, and what's selling fast",
        },
        {
          title: "Sales Management",
          description: "Track daily sales and see your revenue at a glance",
        },
        {
          title: "Simple Reports",
          description:
            "Understand your business with clear, actionable insights",
        },
      ],
    },
  },
  es: {
    nav: {
      home: "Inicio",
      features: "Características",
      education: "Educación",
    },
    footer: {
      tagline: "Gestión de inventario simple para comerciantes locales.",
      navigate: "Navegar",
      followUs: "Síguenos",
      copyright: "© 2026 Mio Labs LLC. Todos los derechos reservados.",
    },
    hero: {
      title: "Tu Mercado, A Tu Manera",
      subtitle:
        "Gestión de inventario simple para comerciantes locales. Rastrea productos, gestiona ventas y haz crecer tu negocio.",
      cta: "Comenzar",
      ctaSecondary: "Aprende Más",
    },
    featuresPreview: {
      title: "Creado Para Tu Negocio",
      subtitle:
        "Todo lo que necesitas para gestionar tu puesto de mercado o tienda pequeña",
      features: [
        {
          title: "Rastreo de Inventario",
          description:
            "Sabe qué tienes, qué se está agotando y qué se vende rápido",
        },
        {
          title: "Gestión de Ventas",
          description:
            "Rastrea las ventas diarias y ve tus ingresos de un vistazo",
        },
        {
          title: "Reportes Simples",
          description: "Entiende tu negocio con información clara y práctica",
        },
      ],
    },
  },
};
