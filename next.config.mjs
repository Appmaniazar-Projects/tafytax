/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'dist',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/tafytax' : undefined,
  basePath: process.env.NODE_ENV === 'production' ? '/tafytax' : undefined,
}

export default nextConfig
