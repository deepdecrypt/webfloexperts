import type { NextConfig } from "next";
import { join } from 'path';
import fs from 'fs';

const nextConfig: NextConfig = {
  // Basic configuration
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  trailingSlash: true,

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Experimental features
  experimental: {
    // No experimental features needed for static export
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Handle Node.js built-ins
    config.resolve.fallback = {
      fs: false,
      module: false,
    };

    // Handle static assets
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
      type: 'asset/resource',
    });

    return config;
  },

  // Skip type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // Skip linting during build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
