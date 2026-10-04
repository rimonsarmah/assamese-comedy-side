import type { NextConfig } from "next";

// Static export for GitHub Pages, served from https://rimonsarmah.github.io/assamese-comedy-side/
const repo = "assamese-comedy-side";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
