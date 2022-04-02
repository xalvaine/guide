import tg from './assets/telegram 1.png'
import vk from './assets/vk 1.png'
import zn from './assets/Zen_icon 1.png'
import rt from './assets/Vector.png'
import { Download } from 'shared/ui/download'
import styles from './socials.module.scss'

interface SProps {
  src: string
}

const Social = ({ src }: SProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.imgWrapper}>
        <img src={src} />
      </div>
      <Download className={styles.button} />
    </div>
  )
}

const items = [tg, vk, zn, rt]

export const Socials = () => {
  return (
    <div className={styles.wrapper}>
      {items.map((item) => (
        <Social key={item.src} src={item.src} />
      ))}
    </div>
  )
}
