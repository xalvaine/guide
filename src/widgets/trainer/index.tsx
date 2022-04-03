import { Header } from 'entities/header/ui'
import { Section } from 'entities/section/ui'
import styles from './trainer.module.scss'
import { Progress } from 'widgets/trainer/ui/progress'
import { useCallback, useState } from 'react'
import { questions } from 'widgets/trainer/trainer.constants'
import { PageToggle } from 'shared/ui/page-toggle'
import { Routes } from 'shared/config'
import { Variant } from 'widgets/trainer/trainer.types'
import classNames from 'classnames'

export const Trainer = () => {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [score, setScore] = useState(0)
  const [selectedVariantIndex, setSelectedVariantIndex] = useState<number>()

  const getOnSelectVariant = useCallback(
    (variant: Variant, index: number) => {
      return () => {
        if (selectedVariantIndex !== undefined) {
          return
        }

        if (variant.isCorrect) {
          setScore((score) => score + 1)
        }

        setSelectedVariantIndex(index)

        // setQuestionNumber((questionNumber) => questionNumber + 1)
      }
    },
    [selectedVariantIndex],
  )

  const handleNext = () => {
    setSelectedVariantIndex(undefined)
    setQuestionNumber((questionNumber) => questionNumber + 1)
  }

  return (
    <>
      <Header title='Тренажёр' />
      <Section
        title={
          <p className={styles.title}>
            Мы разработали тренажер, чтобы помочь развить насмотренность и
            научиться умело использовать обновленный стиль СИБУРа. Отвечайте на
            20 вопросов, выбирая правильный вариант,
            <br />
            и не бойтесь ошибиться — к каждому ответу дается пояснение,
            <br />а сам тренажер можно пройти неограниченное количество раз.
          </p>
        }
      >
        <div className={styles.wrapper}>
          <Progress questionNumber={questionNumber} />
          <p className={styles.question}>
            {questions[questionNumber - 1].question}
          </p>
          <div className={styles.variants}>
            {questions[questionNumber - 1].variants.map((variant, index) => (
              <div key={index} className={styles.variantWrapper}>
                <div
                  className={classNames(
                    styles.variant,
                    index === selectedVariantIndex
                      ? variant.isCorrect
                        ? styles.correct
                        : styles.wrong
                      : undefined,
                  )}
                  onClick={getOnSelectVariant(variant, index)}
                >
                  {variant.content}
                </div>
                {index === selectedVariantIndex && (
                  <div className={styles.description}>
                    {variant.description}
                  </div>
                )}
              </div>
            ))}
          </div>
          <button className={styles.nextQuestion} onClick={handleNext}>
            Следующий вопрос
          </button>
        </div>
      </Section>
      <PageToggle prevLink={Routes.Library} prevTitle='Библиотека' />
    </>
  )
}
