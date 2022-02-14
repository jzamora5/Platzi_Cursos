module.exports = {
  reactStrictMode: true,
  env: {
    customKey: 'customValue'
  },
  basePath: '/dist',
  compress: true,
  async redirects() {
    return [
      {
        source: '/hola',
        destination: '/hello',
        permantent: true
      }
    ]
  }
};
