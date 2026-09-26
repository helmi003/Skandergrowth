export const siteConfig = {
  name: "Skander Ben Jannette",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://skanderbenjannette.com",
  whatsapp: "21623984894",
  whatsappDisplay: "(+216) 23 984 894",
  email: "skander.bnj7@gmail.com",
  avatar: "/images/brand/skander-avatar.jpg",
  portrait: "/images/brand/skander-portrait.jpg",
  social: {
    // TODO: replace with real profile URLs once provided
    linkedin: undefined as string | undefined,
    instagram: undefined as string | undefined,
    mostaql: "https://mostaql.com/u/skander_bj",
  },
  mostaql: {
    portfolio: "https://mostaql.com/u/skander_bj/portfolio",
    reviews: "https://mostaql.com/u/skander_bj/reviews",
  },
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
