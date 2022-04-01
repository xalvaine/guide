import { CSSProperties, ReactNode } from 'react'
import styles from './container.module.scss'

interface Props {
  children: ReactNode
  style?: CSSProperties
}

export const Container = ({ children, style }: Props) => {
  return <div className={styles.wrapper} style={style}>{children}</div>
}
