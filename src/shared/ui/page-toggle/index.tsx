import Ar1 from './assets/Group 2518.svg'
import Ar2 from './assets/ar2.svg'
import styles from './page-toggle.module.scss'
import Link from 'next/link'

type Props =
  | {
      prevTitle: string
      prevLink: string
      onPrevClick?: undefined
      nextTitle: string
      nextLink: string
      onNextClick?: undefined
      customLabel?: string
    }
  | {
      prevTitle?: undefined
      prevLink?: undefined
      nextTitle: string
      nextLink: string
      onPrevClick?: undefined
      onNextClick?: undefined
      customLabel?: string
    }
  | {
      prevTitle: string
      prevLink: string
      nextTitle?: undefined
      nextLink?: undefined
      onPrevClick?: undefined
      onNextClick?: undefined
      customLabel?: string
    }
  | {
      prevTitle: string
      prevLink?: undefined
      onPrevClick: () => void
      nextTitle: string
      nextLink?: undefined
      onNextClick: () => void
      customLabel?: string
    }

export const PageToggle = ({
  prevTitle,
  prevLink,
  nextTitle,
  nextLink,
  onPrevClick,
  onNextClick,
  customLabel,
}: Props) => {
  const isEdge = !(
    prevTitle &&
    (prevLink || onPrevClick) &&
    nextTitle &&
    (nextLink || onNextClick)
  )

  return (
    <div className={styles.wrapper}>
      {prevTitle && (prevLink || onPrevClick) && (
        <div className={isEdge ? styles.center : styles.left}>
          {prevLink && (
            <Link href={prevLink} passHref>
              <a style={{ display: `flex` }}>
                <Ar1 className={styles.icon} />
              </a>
            </Link>
          )}
          {onPrevClick && (
            <div
              style={{ display: `flex`, cursor: `pointer` }}
              onClick={onPrevClick}
            >
              <Ar1 className={styles.icon} />
            </div>
          )}
          <p className={styles.text}>
            {customLabel || `Вернуться на страницу`} «{prevTitle}»
          </p>
        </div>
      )}
      {nextTitle && (nextLink || onNextClick) && (
        <div className={isEdge ? styles.center : styles.right}>
          {nextLink && (
            <Link href={nextLink} passHref>
              <a style={{ display: `flex` }}>
                <Ar2 className={styles.icon} />
              </a>
            </Link>
          )}
          {onNextClick && (
            <div
              style={{ display: `flex`, cursor: `pointer` }}
              onClick={onNextClick}
            >
              <Ar2 className={styles.icon} />
            </div>
          )}
          <p className={styles.text}>
            {customLabel || `Перейти на страницу`} «{nextTitle}»
          </p>
        </div>
      )}
    </div>
  )
}
