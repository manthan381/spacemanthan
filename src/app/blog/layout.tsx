import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Space Manthan Blog | Architecture & Design Insights",
  description:
    "Read the latest architecture, interior design, and construction insights from Space Manthan.",
  keywords:
    "architecture blog, interior design tips, construction insights, Space Manthan",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
