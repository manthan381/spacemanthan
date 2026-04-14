import { BlogGrid } from "@/components/shared/BlogGrid";
import { BlogHero } from "@/components/shared/BlogHero";
import { ContactCTA } from "@/components/shared/ContactCTA";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { getPublishedPosts } from "@/lib/blog/repository";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Industry insights on architecture, construction, and design from Spacemanthan.",
  keywords: "architecture, construction, design, interiors, blog",
  alternates: { canonical: "/blog" },
};

export default async function Blog() {
  const posts = await getPublishedPosts();

  return (
    <main>
      <Header />
      <section className="mx-auto max-w-7xl py-20">
        <BlogHero />
        <BlogGrid posts={posts} />
      </section>
      <ContactCTA />
      <Footer />
    </main>
  );
}
