import { getPostSlugs } from "@/lib/blog/repository";
import { projects } from "@/lib/projectData";
import { getSiteUrl } from "@/lib/site";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getSiteUrl();
  const blogSlugs = await getPostSlugs();

  const staticPages = [
    "",
    "/about-us",
    "/contact-us",
    "/projects",
    "/blog",
  ];

  const staticEntries = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const blogEntries = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectEntries = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries, ...projectEntries];
}
