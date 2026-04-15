import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login | Space Manthan",
  description: "Sign in to manage Space Manthan content.",
  alternates: {
    canonical: "/admin/login",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLoginLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
