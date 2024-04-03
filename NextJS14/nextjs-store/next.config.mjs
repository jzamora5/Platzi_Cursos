/** @type {import('next').NextConfig} */

import path from "path";
import NextBundleAnalyzer from "@next/bundle-analyzer";

const __dirname = path.resolve();

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/sass")],
    prependData: `@import "main.sass"`,
  },
  images: {
    remotePatterns: [
      {
        hostname: "cdn.shopify.com",
        protocol: "https",
      },
    ],
  },
};

export default withBundleAnalyzer(nextConfig);
