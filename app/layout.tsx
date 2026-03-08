import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { SettingsProvider } from "@/context/SettingProvider";
import { DefaultNav } from "@/components/navigation/DefaultNav";
import { Footer } from "@/components/navigation/Footer";
import { homeData } from "./data";
import * as ROUTES from "@/lib/routes";
import type { Lang } from "@/lib/types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bazarmio - Simple Inventory Management for Local Merchants",
  description:
    "Track products, manage sales, and grow your market stall or small store with easy-to-use inventory management software.",
  keywords:
    "inventory management, point of sale, local merchants, market stall, small business",
  authors: [{ name: "Bazarmio" }],
  openGraph: {
    title: "Bazarmio - Your Market, Your Way",
    description: "Simple inventory management built for local merchants",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1A1A1A",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get the language from cookie (set by middleware)
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("LOCALE");
  const lang: Lang = (langCookie?.value === "es" ? "es" : "en") as Lang;

  // Get navigation links in the current language
  const navData = homeData[lang].nav;
  const navLinks = [
    { href: ROUTES.HOME, label: navData.home },
    { href: ROUTES.FEATURES, label: navData.features },
    { href: ROUTES.EDUCATION, label: navData.education },
  ];

  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SettingsProvider initialLang={lang}>
          <DefaultNav navLinks={navLinks} />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SettingsProvider>
      </body>
    </html>
  );
}
