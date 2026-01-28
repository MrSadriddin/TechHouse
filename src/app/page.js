import React, { Suspense } from 'react'
import HomeClient from '@/components/home/HomeClient'
import Loading from '@/components/common/Loading'

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <HomeClient />
    </Suspense>
  )
}