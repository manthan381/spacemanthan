import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Space Manthan",
  description:
    "Browse Space Manthan's portfolio of architecture, interiors, commercial, and residential projects.",
  keywords:
    "architecture projects, interior design portfolio, construction projects, Space Manthan",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
