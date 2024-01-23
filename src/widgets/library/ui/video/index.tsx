import styles from './video.module.scss'
import Button from './assets/button.svg'
import { useCallback, useRef, useState } from 'react'
import classNames from 'classnames'
import 'swiper/css'
import SwiperClass from 'swiper/types/swiper-class'
import { SwiperSlide, Swiper } from 'swiper/react'
import { PageToggle } from 'shared/ui/page-toggle'
import { Download } from 'shared/ui/download'

const getUrl = (url: string) => `/static/${url}`

export const Video = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleToggle = async () => {
    const video = videoRef.current

    if (!video) {
      return
    }

    if (video.paused) {
      setIsPlaying(true)
      await video.play()
    } else {
      setIsPlaying(false)
      video.pause()
    }
  }

  return (
    <div className={styles.wrapper} onClick={handleToggle}>
      <video ref={videoRef} controls={false} className={styles.video}>
        <source src={getUrl(src)} type='video/mp4' />
      </video>
      <button
        className={classNames(isPlaying ? styles.buttonHidden : styles.button)}
      >
        <Button />
      </button>
    </div>
  )
}

const videos: { src: string; name: string }[] = [
  {
    src: `The Future is in Your Hands_RUS_25fps_h264_v1_subtitles120_1920x1080.mp4`,
    name: `The Future is in Your Hands_rus_sub`,
  },
  {
    src: `SIBUR Products_RUS_полная версия_с субтитрами.mp4`,
    name: `Новый отраслевой ролик о СИБУРе_rus_sub`,
  },
  { src: `SIBUR DONE with Logo 3456х1536.mp4`, name: `Продуктовый ролик` },
  {
    src: `SIBUR_PV_rus_sub_полная версия.mp4`,
    name: `Новый имиджевый ролик о СИБУРе_rus_sub`,
  },
  {
    src: `Vivilen_ролик о продукте и производстве_полная версия_RUS_без субтитров.mp4`,
    name: `Vivilen_ролик о продукте и производстве_полная версия_RUS_без субтитров`,
  },
  { src: `МАСТЕР ДОМ ПОЛИМЕРОВ_v2.mp4`, name: `МАСТЕР ДОМ ПОЛИМЕРОВ_v2` },
]

export const Videos = () => {
  const [swiper, setSwiper] = useState<SwiperClass>()
  const [page, setPage] = useState(0)

  const handlePrev = useCallback(() => {
    if (!swiper) {
      return
    }
    swiper.slidePrev()
  }, [swiper])

  const handleNext = useCallback(() => {
    if (!swiper) {
      return
    }
    swiper.slideNext()
  }, [swiper])

  return (
    <div className={styles.videosWrapper}>
      <Swiper
        loop
        className={styles.carousel}
        spaceBetween={36}
        slidesPerView={1}
        onSwiper={setSwiper}
        onSlideChange={(data: SwiperClass) => setPage(data.realIndex)}
      >
        {videos.map(({ src }) => (
          <SwiperSlide key={src}>
            <Video src={src} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Download
        target='_blank'
        className={styles.download}
        style={{ right: 0, bottom: 0 }}
        link={getUrl(videos[page].src)}
      />
      <div className={styles.toggle}>
      <PageToggle
        customLabel='Видеоролик'
        onPrevClick={handlePrev}
        onNextClick={handleNext}
        prevTitle={videos[(page + videos.length - 1) % videos.length].name}
        nextTitle={videos[(page + videos.length + 1) % videos.length].name}
      />
      </div>
    </div>
  )
}
