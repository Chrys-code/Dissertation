import Document, { Head, Main, NextScript, Html, DocumentContext } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                </Head>
                < body >
                    <Main />
                    < NextScript />
                </body>
            </Html>
        )
    }
}