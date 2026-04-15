import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expertise | Space Manthan",
  description:
    "Discover Space Manthan's expertise in architecture, interiors, construction, and custom furniture solutions.",
  keywords:
    "architecture expertise, interior design services, construction, custom furniture",
  alternates: {
    canonical: "/expertise",
  },
};

export default function ExpertiseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
