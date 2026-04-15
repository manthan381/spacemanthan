import type { BlogPost } from "@/lib/blog/types";
import { blogPosts } from "@/lib/blogData";
import { getSupabaseServerClient, hasSupabaseConfig } from "@/lib/supabase/server";
import { BLOG_SELECT_FIELDS } from "./queries";

const DEFAULT_FALLBACK_ON_ERROR = true;

function shouldFallbackOnError() {
  const value = process.env.SUPABASE_FALLBACK_ON_ERROR;
  if (value === undefined) {
    return DEFAULT_FALLBACK_ON_ERROR;
  }

  return value.toLowerCase() !== "false";
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
  if (!hasSupabaseConfig()) {
    return mapFallbackPosts().slice(0, limit);
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return mapFallbackPosts().slice(0, limit);
  }
  const { data, error } = await supabase
    .from("posts")
    .select(BLOG_SELECT_FIELDS)
    .eq("is_published", true)
    .order("published_at", { ascending: false })
    .limit(limit);

  if (error) {
    const message = `Supabase error: ${error.message}`;
    if (!shouldFallbackOnError()) {
      throw new Error(message);
    }
    console.warn("Supabase error (falling back to local data):", error.message);
    return mapFallbackPosts().slice(0, limit);
  }

  return data ?? [];
}

export async function getLatestPosts(limit = 3): Promise<BlogPost[]> {
  return getPublishedPosts(limit);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!hasSupabaseConfig()) {
    return mapFallbackPosts().find((post) => post.slug === slug) ?? null;
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return mapFallbackPosts().find((post) => post.slug === slug) ?? null;
  }
  const { data, error } = await supabase
    .from("posts")
    .select(BLOG_SELECT_FIELDS)
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  if (error) {
    const message = `Supabase error: ${error.message}`;
    if (!shouldFallbackOnError()) {
      throw new Error(message);
    }
    console.warn("Supabase error (falling back to local data):", error.message);
    return mapFallbackPosts().find((post) => post.slug === slug) ?? null;
  }

  return data ?? null;
}

export async function getPostSlugs(): Promise<string[]> {
  if (!hasSupabaseConfig()) {
    return mapFallbackPosts().map((post) => post.slug);
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return mapFallbackPosts().map((post) => post.slug);
  }
  const { data, error } = await supabase
    .from("posts")
    .select("slug")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  if (error) {
    const message = `Supabase error: ${error.message}`;
    if (!shouldFallbackOnError()) {
      throw new Error(message);
    }
    console.warn("Supabase error (falling back to local data):", error.message);
    return mapFallbackPosts().map((post) => post.slug);
  }

  return (data ?? []).map((row) => row.slug);
}
