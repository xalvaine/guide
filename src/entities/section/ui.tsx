import Arrows from './assets/arrows.svg'
import CircleLines from './assets/circles-lines.svg'
import styles from 'entities/section/section.module.scss'
import {CSSProperties, ReactNode} from 'react'

interface Props {
  title: ReactNode
  children: ReactNode
  style?: CSSProperties
}

export const Section = ({ title, children, style }: Props) => {
  return (
    <>
      <div className={styles.wrapper} style={style}>
        <Arrows className={styles.image} />
        <div><h2 className={styles.title}>{title}</h2></div>
        <CircleLines className={styles.image} />
      </div>
      <div className={styles.content}>{children}</div>
    </>
  )
}
