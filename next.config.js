/** @type {import('next').Config} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  distDir: process.env.NEXT_DIST_DIR || '.next',
}
module.exports = nextConfig
