import 'app/globals.scss'
import 'app/fonts.scss'
import type { AppProps } from 'next/app'
import { ScrollToTop } from 'entities/scroll-to-top'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ScrollToTop />
    </>
  )
}

export default MyApp
