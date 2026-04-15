import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Space Manthan",
  description: "Secure admin access for Space Manthan.",
  alternates: {
    canonical: "/admin",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
