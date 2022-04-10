import styles from './block-title.module.scss'
import { CSSProperties, ReactNode } from 'react'
import classNames from "classnames";

interface Props {
  title: ReactNode
  extra?: ReactNode
  style?: CSSProperties
  borderless?: boolean
}

export const BlockTitle = ({ title, style, extra, borderless }: Props) => {
  return (
    <>
      <h3 style={style} className={classNames(styles.title, borderless && styles.borderless)}>
        {title}
        <div className={styles.extra}>{extra}</div>
      </h3>
    </>
  )
}
