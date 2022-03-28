import { Header } from 'entities/header/ui'
import { Section } from 'entities/section/ui'
import { Paragraph } from 'shared/ui/paragraph'
import Image from './assets/image.svg'
import { Sections } from 'widgets/identity-photo-style/ui/sections'
import { BlockTitle } from 'entities/block-title/ui'
import { WrongUsages } from 'widgets/identity-photo-style/ui/wrong-usages'

export const IdentityPhotoStyle = () => {
  return (
    <>
      <Header title='Айдентика бренда' />
      <Section title='Фотостиль'>
        <Paragraph style={{ width: 1175, marginTop: 120 }}>
          Фотостиль людей в используемых нами фотоматериалах подчеркивают
          ориентированность бренда на сотрудничество, представляя в
          бренд-коммуникациях работников СИБУРa экспертами своего дела,
          специалистами высочайшей квалификации и всячески подчеркивая роль
          партнеров в деятельности компании.
        </Paragraph>
        <Image />
        <Sections />
        <BlockTitle
          title='Неправильное использование'
          style={{ marginTop: 160 }}
        />
        <WrongUsages />
      </Section>
    </>
  )
}
