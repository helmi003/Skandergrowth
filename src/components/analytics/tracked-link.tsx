"use client";

import { AnalyticsEvent, trackEvent } from "@/lib/analytics";

type TrackedEvent = (typeof AnalyticsEvent)[keyof typeof AnalyticsEvent];

export function TrackedLink({
  event,
  className,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { event: TrackedEvent }) {
  return (
    <a className={className} onClick={() => trackEvent(event)} {...props}>
      {children}
    </a>
  );
}
