"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

// Section ids on the home page that the nav scrolls to.
const sections = ["about", "services", "case-studies", "results", "testimonials", "contact"] as const;
type SectionId = (typeof sections)[number];

const labelKeys: Record<SectionId, string> = {
  about: "about",
  services: "services",
  "case-studies": "caseStudies",
  results: "results",
  testimonials: "testimonials",
  contact: "contact",
};

export function SiteHeader() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // On the home page SmoothAnchors turns these into a smooth scroll without
  // touching the URL; from anywhere else they return to the home page.
  const href = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently crossing the upper part of the viewport.
  useEffect(() => {
    if (!isHome) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [isHome]);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-[var(--color-paper)]/85 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "border-[var(--color-border)] shadow-sm" : "border-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href={isHome ? "#home" : "/"}
          className="group flex min-w-0 items-center gap-2.5 text-base font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-[var(--color-primary)]/20 transition-transform duration-300 group-hover:scale-110 group-hover:ring-[var(--color-primary)]/50">
            <Image
              src={siteConfig.avatar}
              alt="Skander Ben Jannette"
              fill
              sizes="36px"
              className="object-cover"
              priority
            />
          </span>
          <span className="truncate">Skander Ben Jannette</span>
        </a>

        <nav className="hidden items-center gap-6 xl:flex">
          {sections.map((id) => (
            <a
              key={id}
              href={href(id)}
              aria-current={active === id ? "true" : undefined}
              className={cn(
                "relative text-sm font-medium text-[var(--color-ink-soft)] transition-colors after:absolute after:-bottom-1.5 after:start-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[var(--color-primary)] after:transition-transform after:duration-300 hover:text-[var(--color-ink)] hover:after:scale-x-100 rtl:after:origin-right",
                active === id && "text-[var(--color-ink)] after:scale-x-100"
              )}
            >
              {t(labelKeys[id])}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <LanguageSwitcher />
          <a href={href("contact")} className={buttonVariants({ size: "sm" })}>
            {t("cta")}
          </a>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <LanguageSwitcher className="hidden sm:flex" />
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-ink)] transition-colors hover:bg-[var(--color-paper-soft)]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile / tablet menu */}
      <div
        className={cn(
          "grid overflow-hidden border-t bg-[var(--color-paper)] transition-[grid-template-rows,border-color] duration-300 ease-out xl:hidden",
          open ? "grid-rows-[1fr] border-[var(--color-border)]" : "grid-rows-[0fr] border-transparent"
        )}
      >
        <div className="min-h-0">
          <Container className="flex flex-col gap-1 py-4">
            {sections.map((id) => (
              <a
                key={id}
                href={href(id)}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className={cn(
                  "rounded-[var(--radius-sm)] px-3 py-3 text-base font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-paper-soft)]",
                  active === id && "bg-[var(--color-primary-soft)] text-[var(--color-primary)]"
                )}
              >
                {t(labelKeys[id])}
              </a>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-[var(--color-border)] px-1 pt-4">
              <LanguageSwitcher className="sm:hidden" />
              <a
                href={href("contact")}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className={buttonVariants({ size: "sm", className: "ms-auto" })}
              >
                {t("cta")}
              </a>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}
