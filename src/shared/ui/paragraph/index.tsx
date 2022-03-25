import { CSSProperties, FC, ReactNode } from 'react'
import styles from './paragraph.module.scss'

interface Props {
  children: ReactNode
  size?: `s` | `m`
  style?: CSSProperties
}

export const Paragraph = ({ children, size = `s`, style }: Props) => {
  return (
    <p className={styles[size]} style={style}>
      {children}
    </p>
  )
}
