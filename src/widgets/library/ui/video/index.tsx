import styles from './video.module.scss'
import Button from './assets/button.svg'

export const Video = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.video}>
        <button className={styles.button}>
          <Button />
        </button>
      </div>
    </div>
  )
}
