import { CSSProperties, ReactNode } from 'react'
import { Relative } from 'shared/ui/relative'
import { Download } from 'shared/ui/download'
import { Container } from 'shared/ui/container'
import { BlockTitle } from 'entities/block-title/ui'
import { useIsMobile } from 'shared/lib'

interface Props {
  content: ReactNode
  link?: string
  title: ReactNode
  style?: CSSProperties
  download?: boolean
}

export const Block = ({ content, link, title, style, download }: Props) => {
  const { isMobile } = useIsMobile()

  return (
    <div style={style}>
      <BlockTitle title={title} />
      <Relative>
        <div>{content}</div>
        <div
          style={
            isMobile ? { display: `flex`, justifyContent: `center` } : undefined
          }
        >
          <Download
            download={download}
            link={link}
            target={link ? `_blank` : undefined}
            text={!download ? `Перейти` : undefined}
            style={{
              right: 0,
              bottom: 0,
              position: isMobile ? `static` : undefined,
            }}
          />
        </div>
      </Relative>
    </div>
  )
}
