import styles from './progress.module.scss'

interface Props {
  questionNumber: number
}

export const Progress = ({ questionNumber }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.progress}>
        <span
          className={styles.progressLine}
          style={{ width: `${questionNumber * 5}%` }}
        />
      </div>
      <p className={styles.text}>{questionNumber}/20</p>
    </div>
  )
}
