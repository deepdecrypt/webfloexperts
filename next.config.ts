import type { NextConfig } from "next";
import { join } from 'path';
import fs from 'fs';

const nextConfig: NextConfig = {
  // Basic configuration
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  trailingSlash: true,

  // Image optimization configuration
  images: {
    loader: 'custom',
    loaderFile: './src/image-loader.ts',
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
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
