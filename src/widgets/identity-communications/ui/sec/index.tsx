import { BlockTitle } from 'entities/block-title/ui'
import { ComponentProps, ReactNode } from 'react'
import { List } from 'widgets/identity-communications/ui/list'
import styles from './sec.module.scss'

interface Props {
  title: ReactNode
  supTitle: ReactNode
  subTitle: ReactNode
  items: ComponentProps<typeof List>['items']
}

export const Sec = ({ title, items, supTitle, subTitle }: Props) => {
  return (
    <>
      <h4 className={styles.supTitle}>{supTitle}</h4>
      <BlockTitle title={title} />
      <h5 className={styles.subTitle}>{subTitle}</h5>
      <List items={items} />
    </>
  )
}
