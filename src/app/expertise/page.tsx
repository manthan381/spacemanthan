import { ContactCTA } from "@/components/shared/ContactCTA";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const serviceCards = [
  {
    title: "01. build",
    description:
      "we provide end-to-end construction solutions across office, commercial, and large-scale developments. from concept to completion, every stage is coordinated to ensure quality, timeline control, and execution precision.",
    options: [
      "end-to-end construction",
      "project management",
      "quality compliance",
      "on-site execution",
    ],
    images: [
      "/images/projects/urban-company-office-11.jpg",
      "/images/projects/cibt-office.jpg",
      "/images/projects/electrolux/1.webp",
    ],
    href: "/projects?category=Office%20%26%20Residence",
    cta: "view office build projects",
  },
  {
    title: "02. furniture",
    description:
      "our furniture division focuses on custom, production-ready pieces aligned to your workspace requirements. from material selection to fabrication details, every solution is designed for utility, comfort, and visual consistency.",
    options: [
      "in-house manufacturing",
      "custom fabrication",
      "material curation",
      "installation support",
    ],
    images: [
      "/images/services/customizable-furniture-1.jpg",
      "/images/services/customizable-furniture-2.jpg",
      "/images/services/customizable-furniture.jpg",
    ],
    href: "/services/furniture",
    cta: "open furniture page",
  },
] as const;

export default function Home() {
  return (
    <main>
      <Header />

      <section className="relative isolate overflow-hidden bg-gray-100 pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true">
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,#eb5e22_0%,transparent_50%),radial-gradient(circle_at_80%_0%,#4e6b5f_0%,transparent_50%)]" />
        </div>

        <div className="relative mx-auto max-w-[1600px] w-full px-6 sm:px-10 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight lowercase text-[#1c2a22]">
              expertise
            </h1>
            <div className="h-1.5 w-20 bg-[#eb5e22] mt-4 rounded-none" />
            <p className="mt-6 md:mt-10 text-gray-600 text-base md:text-lg leading-relaxed lowercase font-medium">
              at space manthan, our execution model focuses on two core offerings only: build and furniture. this keeps delivery streamlined, quality controlled, and fully aligned with your workspace goals.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects?category=Office%20%26%20Residence"
                className="inline-flex items-center gap-2 rounded-none bg-[#1c2a22] px-5 py-2.5 text-white hover:bg-[#eb5e22] transition-colors duration-300 text-sm font-medium lowercase"
              >
                build
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/furniture"
                className="inline-flex items-center gap-2 rounded-none border border-[#1c2a22] px-5 py-2.5 text-[#1c2a22] hover:bg-[#1c2a22] hover:text-white transition-colors duration-300 text-sm font-medium lowercase"
              >
                furniture
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] overflow-hidden shadow-2xl lg:scale-105 transition-transform duration-700 mt-10 lg:mt-0">
            <Image
              src="/images/projects/urban-company-office-11.jpg"
              alt="Space Manthan Expertise Overview"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-24 space-y-10 md:space-y-12">
          {serviceCards.map((service) => (
            <article
              key={service.title}
              className="flex flex-col gap-8 md:gap-10 border-b border-gray-100 pb-10 md:pb-12 last:border-b-0 last:pb-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-40 xl:gap-64">
                <div className="flex flex-col">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1c2a22] lowercase tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-4 md:mt-6 text-gray-700 leading-relaxed text-base lg:text-lg lowercase whitespace-pre-wrap max-w-2xl">
                    {service.description}
                  </p>

                  <div className="mt-8 lg:mt-12">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-3 rounded-none bg-[#1c2a22] px-7 py-3 text-white hover:bg-[#eb5e22] transition-colors duration-300 lowercase text-sm font-medium"
                    >
                      {service.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col justify-start">
                  <div className="space-y-6">
                    <p className="text-sm tracking-[0.25em] uppercase text-[#eb5e22] font-semibold mb-4">
                      capabilities
                    </p>
                    <ul className="space-y-4 w-full">
                      {service.options.map((option) => (
                        <li
                          key={option}
                          className="flex items-center justify-between text-base sm:text-lg md:text-xl font-light text-gray-800 lowercase border-b border-gray-200 pb-4 hover:text-[#eb5e22] transition-colors cursor-default"
                        >
                          {option}
                          <ArrowRight className="w-4 h-4 text-gray-300" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {service.images.map((img, imgIdx) => (
                  <div
                    key={img}
                    className="relative aspect-[4/3] md:aspect-[3/2] w-full overflow-hidden group shadow-md border border-gray-100"
                  >
                    <Image
                      src={img}
                      alt={`${service.title} showcase ${imgIdx + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
