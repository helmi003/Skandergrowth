import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { companies } from "@/content/companies";
import type { Company } from "@/types/content";
import type { Locale } from "@/i18n/routing";

function CompanyTile({ company, locale, hidden }: { company: Company; locale: Locale; hidden?: boolean }) {
  return (
    <li
      aria-hidden={hidden || undefined}
      className="group flex w-44 shrink-0 flex-col items-center gap-3 px-3 sm:w-52"
    >
      <div className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-paper)] p-3 shadow-sm transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-[var(--color-primary)]/30 group-hover:shadow-xl group-hover:shadow-[var(--color-ink)]/10 sm:h-32 sm:w-32">
        {company.logo ? (
          <Image
            src={company.logo}
            alt={hidden ? "" : company.name}
            width={128}
            height={128}
            className="h-full w-full object-contain grayscale-[65%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
          />
        ) : (
          <span className="text-center text-sm font-extrabold leading-tight text-[var(--color-ink)]">
            {company.name}
          </span>
        )}
      </div>
      <div className="text-center">
        <div className="text-sm font-bold text-[var(--color-ink)]">{company.name}</div>
        <div className="text-xs text-[var(--color-ink-soft)]">{company.industry[locale]}</div>
      </div>
    </li>
  );
}

export function Companies() {
  const t = useTranslations("Companies");
  const locale = useLocale() as Locale;

  return (
    <section id="companies" className="overflow-hidden border-y border-border bg-paper py-16 sm:py-24">
      <Container data-reveal>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
          className="mx-auto"
        />
      </Container>

      {/* Infinite marquee: the list is rendered twice and the track slides by
          half its width; hovering pauses it. */}
      <div data-reveal="fade" className="marquee marquee-mask mt-12">
        <ul
          className="marquee-track flex w-max py-3"
          style={{ "--marquee-duration": "45s" } as React.CSSProperties}
        >
          {companies.map((c) => (
            <CompanyTile key={c.name} company={c} locale={locale} />
          ))}
          {companies.map((c) => (
            <CompanyTile key={`${c.name}-dup`} company={c} locale={locale} hidden />
          ))}
        </ul>
      </div>
    </section>
  );
}
