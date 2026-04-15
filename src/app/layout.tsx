// Next.js
import { getSiteUrl, SITE_NAME } from "@/lib/site";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";

// Global CSS
import "./globals.css";

//Fonts

const centuryGothic = localFont({
  src: "./fonts/CenturyGothic.woff2", // Relative path from the current file
  variable: "--font-century-gothic",
  display: "swap",
});

// Metadata
export const metadata: Metadata = {
  title: SITE_NAME,
  description:
    "Building timeless spaces through innovative design and quality construction.",
  keywords:
    "architecture, construction, interior design, furniture, space planning",
  authors: [{ name: "Space Manthan" }],
  publisher: "Space Manthan",
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(getSiteUrl()),
  alternates: { canonical: "/" },
  verification: {
    google: "ryB0gZ23JeuX-A_GoY6ZWD3eBD1eWO8Am8QoSbWyooE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PRJS8RSC');`}
        </Script>
      </head>
      <body className={`${centuryGothic.className} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PRJS8RSC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
