import { useTranslations } from "next-intl";
import {
  BarChart3,
  Check,
  Compass,
  Megaphone,
  Palette,
  Radar,
  Target,
  X,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { ScrollProgressLine } from "@/components/motion/scroll-progress-line";

interface ChainStep {
  title: string;
  description: string;
}

// One icon per step of the `WhyMe.chain` message array, in order.
const stepIcons: LucideIcon[] = [Target, Compass, Palette, Megaphone, Radar, BarChart3];

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

export function WhyMe() {
  const t = useTranslations("WhyMe");
  const chain = t.raw("chain") as ChainStep[];
  const typical = t.raw("typical") as string[];
  const me = t.raw("me") as string[];

  return (
    <section className="relative overflow-clip py-16 sm:py-28">
      <div className="pointer-events-none absolute start-1/2 top-24 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[var(--color-primary)]/[0.07] blur-3xl rtl:translate-x-1/2" />

      <Container className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Sticky intro column */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div data-reveal="start">
            <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("description")} />
          </div>

          <div
            data-reveal
            style={delay(150)}
            className="mt-8 rounded-[var(--radius-lg)] bg-[var(--color-ink)] p-6 text-white shadow-xl shadow-[var(--color-ink)]/10"
          >
            <p className="text-lg font-semibold leading-relaxed">{t("closing")}</p>
            <Badge className="mt-4 bg-white/10 text-[var(--color-accent)]">{t("dataDriven")}</Badge>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3
            data-reveal
            className="mb-8 text-sm font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]"
          >
            {t("chainTitle")}
          </h3>

          <ol className="relative flex flex-col gap-5">
            <ScrollProgressLine className="absolute bottom-6 start-6 top-6 w-0.5 -translate-x-1/2 rtl:translate-x-1/2" />

            {chain.map((step, i) => {
              const Icon = stepIcons[i] ?? Target;
              return (
                <li
                  key={step.title}
                  data-reveal
                  style={delay(i * 80)}
                  className="group relative flex gap-5"
                >
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] text-[var(--color-primary)] shadow-sm transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[var(--color-primary)]/30">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="flex-1 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-paper)] p-5 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[var(--color-primary)]/30 group-hover:shadow-lg group-hover:shadow-[var(--color-ink)]/5">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-bold tabular-nums text-[var(--color-accent)]" dir="ltr">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-bold text-[var(--color-ink)]">{step.title}</span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>

      {/* Comparison */}
      <Container className="relative mt-16 grid gap-5 sm:mt-20 md:grid-cols-2">
        <div
          data-reveal
          className="rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border)] bg-[var(--color-paper-soft)] p-6 sm:p-8"
        >
          <h3 className="mb-5 text-lg font-bold text-[var(--color-ink-soft)]">{t("typicalTitle")}</h3>
          <ul className="flex flex-col gap-3.5">
            {typical.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] text-[var(--color-ink-soft)]">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-ink)]/5">
                  <X className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          data-reveal
          style={delay(120)}
          className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-primary)]/30 bg-[var(--color-paper)] p-6 shadow-xl shadow-[var(--color-primary)]/10 transition-transform duration-500 hover:-translate-y-1 sm:p-8"
        >
          <div className="pointer-events-none absolute -end-16 -top-16 h-40 w-40 rounded-full bg-[var(--color-primary)]/10 blur-2xl" />
          <h3 className="relative mb-5 text-lg font-bold text-[var(--color-primary)]">{t("meTitle")}</h3>
          <ul className="relative flex flex-col gap-3.5">
            {me.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] font-medium text-[var(--color-ink)]">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                  <Check className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
