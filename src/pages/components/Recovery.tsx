import { Input, Typography, Button } from '@material-tailwind/react'
import { AtSymbolIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export function Recovery() {

  const navigate = useNavigate()
  const [showMessage, setShowMessage] = useState(false)
  const [showRecovery, setShowRecovery] = useState(true)

  function handleRecoveryPass() {
    setShowRecovery(false)
    setShowMessage(true)
  }

  return (
    <div className='mb-4 flex flex-col gap-6'>
      {showRecovery && (
        <>
          <Typography variant='h1' color='blue-gray'>
            Recuperar senha<strong className='text-pontua-orange-500'>.</strong>
          </Typography>
          <Typography color='gray' className='mt-1 font-normal'>
            Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um
            link com as instruções para você redefinir a sua senha
          </Typography>
          <Input
            size='lg'
            type='text'
            required
            label='Usuário'
            className='text-pontua-primary font-bold'
            icon={<AtSymbolIcon />}
          />
          <Button
            onClick={handleRecoveryPass}
            className='mt-6 bg-pontua-primary'
            size='lg'
            type='submit'
            fullWidth>
            enviar link
          </Button>
        </>
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
