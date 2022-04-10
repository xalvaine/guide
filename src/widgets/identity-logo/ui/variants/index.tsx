import { CSSProperties } from 'react'
import Rus from './assets/rus.svg'
import Eng from './assets/eng.svg'
import Logos from './assets/logos.svg'
import styles from './variants.module.scss'
import { Download } from 'shared/ui/download'
import { useIsMobile } from 'shared/lib'

interface Props {
  style?: CSSProperties
}

export const Variants = ({ style }: Props) => {
  const { isMobile } = useIsMobile()
  return (
    <div style={style} className={styles.wrapper}>
      {isMobile ? (
        <Logos />
      ) : (
        <>
          <Rus style={{ marginBottom: 80 }} />
          <Eng />
        </>
      )}
      <Download className={styles.button} link='/logo.zip' download />
    </div>
  )
}
