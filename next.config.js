/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require('next-plausible')

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.buymeacoffee.com'],
  },
}

module.exports = withPlausibleProxy()(nextConfig)
