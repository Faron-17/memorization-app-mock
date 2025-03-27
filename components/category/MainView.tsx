import React from 'react'
import { Plus, Pencil, ListTree } from 'lucide-react'
import Link from 'next/link';

export default async function MainView({id}: {id: string}) {

  return (
    <main className="py-6 px-12 h-full flex flex-col">
      <div className="w-full flex justify-between">
        <div className='flex space-x-4'>
          <Link href={`./${id}/study-now`} className='cursor-pointer flex items-center justify-center hover:bg-slate-100 px-5 py-2.5 rounded-lg'>
            <Pencil width={16} height={16}/>
            <span className='ml-2 text-sm font-medium'>Study Now</span>
          </Link>
          <Link href={`./${id}/browse`} className='cursor-pointer flex items-center justify-center hover:bg-slate-100 px-5 py-2.5 rounded-lg'>
            <ListTree width={16} height={16}/>
            <span className='ml-2 text-sm font-medium'>Browse</span>
          </Link>
        </div>
        <Link href={`./${id}/create`}className='cursor-pointer flex items-center justify-center hover:bg-slate-100 px-5 py-2.5 rounded-lg'>
          <Plus width={16} height={16}/>
          <span className='ml-2 text-sm font-medium'>Create New Card</span>
        </Link>
      </div>
  </main>
  )
}
