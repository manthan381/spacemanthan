import type { Metadata } from "next";

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

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
