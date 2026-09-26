import { useTranslations, useLocale } from "next-intl";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/content/services";
import { serviceIcons } from "@/lib/service-icons";
import type { Locale } from "@/i18n/routing";

export function ServicesPreview() {
  const t = useTranslations("Services");
  const locale = useLocale() as Locale;

  return (
    <section id="services" className="py-16 sm:py-24">
      <Container>
        <div data-reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            return (
              <div
                key={service.slug}
                data-reveal
                style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties}
                className="group"
              >
                <Card className="flex h-full flex-col gap-3 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-[var(--color-primary)]/30 group-hover:shadow-xl group-hover:shadow-[var(--color-ink)]/5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary-soft)] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[var(--color-primary)]">
                    {Icon ? <Icon className="h-5 w-5 text-[var(--color-primary)] transition-colors duration-500 group-hover:text-white" /> : null}
                  </div>
                  <h3 className="font-semibold text-[var(--color-ink)]">
                    {service.name[locale]}
                  </h3>
                  <p className="text-sm text-[var(--color-ink-soft)]">
                    {service.tagline[locale]}
                  </p>
                  <ul className="mt-1 flex flex-col gap-1.5 border-t border-[var(--color-border)] pt-3">
                    {service.deliverables[locale].slice(0, 3).map((d) => (
                      <li key={d} className="flex items-start gap-2 text-xs text-[var(--color-ink-soft)]">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--color-primary)]" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                    {service.platforms.map((p) => (
                      <Badge key={p}>{p}</Badge>
                    ))}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
