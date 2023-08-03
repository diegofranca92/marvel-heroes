import React, { useRef, useState } from 'react'
import {
  Card,
  Button,
  Typography,
  Input,
  IconButton
} from '@material-tailwind/react'
import logoPontuaWhite from '../assets/logo_pontua_white.svg'
import building from '../assets/bro.png'

type LayoutProps = {
  children: React.ReactNode
}

export function LayoutLogin({ children }: LayoutProps) {

  return (
    <main className='w-full h-screen flex flex-col items-center bg-pontua-primary justify-center'>
      <img
        src={logoPontuaWhite}
        className='w-32 absolute left-4 top-4'
        alt='Logomarca Pontua'
      />
      <div className='flex justify-around flex-wrap w-full'>

        <img src={building} className='w-5/12' alt='' />
        <Card className='p-4 rounded-3xl w-[28rem] h-[28rem]'>
          {children}
        </Card>
      </div>
    </main>
  )
}
