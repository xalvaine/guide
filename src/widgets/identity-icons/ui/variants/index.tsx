import I11 from './assets/i1.1.svg'
import I12 from './assets/i1.2.svg'
import I21 from './assets/i2.1.svg'
import I22 from './assets/i2.2.svg'
import I31 from './assets/i3.1.svg'
import I32 from './assets/i3.2.svg'
import I41 from './assets/i4.1.svg'
import I42 from './assets/i4.2.svg'
import I51 from './assets/i5.1.svg'
import I52 from './assets/i5.2.svg'
import I61 from './assets/i6.1.svg'
import I62 from './assets/i6.2.svg'
import I71 from './assets/i7.1.svg'
import I72 from './assets/i7.2.svg'
import I81 from './assets/i8.1.svg'
import I82 from './assets/i8.2.svg'
import I11M from './assets/i1.1m.svg'
import I12M from './assets/i1.2m.svg'
import I21M from './assets/i2.1m.svg'
import I22M from './assets/i2.2m.svg'
import I31M from './assets/i3.1m.svg'
import I32M from './assets/i3.2m.svg'
import I41M from './assets/i4.1m.svg'
import I42M from './assets/i4.2m.svg'
import I51M from './assets/i5.1m.svg'
import I52M from './assets/i5.2m.svg'
import I61M from './assets/i6.1m.svg'
import I62M from './assets/i6.2m.svg'
import I71M from './assets/i7.1m.svg'
import I72M from './assets/i7.2m.svg'
import I81M from './assets/i8.1m.svg'
import I82M from './assets/i8.2m.svg'
import { BlockTitle } from 'entities/block-title/ui'
import { Download } from 'shared/ui/download'
import styles from './variants.module.scss'
import { Fragment } from 'react'
import { useIsMobile } from 'shared/lib'
import { is } from '@babel/types'

const secs = [
  {
    title: `Устойчивое развитие`,
    link: `/Устойчивое развитие.zip`,
    v1: I11,
    v2: I12,
    v1m: I11M,
    v2m: I12M,
  },
  {
    title: `Отношения с клиентами`,
    link: `/Отношения с клиентами.zip`,
    v1: I21,
    v2: I22,
    v1m: I21M,
    v2m: I22M,
  },
  {
    title: `Сервисы для клиентов`,
    link: `/Сервисы для клиентов.zip`,
    v1: I31,
    v2: I32,
    v1m: I31M,
    v2m: I32M,
  },
  {
    title: `Разное`,
    link: `/Разное.zip`,
    v1: I41,
    v2: I42,
    v1m: I41M,
    v2m: I42M,
  },
  {
    title: `Упаковка`,
    link: `/Упаковка.zip`,
    v1: I51,
    v2: I52,
    v1m: I51M,
    v2m: I52M,
  },
  {
    title: `Транспорт`,
    link: `/Транспорт.zip`,
    v1: I61,
    v2: I62,
    v1m: I61M,
    v2m: I62M,
  },
  {
    title: `Медицина`,
    link: `/Медицина.zip`,
    v1: I71,
    v2: I72,
    short: true,
    v1m: I71M,
    v2m: I72M,
  },
  {
    title: `Строительство`,
    link: `/Строительство.zip`,
    v1: I81,
    v2: I82,
    v1m: I81M,
    v2m: I82M,
  },
]

export const Variants = () => {
  const { isMobile, rendered } = useIsMobile()

  if (!rendered) {
    return null
  }

  return (
    <div>
      {secs.map((sec) =>
        sec.short && !isMobile ? (
          <Fragment key={sec.title}>
            <div className={styles.titleShort}>
              <BlockTitle
                title={sec.title}
                extra={
                  <Download
                    download
                    link={sec.link}
                    className={styles.button}
                  />
                }
              />
            </div>
            <div className={styles.blocks}>
              <div className={styles.block1s}>
                {isMobile ? <sec.v1m /> : <sec.v1 />}
              </div>
              <div className={styles.block3s}>
                {isMobile ? <sec.v2m /> : <sec.v2 />}
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment key={sec.title}>
            <div className={styles.block1}>
              <BlockTitle
                title={sec.title}
                extra={
                  <Download
                    download
                    link={sec.link}
                    className={styles.button}
                  />
                }
              />
              {isMobile ? <sec.v1m /> : <sec.v1 />}
            </div>
            <div className={styles.block3}>
              {isMobile ? <sec.v2m /> : <sec.v2 />}
            </div>
          </Fragment>
        ),
      )}
    </div>
  )
}
