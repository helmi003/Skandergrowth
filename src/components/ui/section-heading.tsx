import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "start",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="balance max-w-2xl text-[1.625rem] font-bold leading-snug tracking-tight text-[var(--color-ink)] sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-[15px] leading-relaxed text-[var(--color-ink-soft)] sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
