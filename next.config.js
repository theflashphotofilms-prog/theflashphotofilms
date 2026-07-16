/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/',
        permanent: true,
      },
    ]
  },
  swcMinify: true,
}

module.exports = nextConfig