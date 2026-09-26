import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Testimonial } from "@/types/content";
import type { Locale } from "@/i18n/routing";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const t = useTranslations("Testimonials");
  const locale = useLocale() as Locale;

  return (
    <Card className="flex h-full flex-col gap-4 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-primary)]/30 hover:shadow-xl hover:shadow-[var(--color-ink)]/5">
      <div className="flex items-center gap-0.5" aria-label={`${testimonial.rating}/5`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
        ))}
      </div>

      <p className="text-[15px] italic leading-relaxed text-[var(--color-ink)]">
        “{testimonial.quote[locale]}”
      </p>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-[var(--color-border)] pt-4">
        <span className="text-sm font-semibold text-[var(--color-ink-soft)]">
          {testimonial.clientLabel[locale]}
        </span>
        <span className="text-xs text-[var(--color-ink-soft)]">
          {t("sourceLabel")} {testimonial.source}
        </span>
      </div>

      <details className="group text-xs text-[var(--color-ink-soft)]">
        <summary className="cursor-pointer select-none font-medium text-[var(--color-primary)]">
          {testimonial.source} screenshot
        </summary>
        <div className="relative mt-3 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)]">
          <Image
            src={testimonial.screenshot}
            alt={`${testimonial.source} review screenshot — ${testimonial.clientLabel[locale]}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 90vw, 400px"
          />
        </div>
      </details>
    </Card>
  );
}
