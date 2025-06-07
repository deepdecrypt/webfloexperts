import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  
  // Basic configuration
  reactStrictMode: true,
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Disable server-side features
  experimental: {
    serverActions: false,
  },
  
  // Ignore TypeScript and ESLint errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Webpack configuration
  webpack: (config) => {
    // Handle file-loader for static files
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
      type: 'asset/resource',
    });
    
    return config;
  },
};

export default nextConfig;
