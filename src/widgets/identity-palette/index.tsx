import { Header } from 'entities/header/ui'
import { Section } from 'entities/section/ui'
import { Intro } from 'widgets/identity-palette/ui/intro'
import Palette from './assets/palette.svg'
import PaletteM from './assets/palette_m.svg'
import { BlockTitle } from 'entities/block-title/ui'
import { Paragraph } from 'shared/ui/paragraph'
import Palette2 from './assets/palette2.svg'
import Solution from './assets/solution.svg'
import SolutionM from './assets/solution_m.svg'
import brochure from './assets/brochure_m.png'
import br from './assets/br.png'
import wr from './assets/wr.png'
import { PageToggle } from 'shared/ui/page-toggle'
import { Routes } from 'shared/config'
import { useIsMobile } from 'shared/lib'

export const IdentityPalette = () => {
  const { isMobile, rendered } = useIsMobile()

  if (!rendered) {
    return null
  }

  return (
    <>
      <Header title='Айдентика бренда' />
      <Section
        title={
          <>
            Цветовая {!isMobile && <br />}
            палитра
          </>
        }
      >
        <Intro />
        {isMobile ? (
          <PaletteM style={{ marginTop: 12 }} />
        ) : (
          <Palette style={{ marginTop: 200 }} />
        )}
        <BlockTitle
          title='Соотношение цветов'
          style={{ marginTop: isMobile ? 50 : 160 }}
        />
        <Paragraph>
          Процентные значения представляют собой обобщенные показатели <br />и
          отражают усредненное относительное распределение цветов. Приведенные
          значения не следует использовать как абсолютные величины, обязательные
          к применению для каждого отдельного <br />
          носителя и точки контакта.
        </Paragraph>
        <Palette2 style={{ marginTop: isMobile ? 12 : 100 }} />
        <BlockTitle
          style={{ marginTop: isMobile ? 40 : 160 }}
          title={
            <>
              Примеры правильного
              <br />
              использования цветовой палитры
            </>
          }
        />
        {isMobile ? (
          <SolutionM style={{ marginLeft: -4 }} />
        ) : (
          <Solution style={{ marginLeft: -25 }} />
        )}
        {isMobile ? (
          <img style={{ width: 340 }} src={brochure.src} />
        ) : (
          <img
            src={br.src}
            style={{ marginLeft: -35, marginTop: 100, width: `100%` }}
            alt=''
          />
        )}
        <BlockTitle
          style={{ marginTop: isMobile ? 35 : 150 }}
          title={
            <>
              Примеры неправильного
              <br />
              использования цветовой палитры
            </>
          }
        />
        <img src={wr.src} style={{ marginLeft: `-1.8%`, width: `100%` }} alt='' />
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
