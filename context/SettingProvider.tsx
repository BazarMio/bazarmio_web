"use client";

import {
  createContext,
  useContext,
  useState,
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

export function SettingsProvider({
  children,
  initialLang = "en",
}: SettingsProviderProps) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    setCookieLang(newLang);

    startTransition(() => {
      // Replace locale segment in the current URL: /es/features → /en/features
      const currentPath = window.location.pathname;
      const newPath = currentPath.replace(
        /^\/(en|es)(\/|$)/,
        `/${newLang}$2`,
      );
      router.push(newPath);
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
