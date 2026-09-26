import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

interface Step {
  number: string;
  title: string;
  description: string;
}

// One hue per step: audit → strategy → launch → optimize → scale.
const stepColors = ["#1459c9", "#0e8f86", "#7a4fd6", "#e0663a", "#c98a2c"];

export function Solution() {
  const t = useTranslations("Solution");
  const steps = t.raw("steps") as Step[];

  return (
    <section className="bg-paper-soft py-16 sm:py-24">
      <Container>
        <div data-reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} align="center" className="mx-auto" />
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li
              key={step.number}
              data-reveal
              style={
                {
                  "--reveal-delay": `${i * 90}ms`,
                  "--step": stepColors[i % stepColors.length],
                } as React.CSSProperties
              }
              className="group relative flex flex-col gap-3 overflow-hidden rounded-lg border border-(--step)/20 bg-linear-to-b from-(--step)/10 to-paper to-60% p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-(--step)/45 hover:shadow-xl hover:shadow-(--step)/15"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-(--step)" />
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--step)/15 text-lg font-bold text-(--step) transition-all duration-500 group-hover:scale-110 group-hover:bg-(--step) group-hover:text-white"
                dir="ltr"
              >
                {step.number}
              </span>
              <span className="font-semibold text-ink">{step.title}</span>
              <p className="text-sm text-ink-soft">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
