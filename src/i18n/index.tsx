import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { es } from "./es";
import { en } from "./en";
import { de } from "./de";
import type { Locale, Translations } from "./types";

export type { Locale, Translations } from "./types";

const translations: Record<Locale, Translations> = { es, en, de };

const STORAGE_KEY = "liminal-code-locale";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return "es";
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "es" || stored === "en" || stored === "de" ? stored : "es";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used within LanguageProvider");
  return value;
}

export function useT() {
  return useLanguage().t;
}
