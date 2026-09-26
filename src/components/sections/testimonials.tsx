import { useTranslations } from "next-intl";
import { ExternalLink, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  const t = useTranslations("Testimonials");

  return (
    <section id="testimonials" className="bg-[var(--color-paper)] py-16 sm:py-24">
      <Container>
        <div data-reveal>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("intro")}
          align="center"
          className="mx-auto"
        />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.id}
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 100}ms` } as React.CSSProperties}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <p data-reveal className="mx-auto mt-10 max-w-xl text-center text-sm text-[var(--color-ink-soft)]">
          {t("note")}
        </p>

        <div
          data-reveal="scale"
          className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-5 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-paper)] p-6 text-center shadow-sm sm:flex-row sm:justify-between sm:p-8 sm:text-start"
        >
          <div>
            <div className="flex items-center justify-center gap-0.5 sm:justify-start">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
              ))}
            </div>
            <h3 className="mt-2 text-lg font-bold text-[var(--color-ink)]">{t("mostaqlTitle")}</h3>
            <p className="text-sm text-[var(--color-ink-soft)]">{t("mostaqlText")}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:items-end">
            <a
              href={siteConfig.mostaql.reviews}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "sm", className: "group" })}
            >
              {t("mostaqlReviews")}
              <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={siteConfig.mostaql.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "sm", className: "group" })}
            >
              {t("mostaqlPortfolio")}
              <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
