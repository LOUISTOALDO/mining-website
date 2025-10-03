/** @type {import('next').NextConfig} */
const nextConfig = {
  // TypeScript and ESLint validation enabled for better code quality
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Optimize for production
  swcMinify: true,
  // Enable static optimization
  trailingSlash: false,
  // Image optimization
  images: {
    unoptimized: false,
    domains: [],
  },
  // Output configuration for Vercel
  output: 'standalone',
  // Experimental features
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
