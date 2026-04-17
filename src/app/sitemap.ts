import { blogPosts as fallbackBlogPosts } from "@/lib/blogData";
import { projects } from "@/lib/projectData";
import { getSiteUrl } from "@/lib/site";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { MetadataRoute } from "next";

type SupabaseBlogSitemapRow = {
  slug: string;
  updated_at: string | null;
  published_at: string | null;
};

const STATIC_ROUTES: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "", priority: 1, changeFrequency: "daily" },
  { path: "/projects", priority: 0.9, changeFrequency: "weekly" },
  { path: "/contact-us", priority: 0.85, changeFrequency: "monthly" },
  { path: "/about-us", priority: 0.8, changeFrequency: "monthly" },
  { path: "/expertise", priority: 0.8, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.9, changeFrequency: "daily" },
];

const PROJECT_CATEGORIES = [
  "Office & Residence",
] as const;

export const revalidate = 3600;

function toAbsoluteUrl(siteUrl: string, path: string) {
  return `${siteUrl}${path}`;
}

async function getPublishedBlogEntries(
  siteUrl: string
): Promise<MetadataRoute.Sitemap> {
  const client = getSupabaseServerClient();

  if (!client) {
    return fallbackBlogPosts.map((post) => ({
      url: toAbsoluteUrl(siteUrl, `/blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  }

  const { data, error } = await client
    .from("posts")
    .select("slug,updated_at,published_at")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  if (error || !data) {
    return fallbackBlogPosts.map((post) => ({
      url: toAbsoluteUrl(siteUrl, `/blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  }

  return (data as SupabaseBlogSitemapRow[]).map((post) => ({
    url: toAbsoluteUrl(siteUrl, `/blog/${post.slug}`),
    lastModified: new Date(post.updated_at || post.published_at || Date.now()),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
}

function getProjectEntries(siteUrl: string): MetadataRoute.Sitemap {
  const now = new Date();
  return projects.map((project) => ({
    url: toAbsoluteUrl(siteUrl, `/projects/${project.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
}

function getProjectCategoryEntries(siteUrl: string): MetadataRoute.Sitemap {
  const now = new Date();
  return PROJECT_CATEGORIES.map((category) => ({
    url: toAbsoluteUrl(siteUrl, `/projects?category=${encodeURIComponent(category)}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));
}

function getStaticEntries(siteUrl: string): MetadataRoute.Sitemap {
  const now = new Date();
  return STATIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: toAbsoluteUrl(siteUrl, path),
    lastModified: now,
    changeFrequency,
    priority,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const blogEntries = await getPublishedBlogEntries(siteUrl);

  return [
    ...getStaticEntries(siteUrl),
    ...getProjectCategoryEntries(siteUrl),
    ...getProjectEntries(siteUrl),
    ...blogEntries,
  ];
}
