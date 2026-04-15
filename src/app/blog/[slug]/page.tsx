// app/blog/[slug]/page.tsx
import ConsultationForm from "@/components/shared/ConsultationForm";
import { ContactCTA } from "@/components/shared/ContactCTA";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { getPostBySlug } from "@/lib/blog/repository";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
type BlogPageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const title = post.seo_title?.trim() || post.title;
  const description =
    post.seo_description?.trim() ||
    post.excerpt ||
    `Read ${post.title} on Space Manthan blog.`;
  const keywords = post.seo_keywords
    ? post.seo_keywords
        .split(",")
        .map((keyword) => keyword.trim())
        .filter(Boolean)
    : [
        "architecture blog",
        "interior design",
        "construction",
        "space manthan",
      ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: Readonly<BlogPageProps>) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  const publishedDate = post.published_at
    ? new Date(post.published_at).toLocaleDateString("en-IN", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <main>
      <Header />
      <section className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-slate-900 mb-2 text-center">
                {post.title}
              </h1>
              <p className="text-sm text-slate-500 text-center">
                {post.author ? (
                  <>
                    By <strong className="text-[#012169]">{post.author}</strong>
                  </>
                ) : null}
                {publishedDate ? ` • ${publishedDate}` : ""}
              </p>
            </header>

            <div className="relative w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden mb-10">
              <Image
                src={post.cover_image || "/images/blogs/blog-1.webp"}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <article
              className="blog-content max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:sticky top-24 h-fit rounded-xl border border-slate-200 p-6 shadow-sm bg-white">
            <h2 className="text-xl font-bold mb-4 text-slate-900">
              Book Free Consultation
            </h2>
            <ConsultationForm />
          </aside>
        </div>
      </section>
      <ContactCTA />
      <Footer />
    </main>
  );
}
