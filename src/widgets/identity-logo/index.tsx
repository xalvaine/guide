import type { NextPage } from 'next'
import { Header } from 'entities/header/ui'
import { Section } from 'entities/section/ui'
import { Paragraph } from 'shared/ui/paragraph'
import { Variants } from './ui/variants'
import { BlockTitle } from 'entities/block-title/ui'
import { Title } from './ui/title'
import SafeArea from './assets/safe-area.svg'
import SafeAreaM from './assets/safe-area_m.svg'
import BaseBlock from './assets/base-block.svg'
import BaseBlockM from './assets/base-block_m.svg'
import Sizes from './assets/sizes.svg'
import SizesM from './assets/sizes_m.svg'
import Banner from './assets/banner.svg'
import Logos from './assets/logos.svg'
import LogosM from './assets/logos_m.svg'
import Backgrounds from './assets/backgrounds.svg'
import BackgroundsM from './assets/backgrounds_m.svg'
import WrongUsages from './assets/wrong-usages.svg'
import WrongUsagesM from './assets/wrong-usages_m.svg'
import Slogan from './assets/slogan.svg'
import SloganM from './assets/slogan_m.svg'
import Placement from './assets/placement.svg'
import PlacementM from './assets/placement_m.svg'
import styles from './logo.module.scss'
import { PageToggle } from 'shared/ui/page-toggle'
import { Routes } from 'shared/config'
import { useIsMobile } from 'shared/lib'

