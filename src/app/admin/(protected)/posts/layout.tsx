import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Posts | Space Manthan",
  description: "Manage blog posts for Space Manthan.",
  alternates: {
    canonical: "/admin/posts",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPostsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
