import type { BlogPostSummary } from "@/lib/blog/types";
import Image from "next/image";
import Link from "next/link";

type BlogGridProps = {
  posts: BlogPostSummary[];
};

function formatDate(date: string | null) {
  if (!date) {
    return "";
  }

  return new Date(date).toLocaleDateString("en-IN", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogGrid({ posts }: Readonly<BlogGridProps>) {
  return (
    <section className="px-4 md:px-12 py-16">
      <div className="grid md:grid-cols-3 gap-10">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <Image
              src={post.cover_image || "/images/blogs/blog-1.webp"}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">
                  {post.title}
                </h3>
              </Link>
              <p className="text-slate-600 text-sm mb-4">
                {post.excerpt || ""}
              </p>
              <div className="text-xs text-slate-500">
                {post.author || ""}
                {post.published_at
                  ? ` • ${formatDate(post.published_at)}`
                  : ""}
              </div>
              <div className="py-1">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#012169] hover:underline text-sm font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
