import { CSSProperties, ReactNode } from 'react'
import styles from './relative.module.scss'

interface Props {
  style?: CSSProperties
  children: ReactNode
}

export const Relative = ({ style, children }: Props) => {
  return (
    <div className={styles.wrapper} style={style}>
      {children}
    </div>
  )
}
