import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Space Manthan | Expert Interior & Construction In Gurugram",
  description:
    "Get in touch with Space Manthan for innovative space design, maintenance, and management. Reach us via WhatsApp at +91-9958097927 or visit our Gurugram office today.",
  keywords:
    "modern traditional interior, luxury interior design firms, modern traditional",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
