import { useRef } from 'react'
import {
  Button,
  Typography,
  Input,
  IconButton
} from '@material-tailwind/react'
import {
  ArrowRightOnRectangleIcon,
  AtSymbolIcon,
  EyeIcon,
  ShieldExclamationIcon
} from '@heroicons/react/24/outline'

import { useNavigate } from 'react-router-dom'

export function SignIn() {
  const inputPass = useRef(null)
  const navigate = useNavigate()
  // function showPass() {
  //   // https://horadecodar.com.br/como-fazer-input-de-password-com-olho-de-mostrar-senha/
  // }

  function onSubmit(e: any) {
    e.preventDefault()
    navigate('/agent')
  }

  return (
    <>
      <Typography variant='h1' color='blue-gray'>
        Bem vindo<strong className='text-pontua-orange-500'>.</strong>
      </Typography>
      <Typography color='gray' className='mt-1 font-normal'>
        Informe as suas credenciais de acesso ao portal
      </Typography>
      <form
        onSubmit={onSubmit}
        className='mt-8 mb-2 max-w-screen-lg'>
        <div className='mb-4 flex flex-col gap-6'>
          <Input
            size='lg'
            type='text'
            required
            label='Usuário/Email'
            className='text-pontua-primary font-bold'
            icon={<AtSymbolIcon />}
          />
          <Input
            type='password'
            required
            size='lg'
            label='Senha'
            ref={inputPass}
            icon={
              <IconButton className='bg-transparent bottom-2 right-2 opacity-50 hover:shadow-none'>
                <EyeIcon className='text-pontua-primary h-6 w-6' />
              </IconButton>
            }
          />
        </div>
        <Button
          className='mt-6 bg-pontua-primary'
          size='lg'
          type='submit'
          fullWidth>
          entrar <ArrowRightOnRectangleIcon className='w-6 h-6 inline' />
        </Button>
        <Button variant="text" onClick={() => navigate('recovery')} className='text-pontua-orange-500 text-end float-right mt-4'>
          <ShieldExclamationIcon className='w-5 h-5 inline' />
          Esqueceu a senha?
        </Button>
      </form>
    </>
  )
}
