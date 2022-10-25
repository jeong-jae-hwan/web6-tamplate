import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
