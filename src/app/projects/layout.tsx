import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Office Design & build Projects | Space Manthan",
  description:
    "A look into the spaces we've built. Discover our design philosophy through our work with Urban company, Go Work, and more across the Delhi-NCR region.",
  keywords:
    "office wear blouse designs, modern small office interior design, office ceiling design, office counter design",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
