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
  const [isResultsVisible, setIsResultsVisible] = useState(false)

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

  const handleGetResults = () => {
    setSelectedVariantIndex(undefined)
    setIsResultsVisible(true)
  }

  const handleRepeat = () => {
    setIsResultsVisible(false)
    setScore(0)
    setQuestionNumber(1)
    setSelectedVariantIndex(undefined)
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
          {isResultsVisible ? (
            <>
              <h3 className={styles.finishTitle}>Тест завершен</h3>
              <div
                className={classNames(
                  score >= 18 ? styles.success : styles.failure,
                  styles.results,
                )}
              >
                <h4 className={styles.resTitle}>Результат</h4>
                <p className={styles.resScore}>{score}/20</p>
                <p className={styles.resSubtitle}>правильных ответов</p>
                <p className={styles.resDesc}>
                  {score >= 18 ? (
                    <>
                      Поздравляем, вы успешно ответили на вопросы и хорошо
                      разбираетесь в деталях и элементах обновленного бренда
                      СИБУРа.
                      <br />
                      <br />
                      Чтобы не забывать правила оформления фирменного стиля, вы
                      можете регулярно проверять свои знания на тренажере и
                      повышать количество правильных ответов.
                    </>
                  ) : (
                    <>
                      Кажется, вам предстоит ближе познакомиться с обновленным
                      брендом СИБУРа и внимательнее прочитать все разделы
                      брендгайда.
                      <br />
                      <br />
                      Чтобы не забывать правила оформления фирменного стиля,{' '}
                      <br />
                      вы можете регулярно проверять свои знания на тренажере{' '}
                      <br />и повышать количество правильных ответов.
                    </>
                  )}
                </p>
              </div>
              <div className={styles.buttons}>
                <button className={styles.download}>Скачать результат</button>
                <button
                  className={styles.nextQuestion}
                  style={{ marginTop: 10 }}
                  onClick={handleRepeat}
                >
                  Пройти заново
                </button>
              </div>
            </>
          ) : (
            <>
              <Progress questionNumber={questionNumber} />
              <p className={styles.question}>
                {questions[questionNumber - 1].question}
              </p>
              <div className={styles.variants}>
                {questions[questionNumber - 1].variants.map(
                  (variant, index) => (
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
                  ),
                )}
              </div>
              {selectedVariantIndex !== undefined &&
                (questionNumber < 20 ? (
                  <button className={styles.nextQuestion} onClick={handleNext}>
                    Следующий вопрос
                  </button>
                ) : (
                  <button
                    className={styles.nextQuestion}
                    onClick={handleGetResults}
                  >
                    К результатам
                  </button>
                ))}
            </>
          )}
        </div>
      </Section>
      <PageToggle prevLink={Routes.Library} prevTitle='Библиотека' />
    </>
  )
}
