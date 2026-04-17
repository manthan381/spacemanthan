// src/app/projects/page.tsx
"use client";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { ProjectCategory, projects } from "@/lib/projectData";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

// List of available project categories
const categories: ProjectCategory[] = Array.from(
  new Set(projects.map((p) => p.category))
);

// Category descriptions
const categoryDescriptions: Record<ProjectCategory, string> = {
  "Office & Residence":
    "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
};

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category");

  const initialCategory: ProjectCategory =
    categoryParam && categories.includes(categoryParam as ProjectCategory)
      ? (categoryParam as ProjectCategory)
      : categories[0];

  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(
    initialCategory
  );

  // Update query param when category changes
  useEffect(() => {
    const newParams = new URLSearchParams();
    newParams.set("category", selectedCategory);
    router.push(`/projects?${newParams.toString()}`);
  }, [selectedCategory, router]);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <Header />

      <main className="px-6 py-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Our Projects</h1>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-none text-sm transition ${
                selectedCategory === category
                  ? "bg-[#273027] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="mb-24 p-6 bg-gray-50 rounded-none border border-gray-200">
          <h2 className="text-2xl font-semibold mb-3">
            {selectedCategory} Projects
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {categoryDescriptions[selectedCategory]}
          </p>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <p className="text-muted-foreground">
            No projects found in this category.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-x-8 gap-y-24 sm:grid-cols-2 xl:grid-cols-4 mt-8 pb-16">
            {filteredProjects.map((project, index) => {
              const isTop = index % 2 !== 0;
              return (
                <Link
                  href={`/projects/${project.slug}`}
                  key={project.slug}
                  className={`group block relative ${isTop ? "mb-16 mt-0" : "mt-16 mb-0"}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#ddd]">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div
                    className={`pointer-events-none absolute left-1/2 -translate-x-1/2 w-[140px] h-[140px] md:w-[160px] md:h-[160px] border border-[#3d3d3d] bg-transparent flex flex-col items-center overflow-hidden ${
                      isTop
                        ? "top-0 -translate-y-1/2 justify-start pt-3 md:pt-4"
                        : "bottom-0 translate-y-1/2 justify-end pb-3 md:pb-4"
                    }`}
                  >
                    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider leading-tight text-[#111] text-center px-1 line-clamp-3">
                      {project.title}
                    </p>
                    <p className="mt-1 text-[11px] md:text-[12px] text-[#333] leading-tight text-center px-1 line-clamp-2">
                      {project.location}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
