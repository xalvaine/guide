import { Header } from 'entities/header/ui'
import { Section } from 'entities/section/ui'
import { Variants } from 'widgets/identity-icons/ui/variants'
import { Paragraph } from 'shared/ui/paragraph'
import { PageToggle } from 'shared/ui/page-toggle'
import { Routes } from 'shared/config'
import { useIsMobile } from 'shared/lib'

export const IdentityIcons = () => {
  const { isMobile, rendered } = useIsMobile()

  if (!rendered) {
    return null
  }

  return (
    <>
      <Header title='Айдентика бренда' />
      <Section title='Иконки'>
        <Paragraph
          style={{
            width: isMobile ? undefined : 1130,
            marginTop: isMobile ? 40 : 120,
            marginBottom: isMobile ? undefined : 160,
          }}
        >
          Для оформления материалов вы можете использовать обновленный набор
          иконок. <br />
          Все иконки сделаны в айдентике бренда СИБУРа, что делает их частью
          общего посыла.
        </Paragraph>
      </Section>
      <Variants />
      <PageToggle
        prevLink={Routes.IdentityPhotoStyle}
        prevTitle='Фотостиль'
        nextLink={Routes.Communications}
        nextTitle='Коммуникации'
      />
    </>
  )
}
