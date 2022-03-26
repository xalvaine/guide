import Button from './assets/button.svg'
import styles from './scroll-to-top.module.scss'
import { useEffect, useState } from 'react'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 600)
  }

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener(`scroll`, toggleVisibility)

    return () => window.removeEventListener(`scroll`, toggleVisibility)
  }, [])

  return (
    <button
      onClick={handleClick}
      className={isVisible ? styles.button : styles.buttonHidden}
    >
      <Button />
    </button>
  )
}
