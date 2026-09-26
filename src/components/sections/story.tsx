import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Story() {
  const t = useTranslations("Story");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section id="about" className="bg-[var(--color-paper)] py-16 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div data-reveal="start" className="lg:sticky lg:top-28">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        </div>
        <div className="flex flex-col gap-4">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              className="text-base leading-relaxed text-[var(--color-ink-soft)]">
              {p}
            </p>
          ))}
          <p data-reveal className="mt-2 border-s-4 border-[var(--color-primary)] ps-4 text-lg font-semibold text-[var(--color-ink)]">
            {t("goal")}
          </p>
        </div>
      </Container>
    </section>
  );
}
