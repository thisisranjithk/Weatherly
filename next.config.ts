import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.weatherapi.com",
      },
    ],
  },
};

export default nextConfig;
