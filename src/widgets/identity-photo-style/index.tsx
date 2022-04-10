import { Header } from 'entities/header/ui'
import { Section } from 'entities/section/ui'
import { Paragraph } from 'shared/ui/paragraph'
import Image from './assets/image.svg'
import { Sections } from 'widgets/identity-photo-style/ui/sections'
import { BlockTitle } from 'entities/block-title/ui'
import { WrongUsages } from 'widgets/identity-photo-style/ui/wrong-usages'
import { PageToggle } from 'shared/ui/page-toggle'
import { Routes } from 'shared/config'
import { useIsMobile } from 'shared/lib'

export const IdentityPhotoStyle = () => {
  const { isMobile } = useIsMobile()

  return (
    <>
      <Header title='Айдентика бренда' />
      <Section title='Фотостиль'>
        <Paragraph
          style={{
            width: isMobile ? undefined : 1175,
            marginTop: isMobile ? 40 : 120,
            marginBottom: isMobile ? 12 : undefined,
          }}
        >
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
          style={{ marginTop: isMobile ? 45 : 160 }}
        />
        <WrongUsages />
      </Section>
      <PageToggle
        prevLink={Routes.IdentityTypography}
        prevTitle='Типографика'
        nextLink={Routes.IdentityIcons}
        nextTitle='Иконки'
      />
    </>
  )
}
