import React from 'react'
import { anki } from '@/lib/placeholder-data'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from 'next/link'
import { Book, Edit3, Hourglass, Trash2 } from 'lucide-react'
import { AlertDialog, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import AlertPopup from '@/components/AlertPopup'

export default async function page({ params }: { params: Promise<{ id: string }> }) {
  const param = (await params).id;
  return (
    <div className='h-full flex flex-col justify-between mt-3'>
      <ul className='flex space-x-3'>
        <li className='flex justify-center items-center cursor-pointer bg-black text-white text-sm py-1 px-2 rounded-sm font-medium'><Hourglass width={14} height={14} className='mr-2' />sort by time</li>
        <li className='flex justify-center items-center cursor-pointer bg-black text-white text-sm py-1 px-2 rounded-sm font-medium'><Book width={14} height={14} className='mr-2' />sort by studied</li>
      </ul>
      <Tabs defaultValue={anki[0].title} className="grid grid-cols-3 h-full mt-3">
        <TabsList className="grid w-full grid-cols-1 col-span-1">
          {anki.map((item, index: number) => (
            <TabsTrigger key={index} value={item.title} className='justify-start pr-5 cursor-pointer'>
              <span className='overflow-hidden '>
                {item.title}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
        {anki.map((item, index: number) => (
          <TabsContent key={index} value={item.title} className='col-span-2 h-full'>
            <Card className='h-full'>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {item.answer}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
      <div className='flex w-full items-end justify-end'>
        <AlertDialog>
          <AlertDialogTrigger className='cursor-pointer flex items-center justify-center hover:bg-slate-100 px-5 py-2.5 rounded-lg w-3xs self-end mt-3'>
            <Trash2 />
            <span className='pl-3'>Delete</span>
          </AlertDialogTrigger>
          <AlertPopup type='DELETE' href={`/${param}/browse`} />
        </AlertDialog>
        <Link href={`/${param}/edit`} className='cursor-pointer flex items-center justify-center hover:bg-slate-100 px-5 py-2.5 rounded-lg w-3xs self-end mt-3'>
          <Edit3 />
          <span className='pl-3'>Edit</span>
        </Link>
      </div>
    </div>
  )
}