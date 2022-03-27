import styles from './download.module.scss'
import { CSSProperties } from 'react'
import classNames from 'classnames'

interface Props {
  style?: CSSProperties
  className?: string
}

export const Download = ({ style, className }: Props) => {
  return (
    <button style={style} className={classNames(styles.button, className)}>
      Скачать
    </button>
  )
}
