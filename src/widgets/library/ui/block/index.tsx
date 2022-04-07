import { CSSProperties, ReactNode } from 'react'
import { Relative } from 'shared/ui/relative'
import { Download } from 'shared/ui/download'
import { Container } from 'shared/ui/container'
import { BlockTitle } from 'entities/block-title/ui'

interface Props {
  content: ReactNode
  link?: string
  title: ReactNode
  style?: CSSProperties
  download?: boolean
}

export const Block = ({ content, link, title, style, download }: Props) => {
  return (
    <div style={style}>
      <BlockTitle title={title} />
      <Relative>
        <div>{content}</div>
        <Download
          download={download}
          link={link}
          target={link ? `_blank` : undefined}
          text={!download ? `Перейти` : undefined}
          style={{ right: 0, bottom: 0 }}
        />
      </Relative>
    </div>
  )
}
