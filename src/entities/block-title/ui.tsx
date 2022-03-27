import styles from './block-title.module.scss'
import {CSSProperties, ReactNode} from 'react'

interface Props {
  title: ReactNode
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
