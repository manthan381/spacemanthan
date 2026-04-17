import BlogSection from "@/components/shared/BlogSection";
import { ContactCTA } from "@/components/shared/ContactCTA";
import Footer from "@/components/shared/Footer";
import { GalleryCTASection } from "@/components/shared/GalleryCTASection";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import HomeProjectShowcase from "@/components/shared/HomeProjectShowcase";
import { ImpactSection } from "@/components/shared/ImpactSection";
import ThreeColumnImages from "@/components/shared/ThreeColumnImages";
import TrustedBy from "@/components/shared/TrustedBy";
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
  const data = [
    {
      imageSrc: "/images/projects/cibt-office.jpg",
      title: `Architecture & Design`,
    },
    {
      imageSrc: "/images/projects/urban-comany-office.webp",
      title: "Office Design & Build",
    },
    {
      imageSrc: "/images/services/customizable-furniture-1.jpg",
      title: "modern & customize furniture",
    },
  ];


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
      <div className="mt-48 md:mt-5 pb-10">
        <TrustedBy />
      </div>
      <div className="bg-white py-20">
        <WhatWeDoSection />
      </div>

      <div className="bg-white py-20">
        <ThreeColumnImages heading="Our Core Services" columns={data} />
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

      <div className="pt-20 pb-10 border-t-2 border-gray-100">
        <BlogSection posts={latestPosts} />
      </div>
      <ContactCTA />
      <Footer />
    </main>
  );
}
