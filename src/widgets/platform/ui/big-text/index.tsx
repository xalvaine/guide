import {CSSProperties, ReactNode} from 'react'
import styles from './big-text.module.scss'

interface Props {
  children: ReactNode
  style: CSSProperties
}

export const BigText = ({ children, style }: Props) => {
  return <p className={styles.text} style={style}>{children}</p>
}
