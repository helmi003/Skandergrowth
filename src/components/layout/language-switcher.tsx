"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const labels: Record<string, string> = {
  en: "EN",
  fr: "FR",
  ar: "AR",
};

// Full names for the roomier segmented variant (mobile menu).
const fullLabels: Record<string, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
};

export function LanguageSwitcher({
  className,
  variant = "compact",
}: {
  className?: string;
  variant?: "compact" | "segmented";
}) {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const segmented = variant === "segmented";

  return (
    <div
      className={cn(
        "flex items-center gap-1",
        segmented && "w-full rounded-full border border-border bg-paper-soft p-1",
        className
      )}
      role="group"
      aria-label={t("label")}
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          lang={loc}
          onClick={() =>
            router.replace(
              // @ts-expect-error -- dynamic pathname param passthrough
              { pathname, params },
              { locale: loc }
            )
          }
          aria-current={loc === locale ? "true" : undefined}
          className={cn(
            "rounded-full font-semibold transition-colors",
            segmented ? "flex-1 py-2 text-sm" : "px-2.5 py-1 text-xs",
            loc === locale
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-ink-soft hover:bg-paper-soft hover:text-ink",
            segmented && loc !== locale && "hover:bg-paper"
          )}
        >
          {segmented ? fullLabels[loc] : labels[loc]}
        </button>
      ))}
    </div>
  );
}
