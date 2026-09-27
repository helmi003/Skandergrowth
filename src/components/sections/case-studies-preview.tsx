import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CaseStudyCard } from "@/components/case-studies/case-study-card";
import { Carousel } from "@/components/ui/carousel";
import { caseStudies } from "@/content/case-studies";

export function CaseStudiesPreview() {
  const t = useTranslations("CaseStudies");
  const tResults = useTranslations("Results");

  return (
    <section id="case-studies" className="overflow-hidden bg-paper-soft py-16 sm:py-24">
      <Container>
        <div data-reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        </div>

        <div data-reveal className="mt-10">
          <Carousel
            slideClassName="w-[88%] md:w-[calc((100%-1.25rem)/2)]"
            labels={{ prev: tResults("prev"), next: tResults("next") }}
          >
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
}
