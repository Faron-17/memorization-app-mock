'use client'

import React from 'react'

import ToggleButton from "@/components/ToggleButton";
import ToggleContent from '@/components/ToggleContent';

const MainView = () => {
  return (
    <main className="py-6 px-12 h-full">
      <ToggleButton />
      <ToggleContent
        // study now
        // browse
        // create new
      />
  </main>
  )
}

export default MainView