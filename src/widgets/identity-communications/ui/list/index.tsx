import styles from './list.module.scss'
import { CSSProperties } from 'react'

interface Props {
  items: string[]
  style?: CSSProperties
}

export const List = ({ items, style }: Props) => {
  return (
    <div className={styles.wrapper} style={style}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <p className={styles.number}>
            {(index + 1).toString().padStart(2, `0`)}
          </p>
          <p className={styles.text}>{item}</p>
        </div>
      ))}
    </div>
  )
}
