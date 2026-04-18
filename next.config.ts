import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pafwdmleyfxlimoeyofu.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/images/projects/highways-toll-plaza.jpg",
        destination: "/images/projects/highways-toll-plaza-2.jpg",
      },
      {
        source: "/images/projects/villa-cover.jpg",
        destination: "/images/projects/modern-office-furniture.png",
      },
    ];
  },
};

export default nextConfig;
