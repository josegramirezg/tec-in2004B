import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/tec-in2004B",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;