/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['abroadvisions.com', 'www.abroadvisions.com'],
    },
  },
}

module.exports = nextConfig
