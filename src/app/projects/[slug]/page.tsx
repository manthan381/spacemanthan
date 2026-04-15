// src/app/projects/[slug]/page.tsx
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import type { Metadata } from "next";
import ProjectPageClient from "./ProjectPageClient";

export async function generateStaticParams() {
  const { projects } = await import("@/lib/projectData");
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export const dynamicParams = false;

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { projects } = await import("@/lib/projectData");
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const title = `${project.title} | Space Manthan Projects`;
  const description =
    project.description ||
    `Explore the ${project.title} project by Space Manthan.`;

  return {
    title,
    description,
    keywords: "architecture project, interior design, construction, Space Manthan",
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  };
}

export default function ProjectDetailPage() {
  return (
    <>
      <Header />
      <main className="px-6 py-10 max-w-7xl mx-auto">
        <ProjectPageClient />
      </main>
      <Footer />
    </>
  );
}
