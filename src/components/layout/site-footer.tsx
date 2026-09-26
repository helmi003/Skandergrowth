import { useTranslations } from "next-intl";
import { ExternalLink, Mail } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { Container } from "@/components/ui/container";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { AnalyticsEvent } from "@/lib/analytics";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export function SiteFooter() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Nav");
  const year = new Date().getFullYear();

  const links = [
    { href: "#about", label: tNav("about") },
    { href: "#services", label: tNav("services") },
    { href: "#case-studies", label: tNav("caseStudies") },
    { href: "#results", label: tNav("results") },
    { href: "#testimonials", label: tNav("testimonials") },
    { href: "#contact", label: tNav("contact") },
  ] as const;

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-paper)]">
      <Container className="grid gap-10 py-14 sm:grid-cols-3">
        <div className="flex flex-col gap-3">
          <span className="text-base font-bold">Skander Ben Jannette</span>
          <p className="max-w-xs text-sm text-[var(--color-ink-soft)]">
            {t("tagline")}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-[var(--color-ink)]">
            {t("navTitle")}
          </span>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-[var(--color-ink)]">
            {t("connectTitle")}
          </span>
          <TrackedLink
            event={AnalyticsEvent.WhatsappClick}
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
          >
            <WhatsappIcon className="h-4 w-4 text-[#25d366]" />
            <span dir="ltr">{siteConfig.whatsappDisplay}</span>
          </TrackedLink>
          <TrackedLink
            event={AnalyticsEvent.EmailClick}
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
          >
            <Mail className="h-4 w-4" />
            {siteConfig.email}
          </TrackedLink>
          <a
            href={siteConfig.mostaql.reviews}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
          >
            <ExternalLink className="h-4 w-4" />
            {t("mostaql")}
          </a>
        </div>
      </Container>

      <div className="border-t border-[var(--color-border)]">
        <Container className="py-5 text-center text-xs text-[var(--color-ink-soft)]">
          © {year} Skander Ben Jannette. {t("rights")}
        </Container>
      </div>
    </footer>
  );
}
