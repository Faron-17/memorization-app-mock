'use client'

import React, { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from '@/lib/utils'
import { FaQuestion } from "react-icons/fa";

import { anki } from '@/lib/placeholder-data'
import { Lightbulb } from 'lucide-react'
import { useRouter } from 'next/navigation'

const StudyNow = () => {
  const [isHidden, setIsHidden] = useState(true)
  const [isHiddenAnswer, setIsHiddenAnswer] = useState(true)
  const [order, setOrder] = useState(0)
  const router = useRouter()

  useEffect(() => {
    setIsHiddenAnswer(true)
  }, [order]);

  const handleAnki = (e: React.SyntheticEvent) => {
    if(order === anki.length - 1) {
      e.preventDefault()
      // update
      // 最後のankiのデータ更新
      router.push('./done')
    } else {
      setOrder(order + 1)
    }
  }

  return (
    <div className='pt-6 flex justify-center items-center h-full'>
      <Button onClick={() => setIsHidden(false)} className={cn(isHidden ? 'block' : 'hidden', 'cursor-pointer')}>
        Start
      </Button>
      <div className={cn(isHidden ? 'hidden' : 'flex flex-col', 'justify-between h-full w-full')}>
        <Card className="w-full h-full">
          <CardHeader>
            <CardTitle className='flex'>
              <FaQuestion />
              <p className='pl-4'>{anki[order].title}</p> 
            </CardTitle>
          </CardHeader>
          <CardContent className={cn(isHiddenAnswer ? 'hidden' : 'flex', 'px-5')}>
            <Lightbulb />
            <p className='pl-3'>{anki[order].answer}</p>
          </CardContent>
        </Card>
        <div className='flex justify-between mt-12'>
          <Button className='cursor-pointer' disabled={order === 0}  onClick={() => setOrder(order-1)}>
            Back
          </Button>
          <Button onClick={() => setIsHiddenAnswer(!isHiddenAnswer)} className='cursor-pointer'>
            {isHiddenAnswer ? 'Show Answer' : 'Hide Answer'}
          </Button>
          <div className="flex space-x-3">
            <Button className='cursor-pointer' onClick={(e) => handleAnki(e)}>
              Show this tomorrow
            </Button>
            <Button className='cursor-pointer' onClick={(e) => handleAnki(e)}>
              Remembered
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudyNow