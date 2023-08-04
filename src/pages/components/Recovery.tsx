import { Input, Typography, Button } from '@material-tailwind/react'
import { AtSymbolIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'

export function Recovery() {

  const navigate = useNavigate()
  const [showMessage, setShowMessage] = useState(false)
  const [showRecovery, setShowRecovery] = useState(true)

  const { register, handleSubmit, formState: { errors } } = useForm<User.LoginFormData>({
    defaultValues: {
      email: ''
    }
  })

  async function onSubmit(payload: User.LoginFormData) {
    if(payload) {
      setShowRecovery(false)
      setShowMessage(true)
    }
  }

  return (
    <div className='mb-4 flex flex-col gap-6'>
      {showRecovery && (
        <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
          <Typography variant='h1' color='blue-gray'>
            Recuperar senha<strong className='text-pontua-orange-500'>.</strong>
          </Typography>
          <Typography color='gray' className='mt-1 font-normal'>
            Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um
            link com as instruções para você redefinir a sua senha
          </Typography>
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
          <Button
            className='mt-6 bg-pontua-primary'
            size='lg'
            type='submit'
            fullWidth>
            enviar link
          </Button>
        </form>
      )}

      {showMessage && (
        <>
          <Typography variant='h1' color='blue-gray'>
            Tudo certo<strong className='text-pontua-orange-500'>;)</strong>
          </Typography>
          <Typography color='gray' className='mt-1 font-normal'>
            Foi enviado um e-mail para você com instruções de como redefinir a sua
            senha.
          </Typography>
          <Button
            className='mt-6 bg-pontua-primary'
            size='lg'
            type='submit'
            onClick={() => navigate('/')}
            fullWidth>
            voltar para o login
          </Button>
        </>
      )}
    </div>
  )
}
