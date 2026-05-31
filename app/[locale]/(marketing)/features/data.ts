import { Lang } from "@/lib/types";

export const featuresMetadata: Record<
  Lang,
  {
    title: string;
    description: string;
    keywords: string;
    openGraph: { title: string; description: string };
  }
> = {
  en: {
    title: "Features | BazarMio — Inventory & Sales App for Small Shops",
    description:
      "See everything BazarMio can do: product catalog, barcode scanner, sales history, analytics, CSV/PDF exports, and offline-first operation. Free plan available.",
    keywords:
      "BazarMio features, inventory app, sales tracking, small business app, offline inventory, barcode scanner, Ecuador",
    openGraph: {
      title: "BazarMio Features — Free Inventory & Sales App",
      description:
        "Product catalog, stock alerts, sales analytics, CSV exports — all offline-first. Free to start, Pro at $6.99/month.",
    },
  },
  es: {
    title: "Funciones | BazarMio — App de Inventario y Ventas para Tiendas",
    description:
      "Descubre todo lo que BazarMio puede hacer: catálogo de productos, escáner de barras, historial de ventas, analíticas, exportación CSV/PDF y funcionamiento sin internet. Plan gratuito disponible.",
    keywords:
      "funciones BazarMio, app inventario, registro ventas, app pequeños negocios, inventario offline, escáner códigos, Ecuador",
    openGraph: {
      title: "Funciones de BazarMio — App de Inventario y Ventas Gratis",
      description:
        "Catálogo de productos, alertas de stock, analíticas de ventas, exportaciones CSV — sin internet. Gratis para empezar, Pro a $6.99/mes.",
    },
  },
};

type Hero = {
  title: string;
  subtitle: string;
};
type Feature = {
  title: string;
  description: string;
  icon?: string;
};
type CTA = {
  title: string;
  subtitle: string;
  button: string;
};

export type ComparisonRow = {
  feature: string;
  free: boolean | string;
  pro: boolean | string;
};

export type ComparisonSection = {
  title: string;
  rows: ComparisonRow[];
};

export type ComparisonData = {
  title: string;
  subtitle: string;
  freeTier: string;
  proTier: string;
  sections: ComparisonSection[];
};

export type FeaturesPageData = {
  hero: Hero;
  features: readonly Feature[];
  comparison: ComparisonData;
  cta: CTA;
};

