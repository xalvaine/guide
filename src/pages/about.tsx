import type { NextPage } from 'next'
import { Header } from 'entities/header/ui'
import { Section } from 'entities/section/ui'
import { BlockTitle } from 'entities/block-title/ui'
import { Paragraph } from 'shared/ui/paragraph'
import ph from './assets/fc72898c 1.png'
import { ScrollToTop } from 'entities/scroll-to-top'

const About: NextPage = () => {
  return (
    <>
      <Header title='Новый бренд сибура' />
      <Section title='Введение'>
        <BlockTitle style={{ marginTop: 120 }} title='О чем этот гайд' />
        <Paragraph>
          <b>Брендгайд СИБУРа</b> — это набор правил и советов, которые помогут
          оформлять любые материалы компании в едином стиле. Здесь вы найдете
          все необходимое: от миссии и ценностей бренда до цветовой палитры и
          набора иконок.
          <br />
          <br />
          Обращайтесь к брендгайду, когда приступаете к дизайну материалов. Гайд
          поможет уточнить неоднозначные моменты и проверить готовый материал.
        </Paragraph>
        <BlockTitle
          style={{ marginTop: 164 }}
          title='Как пользоваться гайдом'
        />
        <Paragraph>
          Если вы видите этот гайд впервые, рекомендуем ознакомиться с ним
          целиком. Это поможет вам уловить стиль и разобраться в содержании.
          <br />
          <br />
          При работе с дизайном важно сверяться с гайдом. Лучше выбрать готовое
          решение, которое представлено здесь. Так получится сохранить стиль{' '}
          <br />и не тратить время на лишние правки.
          <br />
          <br />
          Когда встречается новая задача и ни одно готовое решение не подходит,
          стоит разработать новое. Но при этом обязательно использовать общие
          принципы и подходящие элементы гайдлайна. Это поможет даже кардинально
          новому формату стать частью единого стиля.
          <br />
          <br />
          Если вы сомневаетесь, как использовать лого, цвет или любой другой
          элемент фирменного стиля — сверьтесь с гайдом. Это сэкономит ваше
          время и силы, а результат работы сделает безупречным.
        </Paragraph>
      </Section>
      <Section
        title={
          <>
            Философия
            <br />
            СИБУРа
          </>
        }
      >
        <div
          style={{
            paddingTop: 90,
            display: `flex`,
            alignItems: `start`,
          }}
        >
          <Paragraph style={{ width: 944 }}>
            В жизни каждого из нас происходит множество перемен. Одни <br />
            двигают нас вперед, другие – отбрасывают на несколько шагов назад.
            Но объединяет их одно – незнакомые ранее задачи требуют <br />
            гибкости в поиске решений и позволяют учиться новому и расти.
            <br />
            <br />
            Стремление меняться заложено в культуре нашей компании. Для СИБУРа
            перемены – это прежде всего новые возможности. Принимая их, мы
            обновляем бренд, обновляем себя и свое видение мира.
            <br />
            <br />
            <b>СИБУР</b> – это надежный партнер, который дает возможность <br />
            развиваться и улучшать качество жизни. Мы создаем рабочие <br />
            места в смежных областях, поддерживаем наших сотрудников, <br />
            строим взаимовыгодное сотрудничество с клиентами и партнерами,
            думаем о конечном потребителе и непрерывно совершенствуемся.
            Стремление к росту, партнерство и устойчивое развитие – не пустой{' '}
            <br />
            звук для нас. Об этом наши ценности. Об этом наш обновленный бренд.
            <br />
            <br />
            Те идеи, которые заложены в новой концепции бренда, проверены
            временем и наглядно демонстрируют то, во что мы верим. Как мы <br />
            шли к новому бренду и какие идеи отразили в нем, вы узнаете здесь.
            <br />
            <br />
            Читайте, узнавайте и меняйтесь вместе с нами.
            <br />
            <br />
            <br />
            <b>
              Генеральный директор, <br />
              Председатель правления ООО «СИБУР» <br />
              Михаил Карисалов
            </b>
          </Paragraph>
          <img src={ph.src} style={{ marginLeft: 80 }} />
        </div>
      </Section>
      <ScrollToTop />
    </>
  )
}

export default About
