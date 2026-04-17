"use client";

import type { BlogPostSummary } from "@/lib/blog/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const defaultBlogs = [
  {
    title: "Top 10 Sustainable Architecture Trends in 2025",
    excerpt:
      "Explore how open-plan concepts and minimalist architecture shape the way we live.",
    cover_image: "/images/blogs/blog-1.webp",
    author: "Space Manthan Team",
    published_at: "2025-06-15T00:00:00.000Z",
    slug: "sustainable-architecture-trends-2025",
  },
  {
    title: "How Smart Homes are Changing Urban Living",
    excerpt:
      "Discover emerging trends in office and retail space design that blend function and beauty.",
    cover_image: "/images/blogs/blog-2.jpg",
    author: "Space Manthan Team",
    published_at: "2025-06-10T00:00:00.000Z",
    slug: "smart-homes-are-changing-urban-living",
  },
  {
    title: "Designing for Wellness: The New Trend in Office Spaces",
    excerpt:
      "Learn about eco-friendly building materials that reduce impact while maximizing durability.",
    cover_image: "/images/blogs/blog-3.jpg",
    author: "Space Manthan Team",
    published_at: "2025-06-05T00:00:00.000Z",
    slug: "new-trend-in-office-spaces",
  },
];

type BlogSectionProps = {
  posts?: BlogPostSummary[];
};

function formatDate(date: string | null) {
  if (!date) {
    return "";
  }

  return new Date(date).toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogSection({
  posts = [],
}: Readonly<BlogSectionProps>) {
  const blogs = posts.length > 0 ? posts : defaultBlogs;

  return (
    <section>
      <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-24 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl text-black mb-10 font-bold"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          viewport={{ once: true }}
        >
          Top Industry <span>Insights</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-slate-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
          viewport={{ once: true }}
        >
          Stay updated with the latest trends, techniques, and perspectives
          shaping the world of architecture and construction.
        </motion.p>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.slug}
              className="bg-white border text-left rounded-none shadow hover:shadow-lg overflow-hidden transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={blog.cover_image || "/images/blogs/blog-1.webp"}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {blog.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {blog.excerpt || ""}
                </p>
                <p className="text-xs text-slate-500 mb-3">
                  {blog.author || ""}
                  {blog.published_at
                    ? ` • ${formatDate(blog.published_at)}`
                    : ""}
                </p>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-black hover:underline text-sm font-medium"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
