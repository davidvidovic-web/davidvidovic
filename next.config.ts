import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "html.aqlova.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
