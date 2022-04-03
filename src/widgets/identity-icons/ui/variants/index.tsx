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
import { BlockTitle } from 'entities/block-title/ui'
import { Download } from 'shared/ui/download'
import styles from './variants.module.scss'
import { Fragment } from 'react'

const secs = [
  { title: `Устойчивое развитие`, link: ``, v1: I11, v2: I12 },
  { title: `Отношения с клиентами`, link: ``, v1: I21, v2: I22 },
  { title: `Сервисы для клиентов`, link: ``, v1: I31, v2: I32 },
  { title: `Разное`, link: ``, v1: I41, v2: I42 },
  { title: `Упаковка`, link: ``, v1: I51, v2: I52 },
  { title: `Транспорт`, link: ``, v1: I61, v2: I62 },
  { title: `Медицина`, link: ``, v1: I71, v2: I72, short: true },
  { title: `Строительство`, link: ``, v1: I81, v2: I82 },
]

export const Variants = () => {
  return (
    <div>
      {secs.map((sec) =>
        sec.short ? (
          <>
            <div className={styles.titleShort}>
              <BlockTitle
                title={sec.title}
                extra={<Download className={styles.button} />}
              />
            </div>
            <div className={styles.blocks}>
              <div className={styles.block1s}>
                <sec.v1 />
              </div>
              <div className={styles.block3s}>
                <sec.v2 />
              </div>
            </div>
          </>
        ) : (
          <Fragment key={sec.title}>
            <div className={styles.block1}>
              <BlockTitle
                title={sec.title}
                extra={<Download className={styles.button} />}
              />
              <sec.v1 />
            </div>
            <div className={styles.block3}>
              <sec.v2 />
            </div>
          </Fragment>
        ),
      )}
    </div>
  )
}
