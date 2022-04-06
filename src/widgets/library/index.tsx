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
      <Container >
      <Block
        style={{ marginTop: 120 }}
        title='Фотобанк СИБУРа'
        link='xxx'
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
        <BlockTitle title='Видео ролик о СИБУРе' />
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
          Мы создали шаблоны, в которых учли все необходимые элементы бренда.
          Готовые решения помогут сэкономить время и соответствовать стилю
          СИБУРа. Ниже вы можете скачать необходимые форматы.
        </Paragraph>
        <Block
          style={{ marginTop: 120 }}
          title='Буклет о компании'
          content={
            <Booklet
              style={{ marginLeft: -15, marginBottom: -25, width: `70%` }}
            />
          }
        />
        <Block
          style={{ marginTop: 120 }}
          title='Отраслевые каталоги'
          content={<Catalogs style={{ marginLeft: -15, marginBottom: -25, width: `70%` }} />}
        />
        <Block
          style={{ marginTop: 120 }}
          title='Презентациия о компании'
          content={<Pres style={{ marginLeft: -15, marginBottom: -25, width: `70%` }} />}
        />
        <Block
          style={{ marginTop: 120 }}
          title='Шаблон презентации'
          content={<Templ style={{ marginLeft: -15, marginBottom: -25, width: `70%` }} />}
        />
        <Block
          style={{ marginTop: 120 }}
          title='Конструктор презентации'
          content={<Const style={{ marginLeft: -15, marginBottom: -25, width: `70%` }} />}
        />
        <Block
          link='xxx'
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
