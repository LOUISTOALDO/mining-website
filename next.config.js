/** @type {import('next').NextConfig} */
const nextConfig = {
  // TypeScript validation enabled for better code quality
  typescript: {
    ignoreBuildErrors: false,
  },
  // ESLint configuration moved to eslint.config.js in Next.js 16
  // SWC minification is enabled by default in Next.js 16
  // Enable static optimization
  trailingSlash: false,
  // Image optimization
  images: {
    unoptimized: false,
    domains: [],
  },
  // Output configuration for Vercel
  output: 'standalone',
}

module.exports = nextConfig
