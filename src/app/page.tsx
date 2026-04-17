import BlogSection from "@/components/shared/BlogSection";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import Footer from "@/components/shared/Footer";
import { GalleryCTASection } from "@/components/shared/GalleryCTASection";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import HomeProjectShowcase from "@/components/shared/HomeProjectShowcase";
import { ImpactSection } from "@/components/shared/ImpactSection";

import TrustedBy from "@/components/shared/TrustedBy";
import TransformationStories from "@/components/shared/TransformationStories";
import WhatWeDoSection from "@/components/shared/WhatWeDoSection";
import { getLatestPosts } from "@/lib/blog/repository";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Space Manthan | Architecture, Interiors & Construction",
  description:
    "Space Manthan delivers architecture, interiors, construction, and custom furniture under one roof with precision and craftsmanship.",
  keywords:
    "architecture, interior design, construction, custom furniture, Gurgaon, Space Manthan",
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
        imageSrc="/images/projects/feb-hotel/10.webp"
        imageAlt="Modern Collaborative Office Design"
      />
      <div className="py-12">
        <TrustedBy />
      </div>
      
      <TransformationStories />
      
      <div className="bg-white py-12">
        <WhatWeDoSection />
      </div>


      <GalleryCTASection
        titlePrefix="Reimagine your"
        titleHighlight="workplace experience"
        subheading="Transform your office into a modern, dynamic environment that inspires creativity and supports the evolving needs of your team."
        linkText="Our Expertise"
        href="/expertise"
        imageSrc="/images/projects/red-velvet-office.jpg"
        imageAlt="High-end Showroom Design"
        reverse
      />

      <HomeProjectShowcase />

      <div className="py-12 border-t-2 border-gray-100">
        <BlogSection posts={latestPosts} />
      </div>
      <FAQSection />
      <ContactCTA />
      <Footer />
    </main>
  );
}
