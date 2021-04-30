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