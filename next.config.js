/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['autobot.im', 'cdn.shopify.com'],
  },
}

module.exports = nextConfig