import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 ease-out active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-primary)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "shine bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-sm shadow-[var(--color-primary)]/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--color-primary)]/30",
        outline:
          "border border-[var(--color-border)] text-[var(--color-ink)] hover:-translate-y-0.5 hover:border-[var(--color-ink)]/30 hover:bg-[var(--color-paper-soft)]",
        ghost: "text-[var(--color-ink)] hover:bg-[var(--color-paper-soft)]",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-[13px]",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

// For a link that should look like a button, apply `buttonVariants(...)` to
// the Link/anchor's className directly instead of wrapping it here — cloning
// a Client Component element referenced from a Server Component is unreliable
// (the reference can still be an unresolved React.lazy() at render time).
function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export { Button };
