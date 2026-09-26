import { useTranslations } from "next-intl";
import { AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui/container";

export function PainPoints() {
  const t = useTranslations("PainPoints");
  const items = t.raw("items") as string[];

  return (
    <section className="bg-[var(--color-paper-soft)] py-16 sm:py-24">
      <Container className="mx-auto max-w-3xl">
        <h2 data-reveal className="balance text-center text-xl font-bold leading-snug tracking-tight text-[var(--color-ink)] sm:text-3xl">
          {t("title")}
        </h2>

        <ul className="mt-10 flex flex-col gap-4">
          {items.map((item, i) => (
            <li
              key={item}
              data-reveal="start"
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              className="flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-paper)] p-4 transition-all duration-300 hover:border-[var(--color-accent)]/40 hover:shadow-md"
            >
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
              <span className="text-[15px] text-[var(--color-ink-soft)]">{item}</span>
            </li>
          ))}
        </ul>

        <div data-reveal className="mt-10 text-center">
          <p className="text-base text-[var(--color-ink-soft)]">{t("closing")}</p>
          <p className="mt-2 text-lg font-semibold text-[var(--color-ink)]">
            {t("closingBold")}
          </p>
        </div>
      </Container>
    </section>
  );
}
