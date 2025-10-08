import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["styled-system"],
  experimental: {
    optimizePackageImports: ["styled-system"],
  },
};

export default nextConfig;
