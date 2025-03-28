
import ConfettiComponent from '@/components/ConfettiComponent'
import { Skeleton } from '@/components/ui/skeleton'
import { Undo2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Suspense } from 'react'

const page = () => {

  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <Suspense fallback={<Skeleton className='w-full h-full'/>}>
        <ConfettiComponent />
      </Suspense>
      <p className='text-3xl font-bold'>You Done!</p>
      <Link href='/' className='flex justify-center items-center mt-5 hover:bg-slate-100 px-5 py-2.5 rounded-md'>
        <Undo2 />
        <span className='ml-3'>Back to Home</span>
      </Link>
    </div>
  )
}

export default page