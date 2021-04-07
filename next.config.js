module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:slug*',
                destination: `http://localhost:8080/api/:slug*`,
            },
            {
                source: '/images/:slug*',
                destination: `http://localhost:3334/images/:slug*`,
            }
        ]
    }
}