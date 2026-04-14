export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  cover_image: string | null;
  author: string | null;
  published_at: string | null;
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;
};

export type BlogPostSummary = Pick<
  BlogPost,
  "id" | "title" | "slug" | "excerpt" | "cover_image" | "author" | "published_at"
>;
