import { Header } from 'entities/header/ui'
import { Section } from 'entities/section/ui'
import { Paragraph } from 'shared/ui/paragraph'
import { Roboto } from 'widgets/identity-typography/ui/roboto'
import { BlockTitle } from 'entities/block-title/ui'
import { Variants } from 'widgets/identity-typography/ui/variants'
import Placement from './assets/placement.svg'
import Placement_m_1 from './assets/placement_m_1.svg'
import Placement_m_2 from './assets/placement_m_2.svg'
import Ex1 from './assets/ex1.svg'
import Ex2 from './assets/ex2.svg'
import Ex3 from './assets/ex3.svg'
import { PageToggle } from 'shared/ui/page-toggle'
import { Routes } from 'shared/config'
import { useIsMobile } from 'shared/lib'

export const IdentityTypography = () => {
  const { isMobile, rendered } = useIsMobile()

  if (!rendered) {
    return null
  }

  return (
    <>
      <Header title='Айдентика бренда' />
      <Section title='Типографика'>
        <Paragraph style={{ marginTop: isMobile ? 40 : 120 }}>
          Везде, где возможно, в качестве корпоративного шрифта мы используем
          Roboto. Roboto — это семейство современных, легких для чтения рубленых
          шрифтов геометрического дизайна. Простые и незатейливые очертания
          символов располагают к открытости и доверию, воплощая в себе главный
          принцип нашей деятельности: партнеры для прогресса.
        </Paragraph>
        <Roboto />
        <BlockTitle title='Использование' />
        <Paragraph>
          Заголовки лучше всего отражают наш подход к дизайну: использование в
          заголовках оранжевого акцентного цвета и комбинирование различных
          начертаний шрифта позволяет нам визуализировать принцип партнерства.
          Важное слово или часть выполненного одноцветного заголовка можно
          выделить оранжевым цветом и шрифтом жирного начертания.
          <br />
          <br />
          Основной текст выполняется черным, белым, либо темным оттенком
          сине-зеленого цвета (dark teal), в зависимости от точки контакта и
          области применения.
          <br />
          <br />
          Междустрочный интервал определяется кеглем используемого шрифта и
          изменяется лишь незначительно в зависимости от категории и
          предназначения текста.
          <br />
          <br />
          <b>
            Крупные заголовки (от 80 pt) 100%
            <br />
            Малые заголовки и подзаголовки 110%
            <br />
            Основной текст (до 24  pt) 120%
            <br />
          </b>
        </Paragraph>
        <Variants />
        <BlockTitle
          title='Размещение'
          style={{ marginTop: isMobile ? 40 : 160 }}
        />
        <Paragraph>
          Текст следует выравнивать единообразно в пределах модульной сетки. Его
          можно размещать поверх выбранного паттерна или фотоизображений. Текст
          не должен выступать за границы фигур, использованных в оформлении
          макета.
          <br />
          <br />
          <b>1. На модуле фотоизображения</b>
          <br />
          Текст можно размещать поверх изображения в рамках отведеннойдля него
          площади набора. Текст должен быть визуально выделен и хорошо читаться.
          <br />
          <br />
          <b>2. На базовых модулях</b>
          <br />
          Текст можно размещать поверх базовой фигуры в рамках отведенной для
          него площади набора. Поля площади набора текста следует соблюдать
          также и для базовой фигуры.
          <br />
          <br />
          <b>3. На простых модулях</b>
          <br />
          Текст можно размещать на простых фигурах в рамках отведенной для него
          площади набора. Выход за границы модулей не допускается.
          <br />
          <br />
          <b>Выравнивание текста</b>
          <br />
          Текст следует всегда выравнивать по левому полю площади набора текста.
          <br />
          <br />
          При размещении текста внутри базового модуля важно выравнивать текст
          не только по левому краю площади набора, но также по ее верхнему или
          нижнему краю. Не допускается размещать текст посередине модуля.
          <br />
          <br />
          При размещении текста внутри блока, состоящего из нескольких модулей,
          не обязательно выравнивать его вертикально по верхнему или нижнему
          краю: в этом случае допускается выравнивание текста по центру блока.
        </Paragraph>
        {isMobile ? (
          <Placement_m_1 style={{ marginTop: 28, marginLeft: -15 }} />
        ) : (
          <Placement style={{ marginTop: 100, marginLeft: -15 }} />
        )}
        <BlockTitle
          title='Примеры'
          style={{ marginTop: isMobile ? 32 : 160 }}
        />
        {isMobile ? (
          <Placement_m_2 style={{ marginLeft: -12 }} />
        ) : (
          <div
            style={{
              display: `flex`,
              flexDirection: `column`,
              marginLeft: -15,
            }}
          >
            <Ex1 />
            <Ex2 style={{ marginTop: 80 }} />
            <Ex3 style={{ marginTop: 60 }} />
          </div>
        )}
      </Section>
      <PageToggle
        prevLink={Routes.IdentityGrid}
        prevTitle='Модульная сетка'
        nextLink={Routes.IdentityPhotoStyle}
        nextTitle='Фотостиль'
      />
    </>
  )
}