const Logo: NextPage = () => {
  const { isMobile } = useIsMobile()

  return (
    <>
      <Header title='Айдентика бренда' />
      <Section title='Логотип'>
        <Paragraph
          style={{
            width: isMobile ? undefined : 820,
            marginTop: isMobile ? 40 : 126,
          }}
        >
          Это лицо нашего бренда, один из его ключевых идентифицирующих
          элементов. Внесение изменений в логотип не допускается.
        </Paragraph>
        <Variants style={{ marginTop: 36 }} />
        <BlockTitle
          style={{ marginTop: isMobile ? 40 : 160 }}
          title='Размер и охранное поле'
        />
        <Paragraph>
          <Title>Охранное поле</Title>
          Логотип часто используется в сочетании с другими графическими
          элементами. Чтобы они не мешали восприятию логотипа, вокруг него
          сохраняется свободное пространство — так называемое охранное поле.
        </Paragraph>
        {isMobile ? (
          <SafeAreaM style={{ marginTop: 12 }} />
        ) : (
          <SafeArea style={{ marginTop: 25 }} />
        )}
        <Paragraph style={{ marginTop: isMobile ? 24 : 100 }}>
          <Title>Определение базового блока</Title>
          Величина охранного поля выражается в базовых блоках. Сторона базового
          блока X равна половине высоты логотипа СИБУР (см. иллюстрацию).
        </Paragraph>
        {isMobile ? (
          <BaseBlockM style={{ marginTop: 12 }} />
        ) : (
          <BaseBlock style={{ marginTop: 44 }} />
        )}
        <Paragraph style={{ marginTop: isMobile ? 24 : 100 }}>
          <Title>Минимальный размер</Title>
          Чтобы обеспечить легкость прочтения логотипа независимо от области
          применения, предусмотрен его минимальный размер для печати и цифровых
          носителей.
        </Paragraph>
        {isMobile ? (
          <SizesM style={{ marginTop: 12 }} />
        ) : (
          <Sizes style={{ marginTop: 44 }} />
        )}
        <Paragraph style={{ marginTop: isMobile ? 24 : 100 }}>
          Чтобы пропорционально изменять размеры логотипа, адаптируя его к
          макетам различного формата, высоту логотипа{' '}
          <strong>
            необходимо задать в размере 8% от длины короткой стороны носителя.{' '}
          </strong>
          <br />
          <br />
          <Title>Исключения</Title>
          При работе с носителями, у которых короткая сторона намного короче
          длинной, напр. с цифровыми баннерами, имеющими соотношение сторон
          более 21:9, можно задать высоту логотипа в размере 20% от длины
          короткой стороны.
          <br />
          <br />
          При работе с форматами крупнее 2 м (напр. с баннером 3 х 6 м)
          допускается задать высоту логотипа в размере 10% от длины короткой
          стороны.
          <br />
          <br />
          <Title>Рекомендации</Title>
          При масштабировании логотипа важно учитывать содержательное наполнение
          проектируемой точки контакта. Масштабируя логотип, важно помнить, что
          он должен вписываться в базовый модуль макета.
        </Paragraph>
        <Banner style={{ marginTop: 45, marginLeft: `-3.5%` }} />
        <p className={styles.label}>
          Баннер формата Leaderboard 728 Х 90 пикс.
        </p>
        <BlockTitle
          style={{ marginTop: isMobile ? 24 : 160 }}
          title='Варианты логотипа'
        />
        <Paragraph>
          Существует лишь три цветовых варианта логотипа. Выбор того или иного
          варианта диктуется условиями видимости и логикой оформления. При
          размещении логотипа поверх фотоизображений следует обеспечить легкость
          его прочтения.
        </Paragraph>
        {isMobile ? (
          <BackgroundsM style={{ marginTop: 12 }} />
        ) : (
          <Backgrounds style={{ marginTop: 120 }} />
        )}
        <BlockTitle
          style={{ marginTop: isMobile ? 64 : 160 }}
          title='Размещение на макете'
        />
        <Paragraph>
          Логотип должен вписываться в одиночный базовый модуль (3 х 3 ячейки)
          конкретного макета и не выходить за поля, ширина которых определяется
          базовым блоком (x), равным 5%{' '}
          <strong>от длины короткой стороны носителя.</strong>
          <br />
          <br />
          <strong>
            Не допускается размещать логотип где-либо, кроме верхних или нижних
            углов макета
          </strong>{' '}
          (выбор правой или левой стороны зависит от композиции).
          <br />
          <br />
          <strong>
            При размещении логотипа в одном из верхних углов, не допускается
            размещать какие-либо другие элементы выше него.
          </strong>
          <br />
          <br />
          Для размещения логотипа следует использовать только модули и
          изображения с несложной композицией, которые{' '}
          <strong>не будут мешать его восприятию.</strong>
        </Paragraph>
        {isMobile ? (
          <LogosM style={{ marginLeft: `-1.7%`, marginTop: 12 }} />
        ) : (
          <Logos style={{ marginLeft: `-1.7%`, marginTop: 80 }} />
        )}
        <BlockTitle
          style={{ marginTop: isMobile ? 36 : 160 }}
          title='Неправильное использование'
        />
        {isMobile ? (
          <WrongUsagesM style={{ marginLeft: -8 }} />
        ) : (
          <WrongUsages style={{ marginLeft: -10 }} />
        )}
      </Section>
      <Section title='Слоган'>
        <Paragraph style={{ marginTop: isMobile ? 40 : 130 }}>
          Наш слоган <strong>«Партнеры для роста»</strong> всегда размещается
          отдельно от логотипа. Это визуально балансирует элементы макета,
          обеспечивает легкость прочтения и адаптируемость к различным форматам
          — особенно это касается цифровых носителей.
          <br />
          <br />
          Размер слогана определяется{' '}
          <strong>
            базовым блоком X, соответствующим половине высоты логотипа СИБУР.
          </strong>
          Высота слогана равна 1X.
          <strong>Важно помнить:</strong>
          <br />
          1. Слоган всегда пишется одной строкой и размещается слева или справа
          от логотипа с выравниванием по нижней либо верхней базовой линии. Его
          также можно использовать в вертикальном формате под логотипом,
          выравнивая либо слева, либо справа от логотипа.
          <br />
          <br />
          2. Слоган выполняется гарнитурой Roboto нормального начертания.
          <br />
          <br />
          3. Цвет шрифта для слогана зависит от цвета логотипа.
          <br />
          <br />
          4. Логотип может использоваться без слогана. Однако слоган следует
          применять только в связке с логотипом.
          <br />
          <br />
          5. Слоган должен отстоять от логотипа на расстояние не менее{' '}
          <strong>3X базовых блоков</strong> в горизонтальном расположении и
          <strong>2X</strong> в вертикальном.
        </Paragraph>
        {isMobile ? (
          <SloganM style={{ marginTop: 20, marginLeft: -4 }} />
        ) : (
          <Slogan style={{ marginTop: 60, marginLeft: -20 }} />
        )}
        <BlockTitle
          style={{ marginTop: isMobile ? 20 : 160 }}
          title='Размещение'
        />
        <Paragraph>
          Логотип и слоган СИБУРа следует размещать в нижних или верхних углах
          макета, друг напротив друга.
          <br />
          <br />
          Порядок следования логотипа и слогана может меняться в зависимости от
          формата носителя или расположения текста.
          <br />
          <br />
          <strong>Исключения:</strong> Если размещение в соответствии с
          рекомендациями выше невозможно из-за расположения или размера модулей,
          фиксированную компоновку логотипа и слогана можно разместить внутри
          самого модуля.
          <br />
          <br />
          Для размещения логотипа следует использовать только модули и
          изображения с несложной композицией, которые не будут мешать его
          восприятию.
        </Paragraph>
        {isMobile ? (
          <PlacementM style={{ marginLeft: -10, marginTop: 20 }} />
        ) : (
          <Placement style={{ marginLeft: -13, marginTop: 30 }} />
        )}
      </Section>
      <PageToggle
        prevLink={Routes.About}
        prevTitle='Новый бренд СИБУРа'
        nextLink={Routes.IdentityPalette}
        nextTitle='Цветовая палитра'
      />
    </>
  )
}

export default Logo
