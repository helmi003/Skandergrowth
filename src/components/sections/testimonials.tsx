import { useTranslations } from "next-intl";
import { ExternalLink, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { Carousel } from "@/components/ui/carousel";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  const t = useTranslations("Testimonials");
  const tResults = useTranslations("Results");

  return (
    <section id="testimonials" className="overflow-hidden bg-paper-soft py-16 sm:py-24">
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

        <div data-reveal className="mt-12">
          <Carousel
            slideClassName="w-[85%] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
            labels={{ prev: tResults("prev"), next: tResults("next") }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Carousel>
        </div>

        <p data-reveal className="mx-auto mt-10 max-w-xl text-center text-sm text-ink-soft">
          {t("note")}
        </p>

        <div
          data-reveal="scale"
          className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-5 rounded-lg border border-border bg-paper p-6 text-center shadow-sm sm:flex-row sm:justify-between sm:p-8 sm:text-start"
        >
          <div>
            <div className="flex items-center justify-center gap-0.5 sm:justify-start">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <h3 className="mt-2 text-lg font-bold text-ink">{t("mostaqlTitle")}</h3>
            <p className="text-sm text-ink-soft">{t("mostaqlText")}</p>
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
