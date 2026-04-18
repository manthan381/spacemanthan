import BlogSection from "@/components/shared/BlogSection";
import { FAQSection } from "@/components/shared/FAQSection";
import Footer from "@/components/shared/Footer";
import { GalleryCTASection } from "@/components/shared/GalleryCTASection";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import HomeProjectShowcase from "@/components/shared/HomeProjectShowcase";
import { ImpactSection } from "@/components/shared/ImpactSection";

import LeadershipGrid from "@/components/shared/LeadershipGrid";
import TransformationStories from "@/components/shared/TransformationStories";
import TrustedBy from "@/components/shared/TrustedBy";
import WhatWeDoSection from "@/components/shared/WhatWeDoSection";
import { getLatestPosts } from "@/lib/blog/repository";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "No.1 Luxury office interior design company in gurugram | space manthan",
  description:
    "Looking for office interior design? Get smart customized, innovative workspace solutions that boost productivity and reflect your company's identity.",
  keywords:
    "office interior design, office design, small office interior design",
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const latestPosts = await getLatestPosts();



  return (
    <main>
      <Header />
      <Hero />
      <ImpactSection />
      <GalleryCTASection
        titlePrefix="Creating +ve business"
        titleHighlight="impact through design thinking"
        subheading="We blend aesthetics with functionality to create spaces that foster collaboration, enhance productivity, and reflect your core brand values."
        linkText="Connect with my project"
        href="/projects"
        imageSrc="/images/home/1.3.webp"
        imageAlt="Modern Collaborative Office Design"
      />
      <div className="py-12">
        <TrustedBy />
      </div>

      <TransformationStories />
      <LeadershipGrid />

      <div className="bg-white py-12">
        <WhatWeDoSection />
      </div>


      <GalleryCTASection
        titlePrefix="Reimagine your"
        titleHighlight="workplace experience"
        subheading="Transform your office into a modern, dynamic environment that inspires creativity and supports the evolving needs of your team."
        linkText="Our Expertise"
        href="/expertise"
        imageSrc="/images/home/1.2.webp"
        imageAlt="High-end Showroom Design"
        reverse
      />

      <HomeProjectShowcase />

      <div className="pt-12 pb-4 border-t-2 border-gray-100">
        <BlogSection posts={latestPosts} />
      </div>
      <FAQSection />
      <Footer />
    </main>
  );
}
