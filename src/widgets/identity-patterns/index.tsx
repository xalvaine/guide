import { Header } from 'entities/header/ui'
import { Section } from 'entities/section/ui'
import { Relative } from 'shared/ui/relative'
import { Download } from 'shared/ui/download'
import { Paragraph } from 'shared/ui/paragraph'
import Patterns from './assets/patterns.svg'
import {Coords} from "widgets/identity-patterns/ui/coords";
import {PageToggle} from "shared/ui/page-toggle";
import {Routes} from "shared/config";

export const IdentityPatterns = () => {
  return (
    <>
      <Header title='Айдентика бренда' />
      <Section title='Паттерны'>
        <Relative style={{ marginTop: 120 }}>
          <Download style={{ top: 0, right: 0 }} />
          <Paragraph>
            <strong>Паттерны партнерства</strong> — это сочетание фигур
            различных форм и очертаний, которое символизирует разнообразие
            мнений, точек зрения и подходов  к решению общей задачи. Общность
            цели диктует необходимость партнерской работы, а ее закономерный
            результат — новые решения  и возможности.
            <br />
            <br />
            <strong>Паттерны партнерства</strong> лежат в основе нашей системы
            компоновки,  они — наиболее узнаваемый элемент нашего фирменного
            стиля.  С помощью геометрических паттернов мы создаем уникальные,
             креативные компоновки.
          </Paragraph>
        </Relative>
        <Patterns style={{ marginTop: 60 }} />
        <Coords />
      </Section>
      <PageToggle
        prevLink={Routes.IdentityPalette}
        prevTitle='Цветовая палитра'
        nextLink={Routes.IdentityGrid}
        nextTitle='Модульная сетка'
      />
    </>
  )
}
