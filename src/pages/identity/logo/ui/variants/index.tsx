import { CSSProperties } from 'react'
import Rus from './assets/rus.svg'
import Eng from './assets/eng.svg'
import styles from './variants.module.scss'

interface Props {
  style?: CSSProperties
}

export const Variants = ({ style }: Props) => {
  return (
    <div style={style} className={styles.wrapper}>
      <Rus style={{ marginBottom: 80 }} />
      <Eng />
      <button className={styles.button}>Скачать</button>
    </div>
  )
}
