import { Header } from 'entities/header/ui'
import { Section } from 'entities/section/ui'
import { Block } from 'widgets/library/ui/block'
import phbank from './assets/Снимок экрана 2022-03-29 в 22.39 1.png'
import { Container } from 'shared/ui/container'
import { BlockTitle } from 'entities/block-title/ui'
import { Video } from 'widgets/library/ui/video'
import { Paragraph } from 'shared/ui/paragraph'
import Booklet from './assets/booclet.svg'
import Catalogs from './assets/catalogs.svg'
import Pres from './assets/pres.svg'
import Templ from './assets/templ.svg'
import Const from './assets/const.svg'
import chan from './assets/chan.png'
import { Socials } from 'widgets/library/ui/socials'
import { PageToggle } from 'shared/ui/page-toggle'
import { Routes } from 'shared/config'

export const Library = () => {
  return (
    <>
      <Header title='Библиотека' />
      <Container>
        <Block
          style={{ marginTop: 120 }}
          title='Фотобанк СИБУРа'
          link='http://sibur.photas.ru'
          content={
            <img
              style={{ marginLeft: -15, marginBottom: -25, width: `73%` }}
              src={phbank.src}
              alt=''
            />
          }
        />
      </Container>
      <Container style={{ marginTop: 160 }}>
        <BlockTitle title='Видеоролик о СИБУРе' />
        <Video />
      </Container>
      <Section
        style={{ marginTop: 160 }}
        title={
          <>
            Материалы <br />о компании
          </>
        }
      >
        <Paragraph style={{ width: 735, marginTop: 130 }}>
          Мы создали материалы о компании, в которых учли все необходимые
          элементы бренда. Готовые решения помогут сэкономить время и
          соответствовать стилю СИБУРа. Ниже вы можете скачать необходимые
          форматы.
        </Paragraph>
        <Block
          style={{ marginTop: 120 }}
          title='Буклет о компании'
          download
          link='/Буклет о СИБУРе.pdf'
          content={
            <Booklet
              style={{ marginLeft: -15, marginBottom: -25, width: `70%` }}
            />
          }
        />
        <Block
          download
          style={{ marginTop: 120 }}
          link='/Отраслевые каталоги.zip'
          title='Отраслевые каталоги'
          content={
            <Catalogs
              style={{ marginLeft: -15, marginBottom: -25, width: `70%` }}
            />
          }
        />
        <Block
          download
          link='/СЛАЙДЫ О КОМПАНИИ 2022.pptx'
          style={{ marginTop: 120 }}
          title='Презентация о компании'
          content={
            <Pres
              style={{ marginLeft: -15, marginBottom: -25, width: `70%` }}
            />
          }
        />
        <Block
          download
          link='/Шаблон презентаций_RUS.pptx'
          style={{ marginTop: 120 }}
          title='Шаблон презентации'
          content={
            <Templ
              style={{ marginLeft: -15, marginBottom: -25, width: `70%` }}
            />
          }
        />
        <Block
          download
          link='/Конструктор_презентаций.pdfx'
          style={{ marginTop: 120 }}
          title='Конструктор презентации'
          content={
            <Const
              style={{ marginLeft: -15, marginBottom: -25, width: `70%` }}
            />
          }
        />
        <Block
          link='https://www.youtube.com/user/SiburHolding/featured'
          style={{ marginTop: 120 }}
          title='Официальный канал СИБУРа на YouTube'
          content={
            <img
              src={chan.src}
              style={{ marginLeft: -15, marginBottom: -25, width: `70%` }}
            />
          }
        />
        <BlockTitle title='Социальные сети' style={{ marginTop: 160 }} />
        <Socials />
      </Section>
      <PageToggle
        prevLink={Routes.Communications}
        prevTitle='Коммуникации'
        nextLink={Routes.Trainer}
        nextTitle='Тренажер'
      />
    </>
  )
}
