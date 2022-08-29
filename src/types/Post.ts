export interface Post {
  title: string;
  createdAt: string;
  updatedAt: string | null;
  slug: string;
  content: string;
  intro?: string;
  keywords: string | null;
  readingTime: number;
  draft?: boolean;
  images?: string[];
  canonicalUrl?: string;
  featured?: boolean;
  archived?: true;
  frontmatter: Record<string, any>;
}
