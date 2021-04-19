const webpack = require('webpack')
const path = require('path');
const NextWorkboxPlugin = require('next-workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const { parsed: keys } = require('dotenv').config({
    path: './keys.env'
})

module.exports = {
    webpack(config, { isServer, buildId, dev }) {

        config.plugins.push(new webpack.EnvironmentPlugin(keys))
        // workbox service-worker generator
        const workboxOptions = {
            clientsClaim: true,
            skipWaiting: true,
            globPatterns: [path.resolve('.next/static/*'), path.resolve('.next/static/commons/*')],
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
                    urlPattern: new RegExp('^http://localhost:3000/signin'),
                    handler: 'networkFirst',
                    options: {
                        cacheName: 'signin-cache',
                    },
                },
                {
                    urlPattern: /[^3]\/form\//,
                    handler: 'networkFirst',
                    options: {
                        cacheName: 'form-cache',
                    },
                },
                {
                    urlPattern: /[^3]\/verify\//,
                    handler: 'networkFirst',
                    options: {
                        cacheName: 'verify-cache',
                    },
                },
                {
                    urlPattern: /[^3]\/links\//,
                    handler: 'networkFirst',
                    options: {
                        cacheName: 'links-cache',
                    },
                },
                {
                    urlPattern: /[^3]\/profile\//,
                    handler: 'networkFirst',
                    options: {
                        cacheName: 'profile-cache',
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
        };

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
                    },
                    {
                        src: path.resolve('./public/images/Iconlogo.png'),
                        size: '1024x1024'
                    },
                    {
                        src: path.resolve('./public/images/Iconlogo.png'),
                        size: '1024x1024',
                        purpose: 'maskable'
                    }
                ]
            }));
        return config
    },
    // proxy request redirect
    async rewrites() {
        return [
            {
                source: '/api/:slug*',
                destination: `http://localhost:8080/api/:slug*`,
            },
        ]
    }
}