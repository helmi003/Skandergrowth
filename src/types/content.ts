import type { Locale } from "@/i18n/routing";

export type LocalizedText = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export interface Service {
  slug: string;
  icon: string;
  name: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  problem: LocalizedText;
  platforms: string[];
  deliverables: LocalizedList;
  relatedCaseStudy?: string;
}

export interface CaseStudyMetric {
  label: LocalizedText;
  value: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: LocalizedText;
  market: LocalizedText;
  objective: LocalizedText;
  challenge?: LocalizedText;
  strategy: LocalizedText;
  platforms: string[];
  approach: LocalizedList;
  result: LocalizedText;
  metrics: CaseStudyMetric[];
  evidenceImages: { src: string; alt: LocalizedText }[];
  logo?: string;
}

export interface Testimonial {
  id: string;
  clientLabel: LocalizedText;
  quote: LocalizedText;
  source: string;
  rating: number;
  screenshot: string;
}

export interface Company {
  name: string;
  logo?: string;
  industry: LocalizedText;
}

export interface Stat {
  value: string;
  label: LocalizedText;
}

export type ResultPlatform = "Meta" | "Google" | "TikTok" | "Snapchat" | "Organic" | "Tracking";

export interface ResultShot {
  src: string;
  width: number;
  height: number;
  platform: ResultPlatform;
  metric: LocalizedText;
  title: LocalizedText;
}
