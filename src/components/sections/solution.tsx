import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

interface Step {
  number: string;
  title: string;
  description: string;
}

export function Solution() {
  const t = useTranslations("Solution");
  const steps = t.raw("steps") as Step[];

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div data-reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} align="center" className="mx-auto" />
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li
              key={step.number}
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              className="group flex flex-col gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-primary)]/30 hover:shadow-xl hover:shadow-[var(--color-ink)]/5"
            >
              <span className="text-3xl font-bold text-[var(--color-primary)]/30 transition-colors duration-500 group-hover:text-[var(--color-primary)]" dir="ltr">
                {step.number}
              </span>
              <span className="font-semibold text-[var(--color-ink)]">{step.title}</span>
              <p className="text-sm text-[var(--color-ink-soft)]">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
