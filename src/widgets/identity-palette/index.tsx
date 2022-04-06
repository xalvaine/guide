import { Header } from 'entities/header/ui'
import { Section } from 'entities/section/ui'
import { Intro } from 'widgets/identity-palette/ui/intro'
import Palette from './assets/palette.svg'
import { BlockTitle } from 'entities/block-title/ui'
import { Paragraph } from 'shared/ui/paragraph'
import Palette2 from './assets/palette2.svg'
import Solution from './assets/solution.svg'
import br from './assets/br.png'
import wr from './assets/wr.png'
import { PageToggle } from 'shared/ui/page-toggle'
import { Routes } from 'shared/config'
import { inspect } from 'util'

export const IdentityPalette = () => {
  return (
    <>
      <Header title='Айдентика бренда' />
      <Section
        title={
          <>
            Цветовая <br />
            палитра
          </>
        }
      >
        <Intro />
        <Palette style={{ marginTop: 200 }} />
        <BlockTitle title='Соотношение цветов' style={{ marginTop: 160 }} />
        <Paragraph>
          Процентные значения представляют собой обобщенные показатели <br />и
          отражают усредненное относительное распределение цветов. Приведенные
          значения не следует использовать как абсолютные величины, обязательные
          к применению для каждого отдельного <br />
          носителя и точки контакта.
        </Paragraph>
        <Palette2 style={{ marginTop: 100 }} />
        <BlockTitle
          style={{ marginTop: 160 }}
          title={
            <>
              Примеры правильного
              <br />
              использования цветовой палитры
            </>
          }
        />
        <Solution style={{ marginLeft: -25 }} />
        <img
          src={br.src}
          style={{ marginLeft: -35, marginTop: 100, width: `100%` }}
          alt=''
        />
        <BlockTitle
          style={{ marginTop: 150 }}
          title={
            <>
              Примеры неправильного
              <br />
              использования цветовой палитры
            </>
          }
        />
        <img src={wr.src} style={{ marginLeft: -35, width: `100%` }} alt='' />
      </Section>
      <PageToggle
        prevLink={Routes.IdentityLogo}
        prevTitle='Логотип'
        nextLink={Routes.IdentityPatterns}
        nextTitle='Паттерны'
      />
    </>
  )
}
