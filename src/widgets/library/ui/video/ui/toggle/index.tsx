import Ar1 from './assets/Group 2518.svg'
import Ar2 from './assets/ar2.svg'
import styles from './toggle.module.scss'
import classNames from 'classnames'

interface Props {
  title: string
  onPrevClick?: () => void
  onNextClick?: () => void
}

export const Toggle = ({ title, onPrevClick, onNextClick }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        {onPrevClick ? (
          <div
            style={{ display: `flex`, cursor: `pointer` }}
            onClick={onPrevClick}
          >
            <Ar2 className={classNames(styles.icon, styles.rotated)} />
          </div>
        ) : (
          <div
            style={{ display: `flex`, cursor: `pointer` }}
            onClick={onPrevClick}
          >
            <Ar1 className={styles.icon} />
          </div>
        )}
      </div>
      <p className={styles.center}>{title}</p>
      <div className={styles.right}>
        {onNextClick ? (
          <div
            style={{ display: `flex`, cursor: `pointer` }}
            onClick={onNextClick}
          >
            <Ar2 className={styles.icon} />
          </div>
        ) : (
          <div
            style={{ display: `flex`, cursor: `pointer` }}
            onClick={onNextClick}
          >
            <Ar1 className={classNames(styles.icon, styles.rotated)} />
          </div>
        )}
      </div>
    </div>
  )
}
