'use client'

import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from '@/lib/utils'

import { FaQuestion } from "react-icons/fa";

const StudyNow = () => {
  const [isHidden, setIsHidden] = useState(true)
  const [isHiddenAnswer, setIsHiddenAnswer] = useState(true)
  return (
    <div className='pt-10 flex justify-center items-center h-full'>
      <Button onClick={() => setIsHidden(false)} className={cn(isHidden ? 'block' : 'hidden')}>
        Start
      </Button>
      <div className={cn(isHidden ? 'hidden' : 'flex flex-col', 'justify-between h-full w-full')}>
        <Card className="w-full h-full">
          <CardHeader>
            <CardTitle className='flex'>
              <FaQuestion />
              <p className='pl-4'>Create project</p> 
            </CardTitle>
          </CardHeader>
          <CardContent className={cn(isHiddenAnswer ? 'hidden' : 'block')}>
            <p>Hi</p>
          </CardContent>
        </Card>
        <div className='flex justify-between mt-12'>
          <Button className='cursor-pointer'>
            Back
          </Button>
          <Button onClick={() => setIsHiddenAnswer(!isHiddenAnswer)} className='cursor-pointer'>
            {isHiddenAnswer ? 'Show Answer' : 'Hide Answer'}
          </Button>
          <Button className='cursor-pointer'>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default StudyNow