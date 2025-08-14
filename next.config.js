/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['autobot.im', 'cdn.shopify.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/handheld-vacuum-cleaner',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig