import type { LocalizedText } from "@/types/content";

export interface Article {
  slug: string;
  category: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  date: string;
  readingMinutes: number;
}

// No articles have been provided yet. Add entries here once real,
// non-fabricated content is available — the Insights pages already
// render an empty state until then.
export const articles: Article[] = [];
