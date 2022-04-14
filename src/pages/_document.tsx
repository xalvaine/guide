import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicon/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <link rel='shortcut icon' href='/favicon/favicon.ico' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta
          name='msapplication-config'
          content='/favicon/browserconfig.xml'
        />
        <meta name='theme-color' content='#ffffff' />

        <meta property='og:title' content='European Travel Destinations' />
        <meta property='og:type' content='article' />
        <meta
          property='og:image'
          content='https://guide.sibur.ru/preview.jpg'
        />
        <meta
          property='og:url'
          content='https://guide.sibur.ru'
        />
        <meta name='twitter:card' content='https://guide.sibur.ru/preview.jpg' />

        <meta
          property='og:description'
          content='Новый бренд СИБУРа'
        />
        <meta property='og:site_name' content='Новый бренд СИБУРа' />
        <meta name='twitter:image:alt' content='Новый бренд СИБУРа' />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
