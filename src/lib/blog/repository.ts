import type { BlogPost } from "@/lib/blog/types";
import { blogPosts } from "@/lib/blogData";
import { createSupabaseServer } from "@/lib/supabase/server";
import { BLOG_SELECT_FIELDS } from "./queries";

function isSupabaseConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.SUPABASE_SERVICE_ROLE_KEY
  );
}

function stripHtml(input: string) {
  return input
    .replaceAll(/<[^>]*>/g, " ")
    .replaceAll(/\s+/g, " ")
    .trim();
}

function buildExcerpt(content: string | null, fallback: string) {
  if (content) {
    return stripHtml(content).slice(0, 160);
  }
  return fallback;
}

function mapFallbackPosts(): BlogPost[] {
  return blogPosts.map((post, index) => ({
    id: String(index + 1),
    title: post.title,
    slug: post.slug,
    excerpt: buildExcerpt(post.content, post.title),
    content: post.content,
    cover_image: post.image,
    author: post.author,
    published_at: post.date,
    seo_title: post.title,
    seo_description: buildExcerpt(post.content, post.title),
    seo_keywords: null,
  }));
}

export async function getPublishedPosts(limit = 12): Promise<BlogPost[]> {
  if (!isSupabaseConfigured()) {
    return mapFallbackPosts().slice(0, limit);
  }

  const supabase = createSupabaseServer();
  const { data, error } = await supabase
    .from("posts")
    .select(BLOG_SELECT_FIELDS)
    .eq("is_published", true)
    .order("published_at", { ascending: false })
    .limit(limit);

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}

export async function getLatestPosts(limit = 3): Promise<BlogPost[]> {
  return getPublishedPosts(limit);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!isSupabaseConfigured()) {
    return mapFallbackPosts().find((post) => post.slug === slug) ?? null;
  }

  const supabase = createSupabaseServer();
  const { data, error } = await supabase
    .from("posts")
    .select(BLOG_SELECT_FIELDS)
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data ?? null;
}

export async function getPostSlugs(): Promise<string[]> {
  if (!isSupabaseConfigured()) {
    return mapFallbackPosts().map((post) => post.slug);
  }

  const supabase = createSupabaseServer();
  const { data, error } = await supabase
    .from("posts")
    .select("slug")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((row) => row.slug);
}
