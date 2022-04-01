import { NextPage } from 'next'
import { Header } from 'entities/header/ui'
import { Container } from 'shared/ui/container'
import { BlockTitle } from 'entities/block-title/ui'
import { Paragraph } from 'shared/ui/paragraph'
import Cont from './assets/cont.svg'
import styles from './identity-contacts.module.scss'
import { PageToggle } from 'shared/ui/page-toggle'
import { Routes } from 'shared/config'

interface Props {
  email: string
  name: string
}

const Contact = ({ email, name }: Props) => (
  <div className={styles.contact}>
    <Cont />
    <div className={styles.data}>
      <p className={styles.email}>{email}</p>
      <p className={styles.name}>{name}</p>
    </div>
  </div>
)

const contacts: Props[] = [
  { email: `rusanovaayu@sibur.ru`, name: `Русанова Анна` },
  { email: `ogorodnikovaia@bsc.sibur.ru`, name: `Огородникова Инга` },
]

export const IdentityContacts: NextPage = () => {
  return (
    <>
      <Header title='Контакты' />
      <Container style={{ marginTop: 142 }}>
        <BlockTitle title='Команда брендинга' />
        <div className={styles.wrapper}>
          <Paragraph style={{ width: 779 }}>
            Применять обновленный бренд непросто. <br />
            Но у вас есть поддержка. Команда брендинга <br />
            готова проконсультировать и ответить на все вопросы.
          </Paragraph>
          <div className={styles.contacts}>
            {contacts.map(({ email, name }) => (
              <Contact key={email} email={email} name={name} />
            ))}
          </div>
        </div>
      </Container>
      <PageToggle
        prevLink={Routes.Trainer}
        prevTitle='Тренажер'
        nextLink={Routes.About}
        nextTitle='Новый бренд СИБУРа'
      />
    </>
  )
}
