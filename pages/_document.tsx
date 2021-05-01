import Document, { Head, Main, NextScript, Html, DocumentContext } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="HandheldFriendly" content="true" />
                    <meta name="description" content="Covid-19 Travel App to get prepared before the move." />
                    <meta name="keywords" content="covid, virus, 19, covid-19, pandemic, form, travel, links, information" />
                    <meta name="og:title" content="C19 | Travel App" />
                    <meta name="og:description" content="C19 Travel App to get prepared before the move." />
                    <meta name="og:image" content="/icons/icon_192x192.png" />
                    <meta name="og:url" content="https://c19travel.herokuapp.com/" />
                    <meta name="theme-color" content="#F3F3F4" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="icon" href="/icons/icon_192x192.png" />
                    <link rel="apple-touch-icon" href="/icons/icon_192x192.png" />
                </Head>
                < body >
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

