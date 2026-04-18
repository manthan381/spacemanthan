import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Insights | Construction Trends | Space Manthan",
  description:
    "Ready to transform your space? Read our blog for expert insights on architectural standards and tech-driven construction, then book a free consultation with the Space Manthan team.",
  keywords:
    "boss office table design, office wall design, boss office cabin design, low budget small office interior design, office cabin design",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
