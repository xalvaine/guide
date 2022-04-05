import { ReactNode } from 'react'
import Var1 from './assets/var1.svg'
import Var2 from './assets/var2.svg'
import styles from './variants.module.scss'

interface VariantProps {
  text: ReactNode
  title: string
  pic: ReactNode
}

const Variant = ({ text, title, pic }: VariantProps) => {
  return (
    <div className={styles.variant}>
      <p className={styles.text}>{text}</p>
      <h5 className={styles.title}>{title}</h5>
      {pic}
    </div>
  )
}

export const Variants = () => {
  return (
    <div className={styles.wrapper}>
      <Variant
        text={
          <>
            <b>Вариант 1.</b> предпочтительно использовать, если необходимо
            особо подчеркнуть какое-либо важное слово или предложение. Для
            такого выделения всегда следует использовать жирное начертание и
            акцентный цвет.
          </>
        }
        title='ВАРИАНТ 1'
        pic={<Var1 />}
      />
      <Variant
        text={
          <>
            <b>Вариант 2.</b> подходит для случаев, когда акцентный цвет уже
            использован в компоновке или изображениях (для выделения важных
            фрагментов) или есть ограничение по использованию цветов.
          </>
        }
        title='ВАРИАНТ 2'
        pic={<Var2 />}
      />
    </div>
  )
}
