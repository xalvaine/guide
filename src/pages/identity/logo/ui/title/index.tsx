import { ReactNode } from 'react'
import styles from 'pages/identity/logo/ui/title/title.module.scss'

interface Props {
  children: ReactNode
}

export const Title = ({ children }: Props) => {
  return <h4 className={styles.wrapper}>{children}</h4>
}
