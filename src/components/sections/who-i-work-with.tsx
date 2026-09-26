import { useTranslations } from "next-intl";
import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhoIWorkWith() {
  const t = useTranslations("WhoIWorkWith");
  const fit = t.raw("fit") as string[];
  const notFit = t.raw("notFit") as string[];

  return (
    <section className="bg-[var(--color-paper-soft)] py-16 sm:py-24">
      <Container>
        <div data-reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} align="center" className="mx-auto" />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div data-reveal="start" className="rounded-[var(--radius-lg)] border border-[var(--color-primary)]/30 bg-[var(--color-paper)] p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--color-primary)]/10">
            <h3 className="mb-4 font-semibold text-[var(--color-ink)]">{t("fitTitle")}</h3>
            <ul className="flex flex-col gap-3">
              {fit.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-ink-soft)]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties} className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-paper)] p-6">
            <h3 className="mb-4 font-semibold text-[var(--color-ink)]">{t("notFitTitle")}</h3>
            <ul className="flex flex-col gap-3">
              {notFit.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-ink-soft)]">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-ink-soft)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
