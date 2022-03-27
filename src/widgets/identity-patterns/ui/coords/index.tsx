import Axis from './assets/axis.svg'
import Item1 from './assets/Vector.svg'
import Item2 from './assets/2.svg'
import Item3 from './assets/3.svg'
import Item4 from './assets/4.svg'
import styles from './coords.module.scss'

const items = [
  {
    image: Item1,
    title: `Простые фигуры`,
    description: (
      <>
        символизируют ясность мышления
        <br />и целеустремленность.
      </>
    ),
  },
  {
    image: Item2,
    title: `Круглые`,
    description: (
      <>
        устойчивое развитие, циркулярную экономику, таланты <br />и способности.
      </>
    ),
  },
  {
    image: Item3,
    title: `Остроугольные`,
    description: <>инновации, рост и прогресс.</>,
  },
  {
    image: Item4,
    title: `Соединяющиеся`,
    description: <>партнерство, <br />диалог и обмен мнениями.</>,
  },
]

export const Coords = () => {
  return (
    <div className={styles.wrapper}>
      <Axis className={styles.arrow} />
      <div className={styles.titles}>
        <span>Базовые</span>
        <span>Простые</span>
        <span>Сложные</span>
      </div>
      <div className={styles.items}>
        {items.map((item) => (
          <div key={item.title} className={styles.item}>
            <item.image />
            <p>
              <strong>{item.title}</strong> — <br />
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
