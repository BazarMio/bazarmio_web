const BASE_URL = "https://bazarmio.com";

const PUBLISHER = {
  "@type": "Organization",
  name: "Mio Labs LLC",
  url: BASE_URL,
  email: "support@bazarmio.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "WY",
    addressCountry: "US",
  },
};

type WebPageJsonLdOptions = {
  locale: string;
  path: string;
  name: string;
  description: string;
  breadcrumbLabel: string;
  homeLabel: string;
  datePublished: string;
  dateModified?: string;
};

type HomeJsonLdOptions = {
  locale: string;
  pageTitle: string;
  pageDescription: string;
  appDescription: string;
};

export function getHomeJsonLd(options: HomeJsonLdOptions): object {
  const { locale, pageTitle, pageDescription, appDescription } = options;
  const url = `${BASE_URL}/${locale}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        name: "BazarMio",
        url: BASE_URL,
        inLanguage: locale,
        publisher: { "@id": `${BASE_URL}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Mio Labs LLC",
        url: BASE_URL,
        email: "support@bazarmio.com",
        address: {
          "@type": "PostalAddress",
          addressRegion: "WY",
          addressCountry: "US",
        },
      },
      {
        "@type": "WebPage",
        "@id": url,
        name: pageTitle,
        description: pageDescription,
        url,
        inLanguage: locale,
        datePublished: "2026-03-08",
        dateModified: "2026-03-08",
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${BASE_URL}/#app` },
        publisher: { "@id": `${BASE_URL}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${BASE_URL}/#app`,
        name: "BazarMio",
        operatingSystem: "Android",
        applicationCategory: "BusinessApplication",
        description: appDescription,
        url: BASE_URL,
        inLanguage: locale,
        offers: [
          {
            "@type": "Offer",
            name: locale === "es" ? "Gratis" : "Free",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "Pro",
            price: "6.99",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            description:
              locale === "es" ? "Suscripción mensual" : "Monthly subscription",
          },
        ],
        publisher: { "@id": `${BASE_URL}/#organization` },
      },
    ],
  };
}

type FeaturesJsonLdOptions = {
  locale: string;
  heroSubtitle: string;
  featureList: string;
  freeTierName: string;
  proTierName: string;
  pageTitle: string;
  pageDescription: string;
  homeLabel: string;
  pageLabel: string;
};

export function getFeaturesJsonLd(options: FeaturesJsonLdOptions): object {
  const {
    locale,
    heroSubtitle,
    featureList,
    freeTierName,
    proTierName,
    pageTitle,
    pageDescription,
    homeLabel,
    pageLabel,
  } = options;

  const url = `${BASE_URL}/${locale}/features`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        name: pageTitle,
        description: pageDescription,
        url,
        inLanguage: locale,
        datePublished: "2026-03-08",
        dateModified: "2026-03-08",
        publisher: PUBLISHER,
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: homeLabel,
              item: `${BASE_URL}/${locale}`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: pageLabel,
              item: url,
            },
          ],
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${BASE_URL}/#app`,
        name: "BazarMio",
        operatingSystem: "Android",
        applicationCategory: "BusinessApplication",
        description: heroSubtitle,
        url: BASE_URL,
        inLanguage: locale,
        featureList,
        offers: [
          {
            "@type": "Offer",
            name: freeTierName,
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: proTierName,
            price: "6.99",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            description: locale === "es" ? "Suscripción mensual" : "Monthly subscription",
          },
        ],
        publisher: PUBLISHER,
      },
    ],
  };
}

export function getWebPageJsonLd(options: WebPageJsonLdOptions): object {
  const {
    locale,
    path,
    name,
    description,
    breadcrumbLabel,
    homeLabel,
    datePublished,
    dateModified = datePublished,
  } = options;

  const url = `${BASE_URL}/${locale}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    inLanguage: locale,
    datePublished,
    dateModified,
    publisher: PUBLISHER,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: homeLabel,
          item: `${BASE_URL}/${locale}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: breadcrumbLabel,
          item: url,
        },
      ],
    },
  };
}
