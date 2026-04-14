import { getSiteUrl } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl();

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/admin", "/admin/(.*)"] },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
