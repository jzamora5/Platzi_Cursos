const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false,
    runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/],
  },
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com'],
  },
});
