import { CSSProperties, ReactNode } from 'react'
import styles from './relative.module.scss'
import classNames from 'classnames'

interface Props {
  style?: CSSProperties
  children: ReactNode
  className?: string
}

export const Relative = ({ style, children, className }: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)} style={style}>
      {children}
    </div>
  )
}
