import { useTranslations } from "next-intl";
import { HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { AnalyticsEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { siteConfig, whatsappLink } from "@/lib/site-config";

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

export function FinalCta() {
  const t = useTranslations("FinalCta");
  const questions = t.raw("questions") as string[];

  return (
    <section className="relative overflow-hidden bg-[var(--color-ink)] py-16 text-white sm:py-28">
      <div className="glow-pulse pointer-events-none absolute -top-32 start-1/2 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-[var(--color-primary)]/40 blur-3xl rtl:translate-x-1/2" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.06)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]" />

      <Container className="relative mx-auto max-w-3xl text-center">
        <h2 data-reveal className="balance text-[1.625rem] font-bold leading-snug tracking-tight sm:text-3xl lg:text-4xl">
          {t("title")}
        </h2>
        <p data-reveal style={delay(80)} className="mt-4 text-white/70">
          {t("instead")}
        </p>

        <ul className="mx-auto mt-8 grid max-w-xl gap-3 text-start sm:grid-cols-2">
          {questions.map((q, i) => (
            <li
              key={q}
              data-reveal
              style={delay(120 + i * 70)}
              className="flex items-start gap-2 rounded-[var(--radius-md)] border border-white/10 bg-white/5 p-4 text-sm text-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/50 hover:bg-white/10"
            >
              <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
              {q}
            </li>
          ))}
        </ul>

        <p data-reveal className="mt-10 text-xl font-semibold">
          {t("closing")}
        </p>
        <p data-reveal style={delay(80)} className="mx-auto mt-3 max-w-xl text-white/70">
          {t("description")}
        </p>

        <div data-reveal="scale" style={delay(150)} className="mt-10 flex flex-col items-center gap-3">
          <TrackedLink
            event={AnalyticsEvent.WhatsappClick}
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "group h-14 bg-[#25d366] px-9 text-base text-[#0b1220] shadow-[#25d366]/30 hover:shadow-[#25d366]/40"
            )}
          >
            <WhatsappIcon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            {t("ctaPrimary")}
          </TrackedLink>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            {t("whatsappNote")} · <span dir="ltr">{siteConfig.whatsappDisplay}</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
