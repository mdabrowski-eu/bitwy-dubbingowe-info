import type { NextConfig } from "next";

const repo = "bitwy-dubbingowe-info";
const isProd = process.env.NODE_ENV === "production";
const isPagesBuild = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isPagesBuild ? `/${repo}` : "",
  assetPrefix: isPagesBuild ? `/${repo}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isPagesBuild ? `/${repo}` : "",
  },
};

export default nextConfig;
