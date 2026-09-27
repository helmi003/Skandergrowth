import { useLocale, useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ResultsGallery } from "@/components/results/results-gallery";
import { results } from "@/content/results";
import type { Locale } from "@/i18n/routing";

export function Results() {
  const t = useTranslations("Results");
  const locale = useLocale() as Locale;

  const items = results.map((r) => ({
    src: r.src,
    width: r.width,
    height: r.height,
    platform: r.platform,
    metric: r.metric[locale],
    title: r.title[locale],
  }));

  return (
    <section id="results" className="relative overflow-hidden bg-paper-soft py-16 sm:py-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,#000,transparent_40%)]" />
      <Container className="relative">
        <div data-reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
            align="center"
            className="mx-auto"
          />
        </div>
        <ResultsGallery
          items={items}
          labels={{
            all: t("all"),
            close: t("close"),
            prev: t("prev"),
            next: t("next"),
            zoom: t("zoom"),
            showMore: t("showMore"),
            showLess: t("showLess"),
          }}
        />
      </Container>
    </section>
  );
}
