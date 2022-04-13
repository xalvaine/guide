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
      {/*<Plug />*/}
      <div
        dangerouslySetInnerHTML={{
          __html: `<!-- Yandex.Metrika counter --> <script type="text/javascript" > (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(88127817, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); </script> <noscript><div><img src="https://mc.yandex.ru/watch/88127817" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->`,
        }}
      />
    </>
  )
}

export default MyApp
