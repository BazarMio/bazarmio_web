"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useTransition,
} from "react";
import { useRouter } from "next/navigation";
import { Lang } from "@/lib/types";

interface SettingsContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  isChanging: boolean;
}

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined,
);

interface SettingsProviderProps {
  children: React.ReactNode;
  initialLang?: Lang;
}

/** Utility function to set language cookie client-side */
function setCookieLang(lang: Lang) {
  document.cookie = `LOCALE=${lang}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
}

/** Utility function to read language from cookie */
function getCookieLang(): Lang | undefined {
  const cookieLang = document.cookie
    .split("; ")
    .find((row) => row.startsWith("LOCALE="))
    ?.split("=")[1] as Lang | undefined;

  if (cookieLang && (cookieLang === "en" || cookieLang === "es")) {
    return cookieLang;
  }
  return undefined;
}

export function SettingsProvider({
  children,
  initialLang = "en",
}: SettingsProviderProps) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  // Read from cookie on mount (client-side)
  useEffect(() => {
    const cookieLang = getCookieLang();
    if (cookieLang) {
      setTimeout(() => setLangState(cookieLang), 0);
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    setCookieLang(newLang);

    startTransition(() => {
      // Refresh to update server components with new language
      router.refresh();
    });
  };

  return (
    <SettingsContext.Provider value={{ lang, setLang, isChanging: isPending }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
}
