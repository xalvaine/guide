import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Routes } from 'shared/config'

export const HomePage = () => {
  const { replace } = useRouter()

  useEffect(() => {
    replace(Routes.About).then()
  }, [])

  return <></>
}
