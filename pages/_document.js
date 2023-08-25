import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="shortcut icon" href="/img/fav.jpg" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />

      </body>
    </Html>
  )
}
