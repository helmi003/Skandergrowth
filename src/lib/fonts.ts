import { Manrope, IBM_Plex_Sans_Arabic } from "next/font/google";

export const latinSans = Manrope({
  subsets: ["latin"],
  variable: "--font-latin-sans",
  display: "swap",
  // Not preloaded: on Arabic pages IBM Plex already covers Latin letters, so a
  // preload would go unused there ("preloaded but not used" warning).
  preload: false,
});

export const arabicSans = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic-sans",
  display: "swap",
  // Not preloaded: English/French pages never use it. Each font is still
  // fetched as soon as text needing it renders (display: swap).
  preload: false,
});
