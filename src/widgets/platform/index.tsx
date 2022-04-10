import { Header } from 'entities/header/ui'
import { Section } from 'entities/section/ui'
import styles from './platform.module.scss'
import { BigText } from 'widgets/platform/ui/big-text'
import vision from './assets/vision.png'
import mission from './assets/mission.png'
import values from './assets/values.png'
import values2 from './assets/values2.png'
import positioning from './assets/positioning.png'
import { Container } from 'shared/ui/container'
import Prods from './assets/prods.svg'
import { PageToggle } from 'shared/ui/page-toggle'
import { Routes } from 'shared/config'
import { useEffect, useState } from 'react'
import { useIsMobile } from 'shared/lib'
import { BlockTitle } from 'entities/block-title/ui'
import { Paragraph } from 'shared/ui/paragraph'
import whoweare_1_m from './assets/whoweare_1_m.jpg'
import Whoweare_2_m from './assets/whoweare_2_m.svg'
import values_m from './assets/values_m.jpg'

export const Platform = () => {
  const [matches, setMatches] = useState<boolean>()

  useEffect(() => {
    setMatches(window?.matchMedia(`(min-width: 1700px)`).matches)
  }, [])

  const { isMobile } = useIsMobile()

  return (
    <>
      <Header title='Платформа бренда' />
      <Section title={isMobile ? 'Платформа бренда' : 'Кто мы'}>
        {isMobile ? (
          <>
            <BlockTitle title='Кто мы' style={{ marginTop: 40 }} />
            <Paragraph>
              <b>СИБУР</b> — это крупнейшая интегрированная нефтегазохимическая
              компания России <br />и одна из наиболее динамично развивающихся
              компаний глобальной нефтегазохимии.
            </Paragraph>
            <img
              src={whoweare_1_m.src}
              style={{
                marginTop: 12,
                width: `100%`,
              }}
            />
            <Whoweare_2_m style={{ marginTop: 28, marginLeft: -2 }} />
          </>
        ) : (
          <div className={styles.i1} />
        )}
      </Section>
      <Section noPadding title='Видение'>
        <BigText
          style={{
            marginTop: isMobile ? 0 : 95,
            marginBottom: isMobile ? 0 : 55,
          }}
        >
          Раскрываем потенциал друг друга, чтобы делать мир лучше
        </BigText>
        <img src={vision.src} alt='' className={styles.image} />
      </Section>
      <Section noPadding title='Миссия'>
        <BigText
          style={{
            marginTop: isMobile ? 0 : 95,
            marginBottom: isMobile ? 0 : 55,
          }}
        >
          Вместе создаем лучшее
          <br />
          будущее для людей и планеты
        </BigText>
        <img src={mission.src} alt='' className={styles.image} />
      </Section>
      <Section noPadding title='Ценности'>
        <img
          src={isMobile ? values_m.src : values.src}
          alt=''
          className={styles.image}
          style={{ marginTop: isMobile ? 25 : 120 }}
        />
        <img
          src={values2.src}
          alt=''
          className={styles.image}
          style={{ marginTop: isMobile ? -5 : 100 }}
        />
      </Section>
      <Section
        noPadding
        title={
          <>
            Позициони
            {matches && (
              <>
                -<br />
              </>
            )}
            рование
          </>
        }
      >
        <BigText
          style={{
            marginTop: isMobile ? 0 : 95,
            marginBottom: isMobile ? 0 : 55,
          }}
        >
          Мы объединяем выдающихся специалистов для создания <br />
          умных решений
        </BigText>
        <img src={positioning.src} alt='' className={styles.image} />
      </Section>
      <Section noPadding title='Суть бренда'>
        <div className={styles.i2} />
      </Section>
      <Section noPadding title='Цель'>
        <BigText
          style={{
            marginTop: isMobile ? 0 : 95,
            marginBottom: isMobile ? 0 : 55,
          }}
        >
          Создаем материалы для жизни. Предлагаем передовые решения для разных
          отраслей
        </BigText>
        <div className={styles.i3} />
      </Section>
      <Section noPadding title='Продукты'>
        <BigText
          style={{
            marginTop: isMobile ? 0 : 95,
            marginBottom: isMobile ? 0 : 55,
          }}
        >
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
