import { CSSProperties, ReactNode } from 'react'
import styles from './micro-title.module.scss'

interface Props {
  style?: CSSProperties
  children: ReactNode
}

export const MicroTitle = ({ children, style }: Props) => {
  return (
    <h5 className={styles.wrapper} style={style}>
      {children}
    </h5>
  )
}
