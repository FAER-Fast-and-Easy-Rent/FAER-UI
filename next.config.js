const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV != 'development',
    register: true,
    skipWaiting: true
  },
  swcMinify: true,
  reactStrictMode: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/avif', 'image/webp'],
    domains: ['housinganywhere.imgix.net', 'images.unsplash.com', 'd1052pu3rm1xk9.cloudfront.net', 'storage.googleapis.com']
  }
});