import React, { Suspense } from 'react'

import Header from "@/components/Header";
import MainView from '@/components/contents/MainView';

function page() {
  // fetch
  return (
    <>
      <Header />
      <Suspense>
        <MainView />
      </Suspense>
    </>
  )
}

export default page