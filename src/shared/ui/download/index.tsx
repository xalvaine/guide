import styles from './download.module.scss'
import { CSSProperties } from 'react'
import classNames from 'classnames'

interface Props {
  style?: CSSProperties
  className?: string
  text?: string
}

export const Download = ({ style, className, text }: Props) => {
  return (
    <button style={style} className={classNames(styles.button, className)}>
      {text || `Скачать`}
    </button>
  )
}
