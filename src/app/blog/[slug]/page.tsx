// app/blog/[slug]/page.tsx
import { ContactCTA } from "@/components/shared/ContactCTA";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { getPostBySlug, getPostSlugs } from "@/lib/blog/repository";
import { getSiteUrl } from "@/lib/site";
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
    return { title: "Blog Post" };
  }

  const title = post.seo_title || post.title;
  const description = post.seo_description || post.excerpt || "";
  const url = `${getSiteUrl()}/blog/${post.slug}`;
  const image = post.cover_image || "/images/blogs/blog-1.webp";

  return {
    title,
    description,
    keywords: post.seo_keywords || undefined,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      url,
      images: [image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogDetailPage({
  params,
}: Readonly<BlogPageProps>) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <main>
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                {post.title}
              </h1>
              <p className="text-sm text-gray-500 text-center">
                {post.author ? (
                  <>
                    By <strong>{post.author}</strong>
                  </>
                ) : null}
                {post.published_at ? ` • ${post.published_at}` : ""}
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
              className="prose dark:prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:sticky top-24 h-fit rounded-xl border p-6 shadow-sm bg-white dark:bg-muted">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Book Free Consultation
            </h2>
            <form className="space-y-4">
              <Input placeholder="Full Name" />
              <Input placeholder="Company Name" />
              <Input type="email" placeholder="Email" />
              <Input type="tel" placeholder="Phone Number" />
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Carpet Area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="below-1000">Below 1000 sq.ft</SelectItem>
                  <SelectItem value="1000-2500">1000 - 2500 sq.ft</SelectItem>
                  <SelectItem value="above-2500">Above 2500 sq.ft</SelectItem>
                </SelectContent>
              </Select>
              <Button type="submit" className="w-full">
                Book Now
              </Button>
            </form>
          </aside>
        </div>
      </section>
      <ContactCTA />
      <Footer />
    </main>
  );
}
