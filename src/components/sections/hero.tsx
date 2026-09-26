import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, ShoppingBag, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { AnalyticsEvent } from "@/lib/analytics";
import { siteConfig, whatsappLink } from "@/lib/site-config";

const rise = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as React.CSSProperties;

export function Hero() {
  const t = useTranslations("Hero");
  const chips = t.raw("chips") as string[];
  // One sentence per line, without the trailing full stop:
  // "Better ads. More customers. Measurable growth." → 3 lines
  const titleLines = t("title")
    .split(/\.\s*/)
    .filter(Boolean);

  return (
    <section id="home" className="relative overflow-hidden bg-paper-soft">
      <div className="bg-grid pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" />
      <div className="glow-pulse pointer-events-none absolute -top-40 inset-e-[-10%] h-130 w-130 rounded-full bg-primary/15 blur-3xl" />
      <div className="glow-pulse pointer-events-none absolute -bottom-40 inset-s-[-10%] h-105 w-105 rounded-full bg-accent/15 blur-3xl [animation-delay:-4s]" />

      <Container className="relative grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div className="flex flex-col gap-6">
          <span
            className="rise-in flex w-fit items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-sm font-semibold text-primary"
            style={rise(0)}
          >
            <span className="relative flex h-2 w-2">
              <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-primary" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {t("eyebrow")}
          </span>
          <h1
            className="rise-in text-[2.125rem] font-bold leading-[1.2] tracking-tight text-ink sm:text-5xl lg:text-6xl"
            style={rise(100)}
          >
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="rise-in max-w-xl text-lg text-ink-soft" style={rise(200)}>
            {t("subtitle")}
          </p>

          <div className="rise-in flex flex-wrap gap-2" style={rise(300)}>
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-border bg-paper px-3.5 py-1.5 text-sm font-medium text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="rise-in flex flex-col gap-3 pt-2 sm:flex-row sm:items-center" style={rise(400)}>
            <a href="#contact" className={buttonVariants({ size: "lg", className: "group cta-attention" })}>
              {t("ctaPrimary")}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>
            <TrackedLink
              event={AnalyticsEvent.WhatsappClick}
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "lg", className: "group bg-paper" })}
            >
              <WhatsappIcon className="h-5 w-5 text-[#25d366] transition-transform duration-300 group-hover:scale-110" />
              {t("ctaSecondary")}
            </TrackedLink>
          </div>
          <p className="rise-in max-w-md text-sm text-ink-soft" style={rise(500)}>
            {t("ctaCaption")}
          </p>
        </div>

        <div className="rise-in relative mx-auto w-full max-w-sm" style={rise(250)}>
          {/* Offset frame behind the photo */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-4xl border-2 border-primary/25 rtl:-translate-x-4" />
          <div className="group relative aspect-4/5 overflow-hidden rounded-4xl bg-paper shadow-2xl shadow-(--color-ink)/15">
            <Image
              src={siteConfig.portrait}
              alt="Skander Ben Jannette — Media Buyer & Performance Marketer"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 384px"
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-ink/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-5 text-sm font-semibold text-white">
              <span className="h-2 w-2 rounded-full bg-[#25d366]" />
              {t("available")}
            </div>
          </div>

          {/* Floating proof cards — numbers from real dashboards in /content/results */}
          <div
            className="float absolute -inset-s-6 top-10 flex items-center gap-3 rounded-2xl border border-border bg-paper/95 px-4 py-3 shadow-xl backdrop-blur sm:-inset-s-12"
            style={{ "--float-delay": "0ms" } as React.CSSProperties}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <TrendingUp className="h-5 w-5" />
            </span>
            <div>
              <div className="text-lg font-bold leading-none text-ink" dir="ltr">32.54x</div>
              <div className="mt-1 text-xs text-ink-soft">{t("statRoas")}</div>
            </div>
          </div>
          <div
            className="float absolute -inset-e-4 bottom-20 flex items-center gap-3 rounded-2xl border border-border bg-paper/95 px-4 py-3 shadow-xl backdrop-blur sm:-inset-e-10"
            style={{ "--float-delay": "-3s" } as React.CSSProperties}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <ShoppingBag className="h-5 w-5" />
            </span>
            <div>
              <div className="text-lg font-bold leading-none text-ink" dir="ltr">407</div>
              <div className="mt-1 text-xs text-ink-soft">{t("statPurchases")}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
