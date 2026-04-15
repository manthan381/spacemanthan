import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Space Manthan | Get in Touch",
  description:
    "Contact Space Manthan to start your architecture, interior, or construction project. Book a consultation today.",
  keywords:
    "contact space manthan, architecture consultation, interior design contact",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
