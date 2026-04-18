import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { StatsSection } from "@/components/shared/StatsSection";
import { TeamSection } from "@/components/shared/TeamSection";
import type { Metadata } from "next";
import Image from "next/image";
import AboutSection from "../../components/shared/AboutSection";
import { AboutServicesSection } from "../../components/shared/AboutServicesSection";
import { MissionVisionSection } from "../../components/shared/MissionVisionSection";

export const metadata: Metadata = {
  title: "About Space Manthan | Our Story, Team & Process",
  description:
    "Learn about Space Manthan, our team, process, and the values behind our architecture and interior design work.",
  keywords:
    "about space manthan, architecture firm, interior design team, design process",
  alternates: {
    canonical: "/about-us",
  },
};

export default function Home() {
  return (
    <main>
      <Header />
      <AboutSection />
      <StatsSection />
      <MissionVisionSection />
      <AboutServicesSection />
      <TeamSection />
      <div className="bg-gray-50 py-20 mx-auto">
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-4xl text-gray-900 mb-6">
              Our <span className="font-bold">6 Step Process</span>
            </h1>
            <p className="text-lg text-gray-900 leading-relaxed pb-5">
              Track the progress of our development journey with this refined
              timeline component. Each milestone represents a crucial step in
              bringing our vision to life.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center max-w-5xl mx-auto">
          <Image
            src="/images/process-steps.png"
            alt="Our 6 Steps Process"
            width={1500}
            height={800}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
