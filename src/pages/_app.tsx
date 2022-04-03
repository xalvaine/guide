import 'app/globals.scss'
import 'app/fonts.scss'
import type { AppProps } from 'next/app'
import { ScrollToTop } from 'entities/scroll-to-top'
import { Plug } from 'widgets/plug'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ScrollToTop />
      <Plug />
    </>
  )
}

export default MyApp
