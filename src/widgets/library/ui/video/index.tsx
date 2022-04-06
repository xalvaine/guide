import styles from './video.module.scss'
import Button from './assets/button.svg'
import { useRef, useState } from 'react'
import classNames from 'classnames'

export const Video = () => {
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
      <video
        ref={videoRef}
        src='/static/all_videos_05.mp4'
        controls={false}
        className={styles.video}
      />
      <button
        className={classNames(isPlaying ? styles.buttonHidden : styles.button)}
      >
        <Button />
      </button>
    </div>
  )
}
