/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  output: 'standalone',
  trailingSlash: true,
  generateEtags: false,
  typescript: {
      ignoreBuildErrors: true,
  },
  eslint: {
      ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig