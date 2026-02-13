import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.maxmilkin.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
