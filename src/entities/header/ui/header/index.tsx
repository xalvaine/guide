import Head from 'next/head'

import { Routes } from 'shared/config'

import Burger from './assets/burger.svg'
import Search from './assets/search.svg'
import Logo from './assets/logo.svg'
import { Link } from '../link'

import styles from './header.module.scss'
import { Dropdown } from 'entities/header/ui/dropdown'
import classNames from 'classnames'
import { useState } from 'react'

interface Props {
  title: string
}

export const Header = ({ title }: Props) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.content}>
          <div className={styles.headerTop}>
            <Burger
              className={classNames(
                styles.burger,
                visible && styles.burgerActive,
              )}
              onClick={() => setVisible(!visible)}
            />
            <Search className={styles.search} />
            <div className={styles.logoAndBurger}>
              <Logo />
            </div>
            <div
              className={classNames(
                styles.links,
                !visible && styles.hiddenOnMobile,
              )}
            >
              <Link className={styles.link} href={Routes.About}>
                Новый бренд сибура
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
