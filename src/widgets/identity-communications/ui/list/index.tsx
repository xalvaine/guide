import styles from './list.module.scss'
import { CSSProperties } from 'react'

interface Props {
  items: string[]
  style?: CSSProperties
  singleRow?: boolean
}

export const List = ({ items, style, singleRow }: Props) => {
  const row1: string[] = []
  const row2: string[] = []

  for (let i = 0; i < items.length + (items.length % 2); i++) {
    if (i % 2 === 0) {
      row1.push(items[i])
    } else {
      ;(singleRow ? row1 : row2).push(items[i] || ``)
    }
  }

  return (
    <div className={styles.wrapper} style={style}>
      <div className={styles.itemRow}>
        {row1.map((item, index) => (
          <div key={index} className={styles.item}>
            <p className={styles.number}>
              {((singleRow ? index : index * 2) + 1)
                .toString()
                .padStart(2, `0`)}
            </p>
            <p className={styles.text}>{item}</p>
          </div>
        ))}
      </div>
      {!!row2.length && (
        <div className={styles.itemRow}>
          {row2.map((item, index) => (
            <div key={index} className={styles.item}>
              {item && (
                <>
                  <p className={styles.number}>
                    {(index * 2 + 2).toString().padStart(2, `0`)}
                  </p>
                  <p className={styles.text}>{item}</p>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
