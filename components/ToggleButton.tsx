import React from 'react'

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

const ToggleButton = () => {
  return (
    <div className="w-full h-full flex justify-between">
      <div className='flex space-x-4'>
        <Button variant="outline" className='cursor-pointer'>
          Study Now
        </Button>
        <Button variant="outline" className='cursor-pointer'>
          Browse
        </Button>
      </div>
      <Button variant="ghost" className='cursor-pointer'>
        <Plus />
        Create New Card
      </Button>
    </div>
  )
}

export default ToggleButton