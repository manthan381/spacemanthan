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
  Office:
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
              className={`px-4 py-2 rounded-full text-sm transition ${
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
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className="group block overflow-hidden rounded-2xl shadow hover:shadow-xl transition"
              >
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {project.location}
                  </p>
                  <span className="inline-block mt-2 text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                    {project.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
