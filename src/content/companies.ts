import type { Company, Stat } from "@/types/content";

// Logos live in /public/images/logos. Companies without a logo file render
// as a text tile in the marquee.
export const companies: Company[] = [
  {
    name: "Luban Al Ghazal",
    logo: "/images/logos/luban-alghazal.png",
    industry: { en: "E-commerce", fr: "E-commerce", ar: "تجارة إلكترونية" },
  },
  {
    name: "GARO",
    logo: "/images/logos/garo.png",
    industry: { en: "Home Services", fr: "Services à domicile", ar: "خدمات منزلية" },
  },
  {
    name: "JWEJEM",
    logo: "/images/logos/jwejem.png",
    industry: { en: "Original Products", fr: "Produits originaux", ar: "المنتجات الأصلية" },
  },
  {
    name: "NatVita",
    logo: "/images/logos/natvita.png",
    industry: { en: "Natural Products", fr: "Produits naturels", ar: "منتجات طبيعية" },
  },
  {
    name: "My-Communication",
    logo: "/images/logos/my-communication.png",
    industry: { en: "Communication", fr: "Communication", ar: "اتصالات" },
  },
  {
    name: "Cap Bon School",
    logo: "/images/logos/cap-bon-school.png",
    industry: { en: "Education", fr: "Éducation", ar: "تعليم" },
  },
  {
    name: "United Pro Academy",
    logo: "/images/logos/united-pro-academy.png",
    industry: { en: "Sports Academy", fr: "Académie sportive", ar: "أكاديمية رياضية" },
  },
  {
    name: "ATA Academy",
    industry: { en: "Education", fr: "Éducation", ar: "تعليم" },
  },
  {
    name: "Sketchat Academy",
    industry: { en: "Education", fr: "Éducation", ar: "تعليم" },
  },
  {
    name: "Poterie Royale Plus",
    industry: { en: "E-commerce", fr: "E-commerce", ar: "تجارة إلكترونية" },
  },
  // TODO: confirm the brand name for /images/logos/client-calligraphy.png
  // (from docs/logos) and add it here.
];

export const stats: Stat[] = [
  { value: "5+", label: { en: "Years of experience", fr: "Ans d'expérience", ar: "سنوات خبرة" } },
  { value: "1,000+", label: { en: "Campaigns managed", fr: "Campagnes gérées", ar: "حملة تمت إدارتها" } },
  { value: "$50K+", label: { en: "Ad spend managed", fr: "Budget publicitaire géré", ar: "إنفاق إعلاني تمت إدارته" } },
  { value: "79+", label: { en: "Markets & businesses", fr: "Marchés & entreprises", ar: "سوق ونشاط تجاري" } },
];

export const testimonialsStat: Stat = {
  value: "70+",
  label: { en: "Projects & clients", fr: "Projets & clients", ar: "مشروع وعميل" },
};
