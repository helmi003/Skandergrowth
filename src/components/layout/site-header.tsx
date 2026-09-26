"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import {
  BarChart3,
  Briefcase,
  ChevronRight,
  FileText,
  Mail,
  MessageSquareQuote,
  User,
  X,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { cn } from "@/lib/utils";
import { siteConfig, whatsappLink } from "@/lib/site-config";

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

const icons: Record<SectionId, LucideIcon> = {
  about: User,
  services: Briefcase,
  "case-studies": FileText,
  results: BarChart3,
  testimonials: MessageSquareQuote,
  contact: Mail,
};

const delay = (ms: number) => ({ transitionDelay: `${ms}ms` }) as React.CSSProperties;

export function SiteHeader() {
  const t = useTranslations("Nav");
  const tHero = useTranslations("Hero");
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // On the home page SmoothAnchors turns these into a smooth scroll without
  // touching the URL; from anywhere else they return to the home page.
  const href = (id: string) => (isHome ? `#${id}` : `/#${id}`);
  const close = () => setOpen(false);

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

  // While the drawer is open: Escape closes it and the page behind stops scrolling.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close the drawer if the viewport grows to the desktop nav.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 80rem)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-paper/85 backdrop-blur-md transition-shadow duration-300",
          scrolled ? "border-border shadow-sm" : "border-transparent"
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-4">
          <a
            href={isHome ? "#home" : "/"}
            className="group flex min-w-0 items-center gap-2.5 text-base font-bold tracking-tight"
            onClick={close}
          >
            <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/20 transition-transform duration-300 group-hover:scale-110 group-hover:ring-primary/50">
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
                  "relative text-sm font-medium text-ink-soft transition-colors after:absolute after:-bottom-1.5 after:inset-s-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-primary after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100 rtl:after:origin-right",
                  active === id && "text-ink after:scale-x-100"
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
            {/* Hamburger that morphs into an X */}
            <button
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-paper-soft text-ink transition-colors hover:bg-primary-soft hover:text-primary"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t("closeMenu") : t("openMenu")}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">{t("menu")}</span>
              <span
                className={cn(
                  "absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300",
                  open ? "rotate-45" : "-translate-y-1.5"
                )}
              />
              <span
                className={cn(
                  "absolute h-0.5 w-5 rounded-full bg-current transition-opacity duration-200",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300",
                  open ? "-rotate-45" : "translate-y-1.5"
                )}
              />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile / tablet drawer — kept outside <header> because its backdrop-blur
          would otherwise become the containing block for these fixed elements. */}
      <div
        className={cn(
          "fixed inset-0 z-60 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 xl:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={close}
        aria-hidden="true"
      />
      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label={t("menu")}
        inert={!open}
        className={cn(
          "fixed inset-y-0 inset-e-0 z-70 flex w-[min(88vw,380px)] flex-col bg-paper shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] xl:hidden",
          open ? "translate-x-0" : "translate-x-full rtl:-translate-x-full"
        )}
      >
        {/* Top: identity + close */}
        <div className="relative overflow-hidden bg-linear-to-br from-primary to-[#0d3f94] px-5 pb-6 pt-5 text-white">
          <div className="pointer-events-none absolute -inset-e-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="relative flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl ring-2 ring-white/40">
                <Image src={siteConfig.avatar} alt="" fill sizes="56px" className="object-cover" />
              </span>
              <div className="min-w-0">
                <div className="truncate text-base font-bold">Skander Ben Jannette</div>
                <div className="mt-0.5 text-xs text-white/75">{t("menuTagline")}</div>
                <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-white/90">
                  <span className="relative flex h-2 w-2">
                    <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-[#25d366]" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25d366]" />
                  </span>
                  {tHero("available")}
                </div>
              </div>
            </div>
            <button
              onClick={close}
              aria-label={t("closeMenu")}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 transition hover:rotate-90 hover:bg-white/25"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-1">
            {sections.map((id, i) => {
              const Icon = icons[id];
              const isActive = active === id;
              return (
                <li
                  key={id}
                  className={cn(
                    "transition-all duration-500 ease-out",
                    open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0 rtl:-translate-x-6"
                  )}
                  style={delay(open ? 120 + i * 50 : 0)}
                >
                  <a
                    href={href(id)}
                    onClick={close}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-[15px] font-semibold transition-colors",
                      isActive ? "bg-primary-soft text-primary" : "text-ink hover:bg-paper-soft"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors",
                        isActive
                          ? "bg-primary text-white"
                          : "bg-paper-soft text-ink-soft group-hover:bg-primary-soft group-hover:text-primary"
                      )}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="flex-1">{t(labelKeys[id])}</span>
                    <ChevronRight
                      className={cn(
                        "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5",
                        isActive ? "text-primary" : "text-ink-soft/50"
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom: language + actions */}
        <div
          className={cn(
            "flex flex-col gap-3 border-t border-border bg-paper px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4 transition-all duration-500",
            open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
          style={delay(open ? 450 : 0)}
        >
          <LanguageSwitcher variant="segmented" />
          <div className="grid grid-cols-2 gap-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className={buttonVariants({ variant: "outline", className: "w-full" })}
            >
              <WhatsappIcon className="h-4 w-4 text-[#25d366]" />
              {t("whatsapp")}
            </a>
            <a
              href={href("contact")}
              onClick={close}
              className={buttonVariants({ className: "cta-attention w-full" })}
            >
              {t("cta")}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
