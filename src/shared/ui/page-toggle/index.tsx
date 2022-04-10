import Ar1 from './assets/Group 2518.svg'
import Ar2 from './assets/ar2.svg'
import styles from './page-toggle.module.scss'
import Link from 'next/link'
import classNames from 'classnames'

interface Props {
  prevTitle?: string
  prevLink?: string
  nextTitle?: string
  nextLink?: string
}

export const PageToggle = ({
  prevTitle,
  prevLink,
  nextTitle,
  nextLink,
}: Props) => {
  const isEdge = !(prevTitle && prevLink && nextTitle && nextLink)

  return (
    <div className={styles.wrapper}>
      {prevTitle && prevLink && (
        <div className={isEdge ? styles.center : styles.left}>
          <Link href={prevLink} passHref>
            <a>
              <Ar1 className={styles.icon} />
            </a>
          </Link>
          <p className={styles.text}>Вернуться на страницу «{prevTitle}»</p>
        </div>
      )}
      {nextTitle && nextLink && (
        <div className={isEdge ? styles.center : styles.right}>
          <Link href={nextLink} passHref>
            <a style={{ display: `flex` }}>
              <Ar2 className={styles.icon} />
            </a>
          </Link>
          <p className={styles.text}>Перейти на страницу «{nextTitle}»</p>
        </div>
      )}
    </div>
  )
}
