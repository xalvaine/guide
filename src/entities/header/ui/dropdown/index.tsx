import { useState } from 'react'
import NextLink from 'next/link'
import { Routes } from 'shared/config'
import styles from './dropdown.module.scss'
import classNames from 'classnames'
import Arrow from './assets/ri-arrow-down-s-line.svg'
import { useRouter } from 'next/router'

const LINKS = [
  { text: `Логотип`, href: Routes.IdentityLogo },
  { text: `Цветовая палитра`, href: Routes.IdentityPalette },
  { text: `Паттерны`, href: Routes.IdentityPatterns },
  { text: `Модульная сетка`, href: Routes.IdentityGrid },
  { text: `Типографика`, href: Routes.IdentityTypography },
  { text: `Фотостиль`, href: Routes.IdentityPhotoStyle },
  { text: `Иконки`, href: Routes.IdentityIcons },
]

interface DropdownLinkProps {
  text: string
  href: string
}

const DropdownLink = ({ text, href }: DropdownLinkProps) => {
  const { pathname } = useRouter()
  return (
    <NextLink href={href}>
      <a
        className={classNames(
          pathname === href ? styles.dropdownLinkSelected : styles.dropdownLink,
        )}
      >
        {text}
      </a>
    </NextLink>
  )
}

export const Dropdown = () => {
  const { pathname } = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className={styles.wrapper}>
      <div onClick={() => setIsVisible(!isVisible)}>
        <a
          className={classNames(
            isVisible || pathname.includes(Routes.Identity)
              ? styles.linkActive
              : styles.link,
          )}
        >
          Айдентика
          <Arrow className={styles.icon} />
        </a>
      </div>
      <div className={isVisible ? styles.dropdown : styles.dropdownHidden}>
        {LINKS.map((props) => (
          <DropdownLink key={props.href} {...props} />
        ))}
      </div>
    </div>
  )
}
