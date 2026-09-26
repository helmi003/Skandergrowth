import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CaseStudyCard } from "@/components/case-studies/case-study-card";
import { caseStudies } from "@/content/case-studies";

export function CaseStudiesPreview() {
  const t = useTranslations("CaseStudies");

  return (
    <section id="case-studies" className="py-16 sm:py-24">
      <Container>
        <div data-reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {caseStudies.map((caseStudy, i) => (
            <div
              key={caseStudy.slug}
              className="h-full"
              data-reveal
              style={{ "--reveal-delay": `${(i % 2) * 100}ms` } as React.CSSProperties}
            >
              <CaseStudyCard caseStudy={caseStudy} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
