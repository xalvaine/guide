import { ReactNode } from 'react'

export type Variant = {
  isCorrect?: boolean
  content: ReactNode
  description: ReactNode
}

export type Questions = {
  question: ReactNode
  variants: Variant[]
}[]
