import styles from './block-title.module.scss'
import { CSSProperties, ReactNode } from 'react'

interface Props {
  title: ReactNode
  extra?: ReactNode
  style?: CSSProperties
}

export const BlockTitle = ({ title, style, extra }: Props) => {
  return (
    <>
      <h3 style={style} className={styles.title}>
        {title}
        <div className={styles.extra}>{extra}</div>
      </h3>
    </>
  )
}
