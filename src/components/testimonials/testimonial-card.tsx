import { useTranslations, useLocale } from "next-intl";
import { BadgeCheck, ChevronDown, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ZoomableImage } from "@/components/ui/zoomable-image";
import type { Testimonial } from "@/types/content";
import type { Locale } from "@/i18n/routing";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const t = useTranslations("Testimonials");
  const locale = useLocale() as Locale;

  return (
    <Card className="flex h-full flex-col gap-4 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-(--color-ink)/5">
      <div className="flex items-center gap-0.5" aria-label={`${testimonial.rating}/5`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>

      <p className="text-[15px] italic leading-relaxed text-ink">
        “{testimonial.quote[locale]}”
      </p>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-4">
        <span className="text-sm font-semibold text-ink-soft">
          {testimonial.clientLabel[locale]}
        </span>
        <span className="text-xs text-ink-soft">
          {t("sourceLabel")} {testimonial.source}
        </span>
      </div>

      <details className="group text-xs text-ink-soft">
        <summary className="flex w-fit cursor-pointer select-none list-none items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1.5 font-semibold text-primary transition-colors hover:bg-primary hover:text-white [&::-webkit-details-marker]:hidden">
          <BadgeCheck className="h-3.5 w-3.5" />
          <span className="group-open:hidden">{t("viewReview")}</span>
          <span className="hidden group-open:inline">{t("hideReview")}</span>
          <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-open:rotate-180" />
        </summary>
        <div className="mt-3">
          <ZoomableImage
            src={testimonial.screenshot}
            alt={`${t("sourceLabel")} ${testimonial.source} — ${testimonial.clientLabel[locale]}`}
            width={1110}
            height={700}
            zoomLabel={t("zoomReview")}
            closeLabel={t("close")}
            caption={testimonial.clientLabel[locale]}
          />
        </div>
      </details>
    </Card>
  );
}
