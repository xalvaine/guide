import Tg from './assets/tg.svg'
import Vk from './assets/vk.svg'
import Zn from './assets/zen.svg'
import Rt from './assets/rutube.svg'
import { Download } from 'shared/ui/download'
import styles from './socials.module.scss'

interface SProps {
  item: SVGGElement
  link: string
}

const Social = ({ item: Item, link }: SProps) => {
  return (
    <a className={styles.item} href={link} target='_blank' rel="noreferrer">
      <div className={styles.imgWrapper}>
        {/* @ts-ignore */}
        <Item className={styles.img} />
      </div>
    </a>
  )
}

const items = [
  { icon: Tg, link: 'https://t.me/siburofficial' },
  { icon: Vk, link: 'https://vk.com/career.sibur\n' },
  { icon: Zn, link: 'https://zen.yandex.ru/id/6219f14454eed5711c666bcf' },
  { icon: Rt, link: 'https://rutube.ru/channel/23872104/' },
]

export const Socials = () => {
  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => (
        <Social key={index} item={item.icon} link={item.link} />
      ))}
    </div>
  )
}
