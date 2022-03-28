import W1 from './assets/w1.svg'
import W2 from './assets/w2.svg'
import W3 from './assets/w3.svg'
import W4 from './assets/w4.svg'
import W5 from './assets/w5.svg'
import W6 from './assets/w6.svg'
import styles from './wrong-usages.module.scss'

const usages = [
  {
    title: `Дополнительные графические элементы`,
    text: (
      <>
        Не используйте в фотографиях <br />
        дополнительные графические элементы.
      </>
    ),
    image: W1,
  },
  {
    title: `Чересчур постановочные фотографии`,
    text: (
      <>
        Не используйте снимки, которые выглядят неестественно, постановочно или
        смотрятся как стоковые фотографии.
      </>
    ),
    image: W2,
  },
  {
    title: `Несоответствие тематике`,
    text: (
      <>
        Не используйте фотографии, <br />
        не относящиеся к основной теме.
      </>
    ),
    image: W3,
  },
  {
    title: `Чересчур агрессивно обработанные снимки`,
    text: (
      <>
        Не используйте фотографии, обработанные <br />
        не в соответствии с нашими правилами.
      </>
    ),
    image: W4,
  },
  {
    title: `Черно-белая фотография`,
    text: <>Не используйте черно-белые снимки.</>,
    image: W5,
  },
  {
    title: `Фотографии, изображающие людей со спины`,
    text: (
      <>
        Не используйте фотографии, на которых люди сняты со спины, при этом не
        окружены другими людьми и не рассматривают какой-либо объект.
      </>
    ),
    image: W6,
  },
]

export const WrongUsages = () => {
  return (
    <div className={styles.wrapper}>
      {usages.map((usage) => (
        <div key={usage.title} className={styles.item}>
          <h5 className={styles.title}>{usage.title}</h5>
          <p className={styles.text}>{usage.text}</p>
          <usage.image className={styles.image} />
        </div>
      ))}
    </div>
  )
}
