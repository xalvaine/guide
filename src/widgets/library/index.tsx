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
import { useIsMobile } from 'shared/lib'

export const Library = () => {
  const { isMobile, rendered } = useIsMobile()

  if (!rendered) {
    return null
  }

  return (
    <>
      <Header title='Библиотека' />
      <Container>
        <Block
          style={{ marginTop: isMobile ? 40 : 120 }}
          title='Фотобанк СИБУРа'
          link='http://sibur.photas.ru'
          content={
            <img
              style={{
                marginLeft: isMobile ? undefined : -15,
                marginBottom: isMobile ? 15 : -25,
                width: isMobile ? `100%` : `73%`,
              }}
              src={phbank.src}
              alt=''
            />
          }
        />
      </Container>
      <Container style={{ marginTop: isMobile ? 25 : 160 }}>
        <BlockTitle title='Видеоролик о СИБУРе' />
        <Video />
      </Container>
      <Section
        style={{ marginTop: isMobile ? 40 : 160 }}
        title={
          <>
            Материалы <br />о компании
          </>
        }
      >
        <Paragraph
          style={{
            width: isMobile ? undefined : 735,
            marginTop: isMobile ? 35 : 130,
          }}
        >
          Мы создали материалы о компании, в которых учли все необходимые
          элементы бренда. Готовые решения помогут сэкономить время и
          соответствовать стилю СИБУРа. Ниже вы можете скачать необходимые
          форматы.
        </Paragraph>
        <Block
          style={{ marginTop: isMobile ? 18 : 120 }}
          title='Буклет о компании'
          download
          link='/Буклет о СИБУРе.pdf'
          content={
            <Booklet
              style={{
                marginLeft: isMobile ? undefined : -15,
                marginBottom: isMobile ? 15 : -25,
                width: isMobile ? `100%` : `70%`,
              }}
            />
          }
        />
        <Block
          download
          style={{ marginTop: isMobile ? 40 : 120 }}
          link='/Отраслевые каталоги.zip'
          title='Отраслевые каталоги'
          content={
            <Catalogs
              style={{
                marginLeft: isMobile ? undefined : -15,
                marginBottom: isMobile ? 15 : -25,
                width: isMobile ? `100%` : `70%`,
              }}
            />
          }
        />
        <Block
          download
          link='/СЛАЙДЫ О КОМПАНИИ 2022.pptx'
          style={{ marginTop: isMobile ? 40 : 120 }}
          title='Презентация о компании'
          content={
            <Pres
              style={{
                marginLeft: isMobile ? undefined : -15,
                marginBottom: isMobile ? 15 : -25,
                width: isMobile ? `100%` : `70%`,
              }}
            />
          }
        />
        <Block
          download
          link='/Shablon prezentacij.pptx'
          style={{ marginTop: isMobile ? 40 : 120 }}
          title='Шаблон презентации'
          content={
            <Templ
              style={{
                marginLeft: isMobile ? undefined : -15,
                marginBottom: isMobile ? 15 : -25,
                width: isMobile ? `100%` : `70%`,
              }}
            />
          }
        />
        <Block
          download
          link='/Konstruktor prezentacij.pdf'
          style={{ marginTop: isMobile ? 40 : 120 }}
          title='Конструктор презентации'
          content={
            <Const
              style={{
                marginLeft: isMobile ? undefined : -15,
                marginBottom: isMobile ? 15 : -25,
                width: isMobile ? `100%` : `70%`,
              }}
            />
          }
        />
        <Block
          link='https://www.youtube.com/user/SiburHolding/featured'
          style={{ marginTop: isMobile ? 40 : 120 }}
          title='Официальный канал СИБУРа на YouTube'
          content={
            <img
              src={chan.src}
              style={{
                marginLeft: isMobile ? undefined : -15,
                marginBottom: isMobile ? 15 : -25,
                width: isMobile ? `100%` : `70%`,
              }}
            />
          }
        />
        <BlockTitle
          title='Социальные сети'
          style={{ marginTop: isMobile ? 40 : 160 }}
        />
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
