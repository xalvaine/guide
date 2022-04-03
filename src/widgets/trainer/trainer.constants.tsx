import { Questions } from 'widgets/trainer/trainer.types'
import styles from './trainer.module.scss'
import i6_1 from './assets/i6.1.png'
import i6_2 from './assets/i6.2.png'
import Slvsu from './assets/slvu.svg'
import I9_1 from './assets/i9_1.svg'
import I9_2 from './assets/i9_2.svg'
import I11_1 from './assets/i11_1.svg'
import I11_2 from './assets/i11_2.svg'

export const questions: Questions = [
  {
    question: `Новый брендинг — это не только набор шрифтов и фирменных цветов. Это новые идеи и смыслы. Какие три составляющих легли в основу обновленного брендинга?`,
    variants: [
      {
        isCorrect: true,
        content: (
          <p className={styles.textContent}>
            Партнерство, рост и устойчивое развитие
          </p>
        ),
        description: (
          <>
            <b>Верно,</b> центральная идея компании СИБУР — это партнерство. А
            вспомогательные элементы: <br />
            рост и устойчивое развитие.
          </>
        ),
      },
      {
        content: (
          <p className={styles.textContent}>
            Потенциал, будущее и умные решения
          </p>
        ),
        description: (
          <>
            <b>Неверно,</b> центральная идея компании СИБУР — <br />
            это партнерство. А вспомогательные элементы: <br />
            рост и устойчивое развитие.
          </>
        ),
      },
    ],
  },
  {
    question: `В чем состоит миссия СИБУРа?`,
    variants: [
      {
        isCorrect: true,
        content: (
          <p className={styles.textContent}>
            Вместе создаем лучшее будущее <br />
            для людей и планеты
          </p>
        ),
        description: (
          <>
            <b>Верно,</b> наша миссия направлена  на создание лучшего будущего
            людей и планеты.
          </>
        ),
      },
      {
        content: (
          <p className={styles.textContent}>
            Ставим масштабные цели  и не отступаем перед трудностями
          </p>
        ),
        description: (
          <>
            <b>Неверно,</b> наша миссия направлена  на создание лучшего будущего
            людей и планеты.
          </>
        ),
      },
    ],
  },
  {
    question: `Как звучит видение нового бренда?`,
    variants: [
      {
        content: (
          <p className={styles.textContent}>
            Идем только вперед и стремимся  к непрерывным улучшениям
          </p>
        ),
        description: (
          <>
            <b>Неверно.</b> Мы видим СИБУР командой, где каждый помогает другому
            развиваться и улучшать мир вокруг.
          </>
        ),
      },
      {
        isCorrect: true,
        content: (
          <p className={styles.textContent}>
            Раскрываем потенциал друг друга, чтобы делать мир лучше
          </p>
        ),
        description: (
          <>
            <b>Верно.</b> Мы видим СИБУР командой, где каждый помогает другому
            развиваться и улучшать мир вокруг.
          </>
        ),
      },
    ],
  },
  {
    question: `Какой слоган появился у СИБУРа и стал отражением перемен?`,
    variants: [
      {
        content: <p className={styles.textContent}>Умный результат</p>,
        description: (
          <>
            <b>Неверно.</b> Умный результат —  одна из наших ключевых ценностей.
             А слоган объединяет миссию,  ценности и принципы.
          </>
        ),
      },
      {
        isCorrect: true,
        content: <p className={styles.textContent}>Партнеры для роста</p>,
        description: (
          <>
            <b>Верно!</b> Партнеры для роста — это слоган, который объединяет
            миссию,  ценности и принципы СИБУРа.
          </>
        ),
      },
    ],
  },
  {
    question: `Какой слоган появился у СИБУРа и стал отражением перемен?`,
    variants: [
      {
        content: <p className={styles.textContent}>Din Pro</p>,
        description: (
          <>
            Din Pro — это бывший фирменный шрифт. Теперь мы используем шрифт
            Roboto.
          </>
        ),
      },
      {
        isCorrect: true,
        content: <p className={styles.textContent}>Roboto</p>,
        description: (
          <>
            <b>Верно,</b> теперь у нас только один корпоративный шрифт — Roboto.
          </>
        ),
      },
    ],
  },
  {
    question: `На каком из двух плакатов текст написан новым шрифтом?`,
    variants: [
      {
        isCorrect: true,
        content: (
          <div className={styles.imageContent}>
            <img src={i6_1.src} alt='' />
          </div>
        ),
        description: (
          <>
            <b>Верно,</b> на первом плакате используется шрифт Roboto.
          </>
        ),
      },
      {
        content: (
          <div className={styles.imageContent}>
            <img src={i6_2.src} alt='' />
          </div>
        ),
        description: (
          <>
            <b>Неверно,</b> второй плакат написан шрифтом Din Pro — это бывший
            фирменный шрифт СИБУРа. Запомните, как выглядит новый шрифт Roboto
            на первом плакате.
          </>
        ),
      },
    ],
  },
  {
    question: `Какой шрифт можно использовать вместо Roboto, если есть технические проблемы?`,
    variants: [
      {
        content: (
          <p className={styles.textContent}>
            <Slvsu />
          </p>
        ),
        description: (
          <>
            <b>Нет,</b> шрифт Roboto отличается четкостью  и геометричными
            линиями.
          </>
        ),
      },
      {
        isCorrect: true,
        content: <p className={styles.textContent}>СИБУР любит тебя</p>,
        description: (
          <>
            <b>Да, абсолютно верно!</b>
          </>
        ),
      },
    ],
  },
  {
    question: `Какой слоган появился у СИБУРа и стал отражением перемен?`,
    variants: [
      {
        content: <p className={styles.textContent}>Verdana</p>,
        description: (
          <>
            <b>Нет,</b> Verdana не подойдет. Если нельзя использовать Roboto —
            используйте Arial.
          </>
        ),
      },
      {
        isCorrect: true,
        content: <p className={styles.textContent}>Arial</p>,
        description: (
          <>Arial — шрифт, который можно  использовать вместо Roboto.</>
        ),
      },
    ],
  },
  {
    question: `Логотип СИБУРа остался прежним. Но какой вариант его написания можно использовать?`,
    variants: [
      {
        isCorrect: true,
        content: (
          <div className={styles.imageContent}>
            <I9_1 />
          </div>
        ),
        description: (
          <>
            <b>Да!</b> Это верный русскоязычный вариант логотипа.
          </>
        ),
      },
      {
        content: (
          <div className={styles.imageContent}>
            <I9_2 />
          </div>
        ),
        description: (
          <>
            <b>Неверно.</b> Контурный шрифт  не подходит для логотипа.
          </>
        ),
      },
    ],
  },
  {
    question: `Какой цвет входит в фирменную палитру компании?`,
    variants: [
      {
        content: (
          <p className={styles.textContent} style={{ background: `#7D868C` }} />
        ),
        description: (
          <>
            <b>Неверно,</b> бирюзовый цвет входит в фирменную палитру и является
            основным цветом СИБУРа.
          </>
        ),
      },
      {
        isCorrect: true,
        content: (
          <p className={styles.textContent} style={{ background: `#008C95` }} />
        ),
        description: (
          <>
            <b>Верно,</b> бирюзовый — это основной цвет СИБУРа,  а серый цвет не
            входит в цветовую палитру компании.
          </>
        ),
      },
    ],
  },
  {
    question: `С обновленным брендингом в палитре СИБУРа  появились 4 основных цвета. Что это за цвета?`,
    variants: [
      {
        isCorrect: true,
        content: <div className={styles.i11_1} />,
        description: (
          <>
            <b>Правильно!</b> Бирюзовый, темно-зеленый, мятный и белый или{' '}
            <b>SIBUR DNA, Dark Teal, Mint и White —</b> это цвета бренда.
          </>
        ),
      },
      {
        content: <div className={styles.i11_2} />,
        description: (
          <>
            <b>Неверно.</b> Запоминайте, темно-зеленый, мятный и белый или{' '}
            <b>SIBUR DNA, Dark Teal, Mint и White —</b> это цвета бренда.
          </>
        ),
      },
    ],
  },
]
