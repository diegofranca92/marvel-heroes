import { useRef } from 'react'
import {
  Card,
  Button,
  Typography,
  Input,
  IconButton
} from '@material-tailwind/react'
import logoPontuaWhite from '../assets/logo_pontua_white.svg'
import building from '../assets/bro.png'
import {
  ArrowRightOnRectangleIcon,
  AtSymbolIcon,
  EyeIcon,
  ShieldExclamationIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export function SignIn() {
  const inputPass = useRef(null)

  // function showPass() {
  //   // https://horadecodar.com.br/como-fazer-input-de-password-com-olho-de-mostrar-senha/
  // }

  return (
    <main className='w-full h-screen flex flex-col items-center bg-pontua-primary justify-center'>
      <img
        src={logoPontuaWhite}
        className='w-32 absolute left-4 top-4'
        alt='Logomarca Pontua'
      />
      <div className='flex justify-around flex-wrap w-full'>
        <img src={building} className='w-5/12' alt='' />
        <Card className='p-4 rounded-3xl'>
          <Typography variant='h1' color='blue-gray'>
            Bem vindo<strong className='text-pontua-orange-500'>.</strong>
          </Typography>
          <Typography color='gray' className='mt-1 font-normal'>
            Informe as suas credenciais de acesso ao portal
          </Typography>

          <form
            onSubmit={() => {}}
            className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
            <div className='mb-4 flex flex-col gap-6'>
              <Input
                size='lg'
                type='text'
                required
                label='Usuário'
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
              Entrar <ArrowRightOnRectangleIcon className='w-6 h-6 inline' />
            </Button>
            <Link to='' className='text-pontua-orange-500 text-end float-right mt-4'>
              <ShieldExclamationIcon className='w-5 h-5 inline' />
              Esqueceu a senha?
            </Link>
          </form>
        </Card>
      </div>
    </main>
  )
}
