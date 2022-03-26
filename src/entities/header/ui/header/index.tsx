import Head from 'next/head'

import { Routes } from 'shared/config'

import Logo from './assets/logo.svg'
import Burger from './assets/burger.svg'
import { Link } from '../link'

import styles from './header.module.scss'
import { Dropdown } from 'entities/header/ui/dropdown'

interface Props {
  title: string
}

export const Header = ({ title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.content}>
          <div className={styles.headerTop}>
            <div className={styles.logoAndBurger}>
              <Logo />
              <Burger />
            </div>
            <div className={styles.links}>
              <Link className={styles.link} href={Routes.About}>
                О документе
              </Link>
              <Link className={styles.link} href={Routes.Communications}>
                Коммуникации
              </Link>
              <Link className={styles.link} href={Routes.Platform}>
                Платформа бренда
              </Link>
              <Link className={styles.link} href={Routes.Library}>
                Библиотека
              </Link>
              <Dropdown />
              <Link className={styles.link} href={Routes.Trainer}>
                Тренажер
              </Link>
              <Link className={styles.link} href={Routes.Contacts}>
                Контакты
              </Link>
            </div>
          </div>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </header>
    </>
  )
}
