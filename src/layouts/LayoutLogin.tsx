import React from 'react'
import {
  Card,
} from '@material-tailwind/react'
import logoMarvel from '../assets/marvel.jpeg'
import marvelLogin from '../assets/marvel_login.png'

type LayoutProps = {
  children: React.ReactNode
}

export function LayoutLogin({ children }: LayoutProps) {

  return (
    <main className='w-full h-screen bg-custom-primary'>
      <div className=' flex flex-col  mx-auto max-w-[1320px]'>
        <div>
          <img
            src={logoMarvel}
            className='w-[200px] p-4 hidden md:block'
            alt='Logomarca Pontua'
          />
        </div>
        <div className='flex justify-around flex-wrap items-center w-full'>
          <div className='w-5/12'>
            <img src={marvelLogin} className='hidden lg:block' alt='' />
          </div>
          <Card className='p-4 rounded-3xl w-[28rem] h-[28rem] m-4'>
            {children}
          </Card>
        </div>
      </div>
    </main>
  )
}
