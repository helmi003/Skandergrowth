import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { stats } from "@/content/companies";
import type { Locale } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { CountUp } from "@/components/motion/count-up";

export function SocialProof() {
  const t = useTranslations("SocialProof");
  const locale = useLocale() as Locale;

  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-paper)] py-10">
      <Container>
        <p data-reveal className="mb-8 text-center text-sm font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
          {t("title")}
        </p>
        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              className="group flex flex-col items-center gap-1 text-center"
            >
              <dt className="order-2 text-sm text-[var(--color-ink-soft)]">
                {stat.label[locale]}
              </dt>
              <dd className="order-1 text-3xl font-bold text-[var(--color-primary)] transition-transform duration-300 group-hover:scale-110 sm:text-4xl">
                <CountUp value={stat.value} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