export const featuresData: { [key in Lang]: FeaturesPageData } = {
  en: {
    hero: {
      title: "Every Feature Your Shop Needs — Free to Start",
      subtitle:
        "Inventory tracking, sales recording, and analytics built for small shops and street vendors in Ecuador. No training required.",
    },
    features: [
      {
        title: "Product Catalog",
        description:
          "Add products with photos, prices, and categories. Find anything in seconds with search and filters.",
        icon: "package",
      },
      {
        title: "Stock Control",
        description:
          "Always know what you have and what's running low. Get alerts before you run out of your best sellers.",
        icon: "clipboard-list",
      },
      {
        title: "Fast Sales",
        description:
          "Record cash sales in seconds. Scan a barcode or tap a product — your stock updates automatically.",
        icon: "shopping-cart",
      },
      {
        title: "Sales History",
        description:
          "See every sale you've made. Review what sold, when, and for how much — all in one place.",
        icon: "clock",
      },
      {
        title: "Simple Analytics",
        description:
          "Know which days you sell the most, which products move fastest, and how much you're earning each month.",
        icon: "chart-bar",
      },
      {
        title: "Works Without Internet",
        description:
          "Sell confidently even with no signal. Everything saves directly to your phone — no connection needed.",
        icon: "wifi-off",
      },
    ],
    comparison: {
      title: "Free vs Pro",
      subtitle: "Start free. Upgrade when your business is ready to grow.",
      freeTier: "Free",
      proTier: "Pro",
      sections: [
        {
          title: "Prices",
          rows: [
            { feature: "Subscription", free: "$0", pro: "$6.99/mo" },
            {
              feature: "Additional inventory slots",
              free: "$4.99",
              pro: "$4.99",
            },
          ],
        },
        {
          title: "Inventories",
          rows: [
            { feature: "Number of inventories", free: "1", pro: "2" },
            { feature: "Edit / delete inventories", free: true, pro: true },
            { feature: "Color coded inventory icons", free: true, pro: true },
            { feature: "Active inventory switcher", free: true, pro: true },
          ],
        },
        {
          title: "Products",
          rows: [
            { feature: "Add / edit / delete products", free: true, pro: true },
            {
              feature: "Product photos (camera / gallery)",
              free: true,
              pro: true,
            },
            { feature: "Barcode scanner (SKU)", free: false, pro: true },
            {
              feature: "Stock tracking & low stock alerts",
              free: true,
              pro: true,
            },
            { feature: "Category management", free: true, pro: true },
            { feature: "Profit margin calculator", free: true, pro: true },
            { feature: "Product sales trend chart", free: false, pro: true },
          ],
        },
        {
          title: "Sales",
          rows: [
            { feature: "Record multi-product sales", free: true, pro: true },
            { feature: "Price override per item", free: true, pro: true },
            { feature: "Barcode scan to add to cart", free: false, pro: true },
            {
              feature: "Void sales (with stock restore)",
              free: true,
              pro: true,
            },
            { feature: "Sale history (last 30 days)", free: true, pro: true },
            { feature: "Yearly sale history", free: false, pro: true },
          ],
        },
        {
          title: "Analytics",
          rows: [
            { feature: "Last 7 days", free: true, pro: true },
            { feature: "Last 30 days", free: true, pro: true },
            {
              feature: "Last 90 / 365 days / all time",
              free: false,
              pro: true,
            },
            { feature: "Custom date range", free: false, pro: true },
            {
              feature: "Period over period comparison",
              free: false,
              pro: true,
            },
            { feature: "Day of week breakdown chart", free: false, pro: true },
            { feature: "Inventory health dashboard", free: false, pro: true },
            { feature: "Product trend search", free: false, pro: true },
            { feature: "Top products & categories", free: true, pro: true },
            { feature: "Payment method breakdown", free: false, pro: true },
          ],
        },
        {
          title: "Exports",
          rows: [
            { feature: "Sales CSV export", free: false, pro: true },
            {
              feature: "Inventory snapshot CSV export",
              free: false,
              pro: true,
            },
            { feature: "PDF sales report", free: false, pro: true },
          ],
        },
        {
          title: "General",
          rows: [
            {
              feature: "Works offline — no internet needed",
              free: true,
              pro: true,
            },
            { feature: "Spanish & English", free: true, pro: true },
            { feature: "Light & dark theme", free: true, pro: true },
          ],
        },
      ],
    },
    cta: {
      title: "Everything you need. Nothing you don't.",
      subtitle:
        "Free to download. No contracts, no paperwork, no internet required. Just your shop, organized.",
      button: "Download Free on Google Play",
    },
  },
  es: {
    hero: {
      title: "Todo lo que tu tienda necesita — empieza gratis",
      subtitle:
        "Control de inventario, registro de ventas y reportes diseñados para tiendas pequeñas y vendedores en Ecuador. Sin capacitación.",
    },
    features: [
      {
        title: "Catálogo de Productos",
        description:
          "Agrega productos con fotos, precios y categorías. Encuentra cualquier artículo en segundos con búsqueda y filtros.",
        icon: "package",
      },
      {
        title: "Control de Stock",
        description:
          "Siempre sabes qué tienes y qué se está acabando. Recibe alertas antes de quedarte sin tus productos más vendidos.",
        icon: "clipboard-list",
      },
      {
        title: "Ventas Rápidas",
        description:
          "Registra ventas en efectivo en segundos. Escanea un código o toca un producto — tu stock se actualiza solo.",
        icon: "shopping-cart",
      },
      {
        title: "Historial de Ventas",
        description:
          "Mira cada venta que has hecho. Revisa qué se vendió, cuándo y por cuánto — todo en un solo lugar.",
        icon: "clock",
      },
      {
        title: "Reportes Simples",
        description:
          "Sabe qué días vendes más, qué productos se mueven más rápido y cuánto estás ganando cada mes.",
        icon: "chart-bar",
      },
      {
        title: "Funciona Sin Internet",
        description:
          "Vende con confianza aunque no tengas señal. Todo se guarda directo en tu celular — sin necesitar conexión.",
        icon: "wifi-off",
      },
    ],
    comparison: {
      title: "Gratis vs Pro",
      subtitle:
        "Empieza gratis. Sube de nivel cuando tu negocio esté listo para crecer.",
      freeTier: "Gratis",
      proTier: "Pro",
      sections: [
        {
          title: "Costos",
          rows: [
            { feature: "Suscripción", free: "$0", pro: "$6.99/mes" },
            {
              feature: "Espacios adicionales de inventario",
              free: "$4.99",
              pro: "$4.99",
            },
          ],
        },
        {
          title: "Inventarios",
          rows: [
            { feature: "Número de inventarios", free: "1", pro: "2" },
            { feature: "Editar / eliminar inventarios", free: true, pro: true },
            {
              feature: "Íconos de inventario con colores",
              free: true,
              pro: true,
            },
            { feature: "Selector de inventario activo", free: true, pro: true },
          ],
        },
        {
          title: "Productos",
          rows: [
            {
              feature: "Agregar / editar / eliminar productos",
              free: true,
              pro: true,
            },
            {
              feature: "Fotos de productos (cámara / galería)",
              free: true,
              pro: true,
            },
            {
              feature: "Escáner de código de barras (SKU)",
              free: false,
              pro: true,
            },
            {
              feature: "Seguimiento de stock y alertas de bajo inventario",
              free: true,
              pro: true,
            },
            { feature: "Gestión de categorías", free: true, pro: true },
            {
              feature: "Calculadora de márgenes de ganancia",
              free: true,
              pro: true,
            },
            {
              feature: "Gráfico de tendencia de ventas por producto",
              free: false,
              pro: true,
            },
          ],
        },
        {
          title: "Ventas",
          rows: [
            {
              feature: "Registrar ventas de múltiples productos",
              free: true,
              pro: true,
            },
            {
              feature: "Precio personalizado por artículo",
              free: true,
              pro: true,
            },
            {
              feature: "Escanear código de barras para agregar al carrito",
              free: false,
              pro: true,
            },
            {
              feature: "Anular ventas (con restauración de stock)",
              free: true,
              pro: true,
            },
            {
              feature: "Historial de ventas (últimos 30 días)",
              free: true,
              pro: true,
            },
            {
              feature: "Historial de ventas (últimos 365 días)",
              free: false,
              pro: true,
            },
          ],
        },
        {
          title: "Analíticas",
          rows: [
            { feature: "Últimos 7 días", free: true, pro: true },
            { feature: "Últimos 30 días", free: true, pro: true },
            {
              feature: "Últimos 90 / 365 días / todo el tiempo",
              free: false,
              pro: true,
            },
            {
              feature: "Rango de fechas personalizado",
              free: false,
              pro: true,
            },
            {
              feature: "Comparación período a período",
              free: false,
              pro: true,
            },
            { feature: "Gráfico por día de la semana", free: false, pro: true },
            {
              feature: "Panel de salud del inventario",
              free: false,
              pro: true,
            },
            {
              feature: "Búsqueda de tendencias de productos",
              free: false,
              pro: true,
            },
            {
              feature: "Mejores productos y categorías",
              free: true,
              pro: true,
            },
            { feature: "Desglose por método de pago", free: false, pro: true },
          ],
        },
        {
          title: "Exportaciones",
          rows: [
            { feature: "Exportar ventas en CSV", free: false, pro: true },
            { feature: "Exportar inventario en CSV", free: false, pro: true },
            { feature: "Reporte de ventas en PDF", free: false, pro: true },
          ],
        },
        {
          title: "General",
          rows: [
            {
              feature: "Funciona sin internet (offline)",
              free: true,
              pro: true,
            },
            { feature: "Español e inglés", free: true, pro: true },
            { feature: "Tema claro y oscuro", free: true, pro: true },
          ],
        },
      ],
    },
    cta: {
      title: "Ordena tu negocio de manera simple y rápida",
      subtitle:
        "Gratis. Sin contratos, sin papeleos, sin necesitar internet. Solo tu negocio, en orden.",
      button: "Descargar Gratis en Google Play",
    },
  },
};
