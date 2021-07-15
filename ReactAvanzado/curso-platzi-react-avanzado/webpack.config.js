/* eslint-disable prefer-regex-literals */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebPackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

const path = require('path')

module.exports = {
  mode: 'development',
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebPackPwaManifestPlugin({
      filename: 'manifest.webmanifest',
      name: 'IntaPlatzi',
      description: 'Tu app preferida para encontrar esas mascotas que tanto te encantan',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      background_color: '#456BD9',
      theme_color: '#456BD9',
      prefer_related_applications: true,
      icons: [
        {
          src: path.resolve('src/assets/img/icon.png'),
          size: '1024x1024',
          sizes: [96, 128, 144, 192, 256, 384, 512],
          purpose: 'maskable any',
          destination: path.join('Icons'),
          ios: true
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp('https://petgram-server-tony-to-var-anthonytorresvargas.vercel.app'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
