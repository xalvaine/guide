import styles from './download.module.scss'
import { CSSProperties, useMemo } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

interface Props {
  style?: CSSProperties
  className?: string
  text?: string
  link?: string
  download?: boolean
  target?: HTMLLinkElement['target']
}

export const Download = ({ style, className, text, link, download, target }: Props) => {
  return (
    <a
      target={target}
      style={style}
      className={classNames(styles.button, className)}
      href={link}
      download={download}
    >
      {text || `Скачать`}
    </a>
  )
}
