import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        const lang = "en";

        return (
            <Html lang={lang}>
                <Head>
                    {/* style */}
                    <script async src="https://kit.fontawesome.com/a83d77d417.js" />
                    {/* browser design */}
                    {/*<link rel="icon" sizes="16x16" type="image/svg" href="/favicon.svg" />*/}
                    {/*link rel="icon" sizes="32x32" type="image/svg" href="/favicon.svg" />*/}
                    {/*<link rel="apple-touch-icon" sizes="180x180" href="favicon.ico" />*/}
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;