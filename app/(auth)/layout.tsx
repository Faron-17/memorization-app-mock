import { ReactNode } from 'react'

const layout = async ({ children } : { children: ReactNode }) => {
  return (
    <>
      <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-semibold'>Memorization App</h1>
        <div className='flex justify-center items-center mt-5'>
          {children}
        </div>
      </div>
    </>
  )
}

export default layout