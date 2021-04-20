const webpack = require('webpack')
//const path = require('path');
const withPWA = require('next-pwa');
//const NextWorkboxPlugin = require('next-workbox-webpack-plugin');
//const WebpackPwaManifest = require('webpack-pwa-manifest');

const { parsed: keys } = require('dotenv').config({
    path: './keys.env'
})

module.exports = withPWA({
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(keys))
        return config
    },
    // POST CSS LOADER
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader', options: {
                  sourceMap: true, modules: true,
                  localIdentName: '[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  config: {
                    path: 'postcss.config.js'
                  }
                }
              },
              {
                loader: 'sass-loader', options: { sourceMap: true }
              }
            ]
          }
        ]
      },
    
    // PWA
    pwa: {
        dest: "public",
        swSrc: "sw.js"
    },

    // proxy request redirect (server)
    async rewrites() {
        return [
            {
                source: '/api/:slug*',
                destination: `http://localhost:8080/api/:slug*`,
            },
        ]
    }
})

        /*
                // workbox service-worker generator
                const workboxOptions = {
                    clientsClaim: true,
                    skipWaiting: true,
                    globPatterns: [path.resolve('.next/static/*'), path.resolve('.next/manifest.json')],
                    modifyUrlPrefix: {
                        '.next': '_next',
                    },
                    runtimeCaching: [
                        {
                            urlPattern: '/',
                            handler: 'networkFirst',
                            options: {
                                cacheName: 'html-cache',
                            },
                        },
                        {
                            urlPattern: new RegExp(process.env.API_FETCH_URL),
                            handler: 'staleWhileRevalidate',
                            options: {
                                cacheName: 'api-cache',
                                cacheableResponse: {
                                    statuses: [200],
                                },
                            },
                        },
                        {
                            urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
                            handler: 'CacheFirst',
                            options: {
                                cacheName: 'image-cache',
                                expiration: {
                                    maxEntries: 11,
                                },
                            },
                        },
                    ],
                };*/
        /*
                config.plugins.push(
                    new NextWorkboxPlugin({
                        buildId,
                        ...workboxOptions,
                    }),
        
                    new WebpackPwaManifest({
                        name: 'C19 Travel',
                        short_name: 'C19Tavel',
                        description: 'Travel app for pandemic',
                        theme_color: "#F3F3F4",
                        background_color: "#F3F3F4",
                        fingerprints: false,
                        inject: true,
                        start_url: "/",
                        icons: [
                            {
                                src: path.resolve('./public/images/Iconlogo.png'),
                                sizes: [96, 128, 192, 256, 384, 512],
                                ios: true
                            },
                            {
                                src: path.resolve('./public/images/Iconlogo.png'),
                                size: '1024x1024'
                            },
                            {
                                src: path.resolve('./public/images/Iconlogo.png'),
                                size: '1024x1024',
                                purpose: 'maskable'
                            },
                        ]
                    }));*/
