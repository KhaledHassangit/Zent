import type { Dictionary, Locale } from "@/types/types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/translations/en.json").then((m) => m.default as Dictionary),
  ar: () => import("@/translations/ar.json").then((m) => m.default as Dictionary),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}

export function isValidLocale(locale: string): locale is Locale {
  return locale === "en" || locale === "ar";
}
