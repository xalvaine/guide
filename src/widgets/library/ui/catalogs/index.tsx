import { useIsMobile } from 'shared/lib'
import U from './assets/u.svg'
import S from './assets/s.svg'
import M from './assets/m.svg'
import T from './assets/t.svg'
import { BlockTitle } from 'entities/block-title/ui'
import { ReactNode } from 'react'
import { Download } from 'shared/ui/download'
import styles from './catalogs.module.scss'

const content = [
  {
    title: `Упаковка`,
    link: `/catalogs/Упаковка_2022.pdf`,
    source: <U className={styles.image} />,
  },
  {
    title: `Строительство`,
    link: `/catalogs/Строительство_2022.pdf`,
    source: <S className={styles.image} />,
  },
  {
    title: `Медицина`,
    link: `/catalogs/Медицина_2022.pdf`,
    source: <M className={styles.image} />,
  },
  {
    title: `Транспорт`,
    link: `/catalogs/Транспорт 2022.pdf`,
    source: <T className={styles.image} />,
  },
]

interface Props {
  title: string
  link: string
  source: ReactNode
}

const Cat = ({ title, source, link }: Props) => {
  return (
    <>
      <h4 className={styles.title}>{title}</h4>
      {source}
      <div className={styles.bwrapper}><Download className={styles.download} download link={link} target='_blank' /></div>
    </>
  )
}

export const Catalogs = () => {
  const { isMobile, rendered } = useIsMobile()

  return (
    <>
      <BlockTitle title='Отраслевые каталоги' style={{marginTop: isMobile ? 40 : 120}} />
      {content.map((cat) => (
        <Cat key={cat.link} {...cat} />
      ))}
    </>
  )
}
