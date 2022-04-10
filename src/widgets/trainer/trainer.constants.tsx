import { Questions } from 'widgets/trainer/trainer.types'
import styles from './trainer.module.scss'
import i6_1 from './assets/i6.1.png'
import i6_2 from './assets/i6.2.png'
import Slvsu from './assets/slvu.svg'
import I9_1 from './assets/i9_1.svg'
import I9_2 from './assets/i9_2.svg'
import I13_1 from './assets/i13_1.svg'
import I13_2 from './assets/i13_2.svg'
import i14_1 from './assets/i14_1.png'
import i14_2 from './assets/i14_2.png'
import I15_1 from './assets/i15_1.svg'
import I15_2 from './assets/i15_2.svg'
import i16_1 from './assets/i16_1.png'
import i16_2 from './assets/i16_2.png'
import I17_1 from './assets/i17_1.svg'
import I17_2 from './assets/i17_2.svg'
import I18_1 from './assets/i18_1.svg'
import I18_2 from './assets/i18_2.svg'
import I19_1 from './assets/i19_1.svg'
import I19_2 from './assets/i19_2.svg'
import I20_D1 from './assets/i20_d1.svg'
import I20_D2 from './assets/i20_d2.svg'
import I20_D3 from './assets/i20_d3.svg'
import I20_D4 from './assets/i20_d4.svg'
import I20_D4M from './assets/i20_d4m.svg'

