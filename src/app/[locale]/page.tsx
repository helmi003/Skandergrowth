import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { PainPoints } from "@/components/sections/pain-points";
import { Story } from "@/components/sections/story";
import { Solution } from "@/components/sections/solution";
import { ServicesPreview } from "@/components/sections/services-preview";
import { Companies } from "@/components/sections/companies";
import { CaseStudiesPreview } from "@/components/sections/case-studies-preview";
import { Results } from "@/components/sections/results";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyMe } from "@/components/sections/why-me";
import { WhoIWorkWith } from "@/components/sections/who-i-work-with";
import { FinalCta } from "@/components/sections/final-cta";
import { ContactSection } from "@/components/sections/contact-section";
import { PersonJsonLd } from "@/components/seo/json-ld";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <PersonJsonLd />
      <Hero />
      <SocialProof />
      <Companies />
      <PainPoints />
      <Story />
      <Solution />
      <ServicesPreview />
      <CaseStudiesPreview />
      <Results />
      <Testimonials />
      <WhyMe />
      <WhoIWorkWith />
      <FinalCta />
      <ContactSection />
    </>
  );
}
