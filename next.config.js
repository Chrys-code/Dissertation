const webpack = require('webpack')

const { parsed: keys } = require('dotenv').config({
    path: './keys.env'
})

module.exports = {
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(keys))
        return config
    },
    async rewrites() {
        return [
            {
                source: '/api/:slug*',
                destination: `http://localhost:8080/api/:slug*`,
            },
            {
                source: '/images/:slug*',
                destination: `http://localhost:8080/images/:slug*`,
            }
        ]
    }
}