export const questions: Questions = [
  {
    question: (
      <>
        Новый брендинг — это не только набор шрифтов и&nbsp;фирменных цветов.
        Это новые идеи и смыслы. Какие три составляющих легли в основу
        обновленного брендинга?
      </>
    ),
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
            <b>Верно,</b> наша миссия направлена <br />
            на создание лучшего будущего людей и планеты.
          </>
        ),
      },
      {
        content: (
          <p className={styles.textContent}>
            Ставим масштабные цели <br />и не отступаем перед трудностями
          </p>
        ),
        description: (
          <>
            <b>Неверно,</b> наша миссия направлена <br />
            на создание лучшего будущего людей и планеты.
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
            Идем только вперед и стремимся <br />к непрерывным улучшениям
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
            <b>Неверно.</b> Умный результат — <br />
            одна из наших ключевых ценностей.
            <br />А слоган объединяет миссию, <br />
            ценности и принципы.
          </>
        ),
      },
      {
        isCorrect: true,
        content: <p className={styles.textContent}>Партнеры для роста</p>,
        description: (
          <>
            <b>Верно!</b> Партнеры для роста — это слоган, который объединяет
            миссию, <br />
            ценности и принципы СИБУРа.
          </>
        ),
      },
    ],
  },
  {
    question: `Как теперь называется корпоративный шрифт СИБУРа?`,
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
          <div className={styles.imageDescription}>
            <b>Верно,</b> на первом плакате используется шрифт Roboto.
          </div>
        ),
      },
      {
        content: (
          <div className={styles.imageContent}>
            <img src={i6_2.src} alt='' />
          </div>
        ),
        description: (
          <div className={styles.imageDescription}>
            <b>Неверно,</b> второй плакат написан шрифтом Din Pro — это бывший
            фирменный шрифт СИБУРа. Запомните, как выглядит новый шрифт Roboto
            на первом плакате.
          </div>
        ),
      },
    ],
  },
  {
    question: `Какой из этих шрифтов — Roboto?`,
    variants: [
      {
        content: (
          <p className={styles.textContent}>
            <Slvsu />
          </p>
        ),
        description: (
          <>
            <b>Нет,</b> шрифт Roboto отличается четкостью <br />и геометричными
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
    question: `Какой шрифт можно использовать вместо Roboto, если есть технические проблемы?`,
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
          <>
            Arial — шрифт, который можно <br />
            использовать вместо Roboto.
          </>
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
          <div className={styles.imageDescription}>
            <b>Да!</b> Это верный русскоязычный вариант логотипа.
          </div>
        ),
      },
      {
        content: (
          <div className={styles.imageContent}>
            <I9_2 />
          </div>
        ),
        description: (
          <div className={styles.imageDescription}>
            <b>Неверно.</b> Контурный шрифт <br />
            не подходит для логотипа.
          </div>
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
            <b>Верно,</b> бирюзовый — это основной цвет СИБУРа, <br />а серый
            цвет не входит в цветовую палитру компании.
          </>
        ),
      },
    ],
  },
  {
    question: `С обновленным брендингом в палитре СИБУРа появились 4 основных цвета. Что это за цвета?`,
    variants: [
      {
        isCorrect: true,
        content: <div className={styles.i11_1} />,
        description: (
          <div className={styles.imgDesc}>
            <b>Правильно!</b> Бирюзовый, темно-зеленый, мятный и белый или{' '}
            <b>SIBUR DNA, Dark Teal, Mint и White —</b> это цвета бренда.
          </div>
        ),
      },
      {
        content: <div className={styles.i11_2} />,
        description: (
          <div className={styles.imgDesc}>
            <b>Неверно.</b> Запоминайте, темно-зеленый, мятный и белый или{' '}
            <b>SIBUR DNA, Dark Teal, Mint и White —</b> это цвета бренда.
          </div>
        ),
      },
    ],
  },
  {
    question: `Какой цвет входит в фирменную палитру компании?`,
    variants: [
      {
        content: (
          <p
            className={styles.textContent}
            style={{ background: `#FF00FF`, color: `#ffffff` }}
          >
            яркая фуксия (Fuchsia)
          </p>
        ),
        description: (
          <>
            <b>Неверно,</b> Bright Orange — это акцентный цвет СИБУРа, которым
            выделяется важная информация.
          </>
        ),
      },
      {
        isCorrect: true,
        content: (
          <p
            className={styles.textContent}
            style={{ background: `#E04E39`, color: `#ffffff` }}
          >
            акцентный оранжевый (Bright Orange)
          </p>
        ),
        description: (
          <>
            <b>Верно,</b> Bright Orange — это акцентный цвет СИБУРа, которым
            выделяется важная информация.
          </>
        ),
      },
    ],
  },
  {
    question: `Выберите плакат, который сделан в верной цветовой палитре.`,
    variants: [
      {
        content: (
          <div className={styles.imageContent}>
            <I13_1 />
          </div>
        ),
        description: (
          <div className={styles.imageDescription}>
            <b>Нет,</b> присмотритесь, здесь <br />
            не все цвета совпадают.
          </div>
        ),
      },
      {
        isCorrect: true,
        content: (
          <div className={styles.imageContent}>
            <I13_2 />
          </div>
        ),
        description: (
          <div className={styles.imageDescription}>
            <b>Абсолютно верно!</b>
          </div>
        ),
      },
    ],
  },
  {
    question: `Выберите плакат, который сделан по новому брендбуку.`,
    variants: [
      {
        isCorrect: true,
        content: (
          <div className={styles.imageContent}>
            <img src={i14_1.src} alt='' />
          </div>
        ),
        description: (
          <div className={styles.imageDescription}>
            Вы заметили нанолист на другом плакате?
            <br /> <b>Верно,</b> раньше нанолист использовался, <br />
            как фирменный элемент, но сейчас <br />в брендбуке СИБУРа его нет.
          </div>
        ),
      },
      {
        content: (
          <div className={styles.imageContent}>
            <img src={i14_2.src} alt='' />
          </div>
        ),
        description: (
          <div className={styles.imageDescription}>
            <b>Неверно,</b> на этом плакате есть нанолист. Раньше он
            использовался, как фирменный элемент, но сейчас в брендбуке СИБУРа
            его нет.
          </div>
        ),
      },
    ],
  },
  {
    question: `Укажите, как теперь выглядят элементы фирменного стиля СИБУРа?`,
    variants: [
      {
        isCorrect: true,
        content: (
          <div className={styles.imageContent2}>
            <I15_1 />
          </div>
        ),
        description: (
          <div className={styles.imageDescription}>
            <b>Верно!</b> «Паттерны партнерства» — это новый фирменный стиль
            СИБУРа. Сочетание фигур различных форм и&nbsp;очертаний
            символизирует разнообразие мнений, точек зрения и подходов
            к&nbsp;решению общей задачи.
          </div>
        ),
      },
      {
        content: (
          <div className={styles.imageContent2}>
            <I15_2 />
          </div>
        ),
        description: (
          <div className={styles.imageDescription}>
            <b>Неверно.</b> Теперь у СИБУРа появились «Паттерны партнерства».
            Запомните, как выглядит сочетание фигур различных форм
            и&nbsp;очертаний, которое символизирует разнообразие мнений, точек
            зрения и подходов к&nbsp;решению общей задачи.
          </div>
        ),
      },
    ],
  },
  {
    question: `Как можно использовать изображения в фирменных плакатах СИБУРа? `,
    variants: [
      {
        content: (
          <div className={styles.imageContent}>
            <img src={i16_1.src} alt='' />
          </div>
        ),
        description: (
          <div className={styles.imageDescription}>
            <b>Неверно,</b> в этом случае две фотографии перегружают плакат.
          </div>
        ),
      },
      {
        isCorrect: true,
        content: (
          <div className={styles.imageContent}>
            <img src={i16_2.src} alt='' />
          </div>
        ),
        description: (
          <div className={styles.imageDescription}>
            <b>Верно,</b> фотографии можно использовать, <br />
            но важно не перегружать ими плакат.
          </div>
        ),
      },
    ],
  },
  {
    question: `Какие фигуры есть в «Паттернах партнерства» СИБУРа?`,
    variants: [
      {
        isCorrect: true,
        content: (
          <div className={styles.imageContent3}>
            <I17_1 />
          </div>
        ),
        description: (
          <div className={styles.imageDescription}>
            <b>Верно,</b> «Паттерны партнерства» состоят из:
            <br />
            <br />
            1. <b>Простых фигур</b> — они символизируют ясность мышления и
            целеустремленность; <br />
            2. <b>Круглых фигур</b> — символизируют устойчивое развитие,
            циркулярную экономику, таланты и способности;
            <br />
            3. <b>Остроугольных фигур</b> — это символ инноваций, роста и
            прогресса; <br />
            4. <b>Соединяющихся фигур</b> — это символ партнерства, диалога и
            обмена мнениями.
          </div>
        ),
      },
      {
        content: (
          <div className={styles.imageContent3}>
            <I17_2 style={{marginRight: -12}} />
          </div>
        ),
        description: (
          <div className={styles.imageDescription}>
            <b>Неверно,</b> «Паттерны партнерства» состоят из:
            <br />
            <br />
            1. <b>Простых фигур</b> — они символизируют ясность мышления и
            целеустремленность; 2. <b>Круглых фигур</b> — символизируют
            устойчивое развитие, циркулярную экономику, таланты и способности;
            3. <b>Остроугольных фигур</b> — это символ инноваций, роста и
            прогресса; 4. <b>Соединяющихся фигур</b> — это символ партнерства,
            диалога и обмена мнениями.
          </div>
        ),
      },
    ],
  },
  {
    question: `На каком изображении логотип СИБУРа занимает правильное место?`,
    variants: [
      {
        content: (
          <div className={styles.imageContent}>
            <I18_1 />
          </div>
        ),
        description: (
          <div className={styles.imageDescription}>
            <b>Неверно!</b>
            <br />
            Логотип должен вписываться в базовый квадратный модуль и не выходить
            за его пределы.
          </div>
        ),
      },
      {
        isCorrect: true,
        content: (
          <div className={styles.imageContent}>
            <I18_2 />
          </div>
        ),
        description: (
          <div className={styles.imageDescription}>
            <b>Верно!</b>
            <br />
            Логотип должен вписываться в базовый квадратный модуль и не выходить
            за его пределы.
          </div>
        ),
      },
    ],
  },
  {
    question: `Выберите, как нужно располагать логотип и слоган СИБУРа.`,
    variants: [
      {
        content: (
          <div className={styles.imageContent3}>
            <I19_1 />
          </div>
        ),
        description: (
          <div className={styles.imageDescription}>
            <b>Неверно.</b> Слоган всегда нужно располагать на расстоянии от
            логотипа.
          </div>
        ),
      },
      {
        isCorrect: true,
        content: (
          <div className={styles.imageContent3}>
            <I19_2 />
          </div>
        ),
        description: (
          <div className={styles.imageDescription}>
            <b>Верно!</b> Слоган всегда нужно писать в одну строку и располагать
            на расстоянии от логотипа.
          </div>
        ),
      },
    ],
  },
  {
    question: `Выберите, какими цветами можно изображать логотип СИБУРа.`,
    variants: [
      {
        isCorrect: true,
        content: <div className={styles.i20_1} />,
        description: (
          <div className={styles.imgDesc}>
            <b>Верно.</b>
            <br />
            <br />
            Черный вариант логотипа подходит для носителей с ограничениями по
            цвету.
            <br />
            <br />
            <I20_D1 />
            <br />
            <br />
            Бирюзовый вариант логотипа можно применять в сочетании со светлым
            фоном, либо на фоне <br />в цветах фирменной гаммы.
            <br />
            <br />
            <I20_D2 />
            <br />
            <br />
            Белый логотип подходит для темного фона: поверх фотографий или на
            фоне в цветах фирменной гаммы.
            <br />
            <br />
            <I20_D3 />
            <br />
            <br />
            Варианты правильных логотипов:
            <br />
            <br />
            <I20_D4 className={styles.desktopOnly} />
            <I20_D4M className={styles.mobileOnly} />
          </div>
        ),
      },
      {
        content: <div className={styles.i20_2} />,
        description: (
          <div className={styles.imgDesc}>
            <b>Неверно.</b>
            <br />
            <br />
            Черный вариант логотипа подходит для носителей с ограничениями по
            цвету.
            <br />
            <br />
            <I20_D1 />
            <br />
            <br />
            Бирюзовый вариант логотипа можно применять в сочетании со светлым
            фоном, либо на фоне <br />в цветах фирменной гаммы.
            <br />
            <br />
            <I20_D2 />
            <br />
            <br />
            Белый логотип подходит для темного фона: поверх фотографий или на
            фоне в цветах фирменной гаммы.
            <br />
            <br />
            <I20_D3 />
            <br />
            <br />
            Варианты правильных логотипов:
            <br />
            <br />
            <I20_D4 className={styles.desktopOnly} />
            <I20_D4M className={styles.mobileOnly} />
          </div>
        ),
      },
    ],
  },
]
