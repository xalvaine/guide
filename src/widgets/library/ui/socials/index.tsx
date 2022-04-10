import Tg from './assets/tg.svg'
import Vk from './assets/vk.svg'
import Zn from './assets/zen.svg'
import Rt from './assets/rutube.svg'
import { Download } from 'shared/ui/download'
import styles from './socials.module.scss'
import { useIsMobile } from 'shared/lib'
import { CSSProperties } from 'react'

interface SProps {
  item: SVGGElement
  link: string
  style: CSSProperties
}

const Social = ({ item: Item, link, style }: SProps) => {
  return (
    <a className={styles.item} href={link} target='_blank' rel='noreferrer'>
      <div className={styles.imgWrapper}>
        {/* @ts-ignore */}
        <Item className={styles.img} style={style} />
      </div>
    </a>
  )
}

const items = [
  { icon: Tg, link: 'https://t.me/siburofficial', width: 153, mWidth: 44 },
  { icon: Vk, link: 'https://vk.com/career.sibur', width: 153, mWidth: 44 },
  {
    icon: Zn,
    link: 'https://zen.yandex.ru/id/6219f14454eed5711c666bcf',
    width: 167,
    mWidth: 48,
  },
  {
    icon: Rt,
    link: 'https://rutube.ru/channel/23872104/',
    width: 288,
    mWidth: 83,
  },
]

export const Socials = () => {
  const { isMobile } = useIsMobile()

  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => (
        <Social
          key={index}
          item={item.icon}
          link={item.link}
          style={{ width: isMobile ? item.mWidth : item.width, height: `auto` }}
        />
      ))}
    </div>
  )
}
