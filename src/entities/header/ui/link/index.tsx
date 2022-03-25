import { ReactNode } from 'react'
import NextLink from 'next/link'
import { Routes } from 'shared/config'
import styles from './link.module.scss'
import { useRouter } from 'next/router'
import classNames from 'classnames'

interface Props {
  href: Routes
  className?: string
  children: ReactNode
}

export const Link = ({ href, children, className }: Props) => {
  const { pathname } = useRouter()
  return (
    <NextLink href={href}>
      <a
        className={classNames(
          pathname === href ? styles.linkActive : styles.link,
          className,
        )}
      >
        {children}
      </a>
    </NextLink>
  )
}
