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
  ShieldExclamationIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline'

import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { useForm } from 'react-hook-form'

export function SignIn() {
  // const inputPass = useRef(null)
  const navigate = useNavigate()
  const { signIn } = useAuth()

  const { register, handleSubmit, formState: { errors } } = useForm<User.LoginFormData>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  // function showPass() {
  //   // https://horadecodar.com.br/como-fazer-input-de-password-com-olho-de-mostrar-senha/
  // }

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  async function onSubmit(payload: User.LoginFormData) {

    await signIn(payload)
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
        onSubmit={handleSubmit(onSubmit)}
        className='mt-8 mb-2 max-w-screen-lg'>
        <div className='mb-4 flex flex-col gap-6'>
          <div>
            <Input
              size='lg'
              type='email'
              {...register('email', { required: "É necessário o email para fazer login" })}
              label='Email'
              className='text-pontua-primary font-bold'
              icon={<AtSymbolIcon />}
            />
            {errors.email && (
              <Typography
                variant="small"
                color="red"
                className="flex items-center mt-2 font-normal"
              ><ExclamationCircleIcon className='h-6 mr-1' /> {errors.email?.message}</Typography>
            )}

          </div>
          <div>
            <Input
              type='password'
              size='lg'
              label='Senha'
              {...register('password', { required: "Coloque sua senha" })}
              icon={
                <IconButton className='bg-transparent bottom-2 right-2 opacity-50 hover:shadow-none'>
                  <EyeIcon className='text-pontua-primary h-6 w-6' />
                </IconButton>
              }
            />
            {errors.password && (
              <Typography
                variant="small"
                color="red"
                className="flex items-center mt-2 font-normal"
              ><ExclamationCircleIcon className='h-6 mr-1' /> {errors.password?.message}</Typography>
            )}
          </div>
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
