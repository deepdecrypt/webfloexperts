import type { NextConfig } from "next";
import { join } from 'path';
import fs from 'fs';

// Function to check if a file exists
const fileExists = (path: string): boolean => {
  try {
    return fs.existsSync(path);
  } catch (err) {
    return false;
  }
};

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
  
  // Export path map to exclude dynamic routes
  exportPathMap: async function() {
    const paths: Record<string, { page: string }> = {
      '/': { page: '/' },
      // Add other static pages here
    };
    
    // Only add /blog if the page exists
    if (fileExists(join(process.cwd(), 'src/app/blog/page.tsx'))) {
      paths['/blog'] = { page: '/blog' };
    }
    
    return paths;
  }
};

export default nextConfig;
