import { useTranslations } from "next-intl";
import { ArrowUpRight, Mail, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { AnalyticsEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { siteConfig, whatsappLink } from "@/lib/site-config";

const cardClass =
  "group relative flex h-full flex-col items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-paper)] p-6 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-primary)]/30 hover:shadow-xl hover:shadow-[var(--color-ink)]/5";

const iconClass =
  "flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6";

function Arrow() {
  return (
    <ArrowUpRight className="absolute end-4 top-4 h-4 w-4 text-[var(--color-ink-soft)] opacity-0 transition-all duration-300 group-hover:opacity-100 rtl:-scale-x-100" />
  );
}

export function ContactSection() {
  const t = useTranslations("Contact");
  const tTestimonials = useTranslations("Testimonials");
  const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

  return (
    <section id="contact" className="bg-[var(--color-paper-soft)] py-16 sm:py-24">
      <Container>
        <div data-reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
            align="center"
            className="mx-auto"
          />
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-3">
          <div data-reveal style={delay(0)}>
            <TrackedLink
              event={AnalyticsEvent.WhatsappClick}
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
            >
              <Arrow />
              <span className={cn(iconClass, "bg-[#25d366]/15 text-[#1da851]")}>
                <WhatsappIcon className="h-7 w-7" />
              </span>
              <span className="font-bold text-[var(--color-ink)]">{t("whatsapp")}</span>
              <span className="text-sm text-[var(--color-ink-soft)]" dir="ltr">
                {siteConfig.whatsappDisplay}
              </span>
            </TrackedLink>
          </div>

          <div data-reveal style={delay(100)}>
            <TrackedLink
              event={AnalyticsEvent.EmailClick}
              href={`mailto:${siteConfig.email}`}
              className={cardClass}
            >
              <Arrow />
              <span className={cn(iconClass, "bg-[var(--color-primary-soft)] text-[var(--color-primary)]")}>
                <Mail className="h-6 w-6" />
              </span>
              <span className="font-bold text-[var(--color-ink)]">{t("email")}</span>
              <span className="break-all text-sm text-[var(--color-ink-soft)]">{siteConfig.email}</span>
            </TrackedLink>
          </div>

          <div data-reveal style={delay(200)}>
            <a
              href={siteConfig.mostaql.reviews}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
            >
              <Arrow />
              <span className={cn(iconClass, "bg-[var(--color-accent)]/15 text-[var(--color-accent)]")}>
                <Star className="h-6 w-6 fill-current" />
              </span>
              <span className="font-bold text-[var(--color-ink)]">Mostaql</span>
              <span className="text-sm text-[var(--color-ink-soft)]">{tTestimonials("mostaqlReviews")}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
