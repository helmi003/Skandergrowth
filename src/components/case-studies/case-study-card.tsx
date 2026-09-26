import { useTranslations, useLocale } from "next-intl";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { CaseStudy } from "@/types/content";
import type { Locale } from "@/i18n/routing";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const t = useTranslations("CaseStudies");
  const locale = useLocale() as Locale;

  return (
    <div className="group h-full">
      <Card className="flex h-full flex-col gap-4 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-[var(--color-primary)]/30 group-hover:shadow-xl group-hover:shadow-[var(--color-ink)]/5">
        <div className="flex flex-wrap items-center gap-2">
          {caseStudy.platforms.map((platform) => (
            <Badge key={platform}>{platform}</Badge>
          ))}
        </div>

        <div>
          <h3 className="text-lg font-bold text-[var(--color-ink)]">
            {caseStudy.client}
          </h3>
          <p className="text-sm text-[var(--color-ink-soft)]">
            {caseStudy.industry[locale]} · {caseStudy.market[locale]}
          </p>
        </div>

        <p className="text-sm text-[var(--color-ink-soft)]">
          {caseStudy.objective[locale]}
        </p>

        <dl className="flex flex-col gap-3 rounded-[var(--radius-md)] bg-[var(--color-paper-soft)] p-4 text-sm">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
              {t("strategy")}
            </dt>
            <dd className="mt-1 text-[var(--color-ink-soft)]">{caseStudy.strategy[locale]}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
              {t("result")}
            </dt>
            <dd className="mt-1 font-medium text-[var(--color-ink)]">{caseStudy.result[locale]}</dd>
          </div>
        </dl>

        {caseStudy.metrics.length > 0 ? (
          <div className="mt-auto grid grid-cols-3 gap-3 border-t border-[var(--color-border)] pt-4">
            {caseStudy.metrics.map((metric) => (
              <div key={metric.label[locale]} className="text-center">
                <div className="text-lg font-bold text-[var(--color-primary)]">
                  {metric.value}
                </div>
                <div className="text-xs text-[var(--color-ink-soft)]">
                  {metric.label[locale]}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </Card>
    </div>
  );
}
