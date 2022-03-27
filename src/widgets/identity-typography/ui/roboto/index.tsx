import Font from './assets/font.svg'
import Warn from './assets/warn.svg'
import styles from './roboto.module.scss'
import classNames from 'classnames'
import { Relative } from 'shared/ui/relative'
import {Download} from "shared/ui/download";

export const Roboto = () => {
  return (
    <Relative className={styles.wrapper}>
      <p className={styles.hello}>Здравствуйте, я Робото!</p>
      <div className={styles.content}>
        <Font className={styles.svg} />
        <div className={styles.examples}>
          <h6 className={classNames(styles.exTitle, styles.light)}>
            Roboto Light
          </h6>
          <p className={classNames(styles.light)}>
            Аа, Бб, Вв, Гг, Дд, Ее, Ёё, <br />
            Жж, Зз, Ии, Йй, Кк, Лл, Мм, <br />
            Нн, Оо, Пп, Рр, Сс, Тт, Уу, Фф, <br />
            Хх, Цц, Чч, Шш, Щщ, Ъъ, <br />
            Ыы, Ьь, Ээ, Юю, Яя
          </p>
          <h6 className={classNames(styles.exTitle)}>Roboto Regular</h6>
          <p className={classNames(styles.normal)}>
            Аа, Бб, Вв, Гг, Дд, Ее, Ёё, <br />
            Жж, Зз, Ии, Йй, Кк, Лл, Мм, <br />
            Нн, Оо, Пп, Рр, Сс, Тт, Уу, Фф, <br />
            Хх, Цц, Чч, Шш, Щщ, Ъъ, <br />
            Ыы, Ьь, Ээ, Юю, Яя
          </p>
          <h6 className={classNames(styles.exTitle, styles.bold)}>
            Roboto Bold
          </h6>
          <p className={classNames(styles.bold)}>
            Аа, Бб, Вв, Гг, Дд, Ее, Ёё, <br />
            Жж, Зз, Ии, Йй, Кк, Лл, Мм, <br />
            Нн, Оо, Пп, Рр, Сс, Тт, Уу, Фф, <br />
            Хх, Цц, Чч, Шш, Щщ, Ъъ, <br />
            Ыы, Ьь, Ээ, Юю, Яя
          </p>
          <Warn className={styles.warn} />
          <p className={styles.comment}>
            Если по техническим причинам невозможно использовать корпоративный
            шрифтиспользуйте вместо него системный шрифт Arial
          </p>
        </div>
      </div>
      <Download className={styles.download} />
    </Relative>
  )
}
