import styles from './plug.module.scss'
import Logo from './assets/logo.svg'
import Icon from './assets/icon.svg'

export const Plug = () => {
  return (
    <div className={styles.wrapper}>
      <Logo className={styles.logo} />
      <div className={styles.content}>
        <Icon className={styles.icon} />
        <p className={styles.text}>
          Откройте меня, пожалуйста, с десктопа. Мобильная версия сайта будет
          доступна
          <br />
          <span className={styles.highlight}>11 апреля.</span>
        </p>
      </div>
    </div>
  )
}
