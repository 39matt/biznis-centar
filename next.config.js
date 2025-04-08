/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{hostname:"images.pexels.com"},{hostname:"as1.ftcdn.net"},{hostname:"nextjs.org"}],
  },
}

module.exports = nextConfig
