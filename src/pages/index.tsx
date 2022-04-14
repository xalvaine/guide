import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Routes } from 'shared/config'

export default function Home () {
  const { replace } = useRouter()

  useEffect(() => {
    replace(Routes.About).then()
  }, [replace])

  return <></>
}
