import styles from './block-title.module.scss'
import { CSSProperties } from 'react'

interface Props {
  title: string
  style?: CSSProperties
}

export const BlockTitle = ({ title, style }: Props) => {
  return (
    <>
      <h3 style={style} className={styles.title}>
        {title}
      </h3>
    </>
  )
}
