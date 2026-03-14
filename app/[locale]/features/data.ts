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
          "Organize your products with photos, prices, and descriptions. Search and filter to find items quickly.",
        icon: "package",
      },
      {
        title: "Inventory Control",
        description:
          "Track stock levels in real-time. Get alerts when items are running low so you never miss a sale.",
        icon: "clipboard-list",
      },
      {
        title: "Quick Sales",
        description:
          "Ring up sales fast with an intuitive interface. Accept cash or digital payments.",
        icon: "shopping-cart",
      },
      {
        title: "Sales History",
        description:
          "Review all past transactions. Track what's selling and identify your best customers.",
        icon: "clock",
      },
      {
        title: "Daily Reports",
        description:
          "See your daily, weekly, and monthly performance. Understand trends and make informed decisions.",
        icon: "chart-bar",
      },
      {
        title: "Multi-Device Sync",
        description:
          "Access your data from any device. Changes sync instantly across all your devices.",
        icon: "refresh",
      },
      {
        title: "Low Stock Alerts",
        description:
          "Never run out of popular items. Get notified when inventory drops below your threshold.",
        icon: "alert-triangle",
      },
      {
        title: "Easy Setup",
        description:
          "Get started in minutes. Import products from a spreadsheet or add them one by one.",
        icon: "zap",
      },
      {
        title: "Works Offline",
        description:
          "Keep selling even without internet. Data syncs automatically when you're back online.",
        icon: "wifi-off",
      },
    ],
    comparison: {
      title: "Free vs Pro",
      subtitle:
        "Everything you need to grow — start free, upgrade when you're ready",
      freeTier: "Free",
      proTier: "Pro",
      sections: [
        {
          title: "Price",
          rows: [
            {
              feature: "Cost to use",
              free: "Free",
              pro: "$6.99/month",
            },
            {
              feature: "Additional Inventory slots (one-time purchase)",
              free: "$4.99",
              pro: "$4.99",
            },
          ],
        },
        {
          title: "Inventories",
          rows: [
            { feature: "Number of inventories", free: "1", pro: "1" },
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
            { feature: "Barcode scanner (SKU)", free: true, pro: true },
            {
              feature: "Stock tracking & low stock alerts",
              free: true,
              pro: true,
            },
            { feature: "Category management", free: true, pro: true },
            { feature: "Profit margins calculator", free: true, pro: true },
            { feature: "Product sales trend chart", free: false, pro: true },
          ],
        },
        {
          title: "Sales",
          rows: [
            { feature: "Record multi-product sales", free: true, pro: true },
            { feature: "Price override per item", free: true, pro: true },
            { feature: "Barcode scan to add to cart", free: true, pro: true },
            {
              feature: "Void sales (with stock restore)",
              free: true,
              pro: true,
            },
            { feature: "Full sale history", free: true, pro: true },
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
            {
              feature: "Top products & categories table",
              free: true,
              pro: true,
            },
            { feature: "Payment method breakdown", free: true, pro: true },
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
              feature: "Offline first (no internet needed)",
              free: true,
              pro: true,
            },
            { feature: "Spanish & English language", free: true, pro: true },
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
      title: "Todo lo que Tu Tienda Necesita — Gratis para Empezar",
      subtitle:
        "Control de inventario, registro de ventas y reportes diseñados para tiendas pequeñas y vendedores en Ecuador. Sin capacitación.",
    },
    features: [
      {
        title: "Catálogo de Productos",
        description:
          "Organiza tus productos con fotos, precios y descripciones. Busca y filtra para encontrar artículos rápidamente.",
        icon: "package",
      },
      {
        title: "Control de Inventario",
        description:
          "Rastrea los niveles de stock en tiempo real. Recibe alertas cuando los artículos se están agotando para no perder ventas.",
        icon: "clipboard-list",
      },
      {
        title: "Ventas Rápidas",
        description:
          "Registra ventas rápidamente con una interfaz intuitiva. Acepta efectivo o pagos digitales.",
        icon: "shopping-cart",
      },
      {
        title: "Historial de Ventas",
        description:
          "Revisa todas las transacciones pasadas. Rastrea qué se vende e identifica tus mejores clientes.",
        icon: "clock",
      },
      {
        title: "Reportes Diarios",
        description:
          "Ve tu desempeño diario, semanal y mensual. Entiende tendencias y toma decisiones informadas.",
        icon: "chart-bar",
      },
      {
        title: "Sincronización Multi-Dispositivo",
        description:
          "Accede a tus datos desde cualquier dispositivo. Los cambios se sincronizan instantáneamente.",
        icon: "refresh",
      },
      {
        title: "Alertas de Stock Bajo",
        description:
          "Nunca te quedes sin artículos populares. Recibe notificaciones cuando el inventario baje del límite.",
        icon: "alert-triangle",
      },
      {
        title: "Configuración Fácil",
        description:
          "Comienza en minutos. Importa productos desde una hoja de cálculo o agrégalos uno por uno.",
        icon: "zap",
      },
      {
        title: "Funciona Sin Internet",
        description:
          "Sigue vendiendo sin internet. Los datos se sincronizan automáticamente cuando vuelves a estar en línea.",
        icon: "wifi-off",
      },
    ],
    comparison: {
      title: "Gratis vs Pro",
      subtitle:
        "Todo lo que necesitas para crecer — empieza gratis, mejora cuando estés listo",
      freeTier: "Gratis",
      proTier: "Pro",
      sections: [
        {
          title: "Precio",
          rows: [
            {
              feature: "Costo de uso",
              free: "Gratis",
              pro: "$6.99/mes",
            },
            {
              feature: "Espacios adicionales de inventario (compra única)",
              free: "$4.99",
              pro: "$4.99",
            },
          ],
        },
        {
          title: "Inventarios",
          rows: [
            { feature: "Número de inventarios", free: "1", pro: "1" },
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
              free: true,
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
              free: true,
              pro: true,
            },
            {
              feature: "Anular ventas (con restauración de stock)",
              free: true,
              pro: true,
            },
            { feature: "Historial completo de ventas", free: true, pro: true },
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
              feature: "Tabla de mejores productos y categorías",
              free: true,
              pro: true,
            },
            { feature: "Desglose por método de pago", free: true, pro: true },
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
            { feature: "Idiomas español e inglés", free: true, pro: true },
            { feature: "Tema claro y oscuro", free: true, pro: true },
          ],
        },
      ],
    },
    cta: {
      title: "Todo lo que necesitas. Nada que no uses.",
      subtitle:
        "Gratis. Sin contratos, sin papeleos, sin necesitar internet. Solo tu negocio, en orden.",
      button: "Descargar Gratis en Google Play",
    },
  },
};
