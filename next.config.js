/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Enable Next.js image optimization
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
