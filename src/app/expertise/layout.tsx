import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Office Build & Smart Furniture Experts | Space Manthan",
  description:
    "Space Manthan specializes in end-to-end commercial construction and in-house furniture manufacturing. We transform workspaces with tech-enabled precision and quality-controlled execution.",
  keywords:
    "office design ideas, office false ceiling design, office sofa design, creative small office interior design",
  alternates: {
    canonical: "/expertise",
  },
};

export default function ExpertiseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
