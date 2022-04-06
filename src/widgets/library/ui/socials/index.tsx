import Tg from './assets/tg.svg'
import Vk from './assets/vk.svg'
import Zn from './assets/zen.svg'
import Rt from './assets/rutube.svg'
import { Download } from 'shared/ui/download'
import styles from './socials.module.scss'

interface SProps {
  item: SVGGElement
}

const Social = ({ item: Item }: SProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.imgWrapper}>
        {/* @ts-ignore */}
        <Item className={styles.img} />
      </div>
    </div>
  )
}

const items = [Tg, Vk, Zn, Rt]

export const Socials = () => {
  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => (
        <Social key={index} item={item} />
      ))}
    </div>
  )
}
