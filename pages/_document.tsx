import Document, { Head, Main, NextScript, Html, DocumentContext } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="theme-color" content="#F3F3F4" />
                </Head>
                < body >
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}