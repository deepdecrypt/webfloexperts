import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure static export is disabled
  output: undefined,
  
  // Basic configuration
  reactStrictMode: true,
  
  // Image optimization
  images: {
    domains: ['images.ctfassets.net'],
  },
  
  // Ignore TypeScript and ESLint errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Disable static optimization for all pages
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['contentful']
  },
  
  // Enable trailing slashes for better compatibility
  trailingSlash: true,
  // Add basePath if your site is not at the root of the domain
  // basePath: '/your-base-path',
};

export default nextConfig;
