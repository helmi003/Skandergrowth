import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr", "ar"],
  // Visitors land on the language their browser asks for (Accept-Language);
  // anything we don't support falls back to Arabic. The locale never appears
  // in the URL: a manual switch is stored in the NEXT_LOCALE cookie (a cookie,
  // not localStorage, because the server must know the language to render
  // the page) and takes precedence on later visits.
  defaultLocale: "ar",
  localePrefix: "never",
  localeDetection: true,
  localeCookie: { maxAge: 60 * 60 * 24 * 365 },
});

export type Locale = (typeof routing.locales)[number];
