"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { useSettings } from "../../context/SettingProvider";

const languages = {
  en: { label: "English", code: "EN" },
  es: { label: "Español", code: "ES" },
};

export function LanguageSelector() {
  const { lang, setLang, isChanging } = useSettings();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          disabled={isChanging}
          className="h-9 px-3 gap-2 text-sm font-semibold text-gray-400 hover:text-lime hover:bg-[--bazarmio-dark]"
          aria-label="Select language"
        >
          <Languages className="size-4" />
          {languages[lang].code}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuRadioGroup
          value={lang}
          onValueChange={(value) => setLang(value as "en" | "es")}
        >
          <DropdownMenuRadioItem
            value="en"
            className="hover:bg-primary hover:text-lime focus:bg-[--bazarmio-lime] focus:text-black"
          >
            {languages.en.label}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="es"
            className="hover:bg-primary hover:text-lime focus:bg-[--bazarmio-lime] focus:text-black"
          >
            {languages.es.label}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
