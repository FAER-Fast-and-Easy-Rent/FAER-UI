module.exports = {
    swcMinify: true,
    reactStrictMode: true,
    images: {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      formats: ['image/avif', 'image/webp'],
      domains:['housinganywhere.imgix.net','images.unsplash.com']
    },
  };