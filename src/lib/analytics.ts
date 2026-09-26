// Central event names so instrumentation stays consistent across the site.
export const AnalyticsEvent = {
  CtaClick: "cta_click",
  WhatsappClick: "whatsapp_click",
  EmailClick: "email_click",
  PhoneClick: "phone_click",
  CaseStudyView: "case_study_view",
  ServiceView: "service_view",
  ArticleView: "blog_view",
  ContactFormSubmit: "contact_form_submit",
  LeadGenerated: "lead_generated",
} as const;

type AnalyticsEventName = (typeof AnalyticsEvent)[keyof typeof AnalyticsEvent];

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    ttq?: { track: (event: string, params?: Record<string, unknown>) => void };
  }
}

// No-ops until real tracking IDs are supplied via env vars (see .env.example)
// and the corresponding script is loaded in AnalyticsScripts.
export function trackEvent(name: AnalyticsEventName, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", name, params);
  window.fbq?.("trackCustom", name, params);
  window.ttq?.track(name, params);
}
