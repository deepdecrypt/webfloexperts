import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
    domains: ['images.ctfassets.net'], // Add your Contentful image domain if needed
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable React StrictMode for static export
  reactStrictMode: false,
  // Enable static export
  trailingSlash: true,
  // Add basePath if your site is not at the root of the domain
  // basePath: '/your-base-path',
};

export default nextConfig;
