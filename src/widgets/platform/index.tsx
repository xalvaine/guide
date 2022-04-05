import { Header } from 'entities/header/ui'
import { Section } from 'entities/section/ui'
import styles from './platform.module.scss'
import { BigText } from 'widgets/platform/ui/big-text'
import vision from './assets/vision.png'
import mission from './assets/mission.png'
import values from './assets/values.png'
import values2 from './assets/values2.png'
import positioning from './assets/positioning.png'
import {Container} from "shared/ui/container";
import Prods from './assets/prods.svg'
import {PageToggle} from "shared/ui/page-toggle";
import {Routes} from "shared/config";

export const Platform = () => {
  return (
    <>
      <Header title='Платформа бренда' />
      <Section noPadding title='Кто мы'>
        <div className={styles.i1} />
      </Section>
      <Section noPadding title='Кто мы'>
        <BigText style={{ marginTop: 95, marginBottom: 55 }}>
          Раскрываем потенциал друг друга, чтобы делать мир лучше
        </BigText>
        <img src={vision.src} alt='' className={styles.image} />
      </Section>
      <Section noPadding title='Миссия'>
        <BigText style={{ marginTop: 95, marginBottom: 55 }}>
          Вместе создаем лучшее
          <br />
          будущее для людей и планеты
        </BigText>
        <img src={mission.src} alt='' className={styles.image} />
      </Section>
      <Section noPadding title='Ценности'>
        <img
          src={values.src}
          alt=''
          className={styles.image}
          style={{ marginTop: 120 }}
        />
        <img
          src={values2.src}
          alt=''
          className={styles.image}
          style={{ marginTop: 100 }}
        />
      </Section>
      <Section
        noPadding
        title={
          <>
            Позициони-
            <br />
            рование
          </>
        }
      >
        <BigText style={{ marginTop: 95, marginBottom: 55 }}>
          Мы объединяем выдающихся специалистов для создания <br />
          умных решений
        </BigText>
        <img src={positioning.src} alt='' className={styles.image} />
      </Section>
      <Section noPadding title='Суть бренда'>
        <div className={styles.i2} />
      </Section>
      <Section noPadding title='Цель'>
        <BigText style={{ marginTop: 95, marginBottom: 55 }}>
          Создаем материалы для жизни. Предлагаем передовые решения <br />
          для разных отраслей
        </BigText>
        <div className={styles.i3} />
      </Section>
      <Section noPadding title='Продукты'>
        <BigText style={{ marginTop: 95, marginBottom: 55 }}>
          Создаем инновационные продукты, которые позволяют обществу двигаться
          вперед
        </BigText>
        <Container>
          <Prods />
          <p className={styles.text}>Среди задач центра «ПолиЛаб»:</p>
        </Container>
        <div className={styles.i4} />
      </Section>
      <PageToggle
        prevLink={Routes.About}
        prevTitle='Новый бренд СИБУРа'
        nextLink={Routes.IdentityLogo}
        nextTitle='Айдентика'
      />
    </>
  )
}
