import { Typography, Button } from '@material-tailwind/react'
import { BaseSelect } from '../../components/BaseSelect'

export function Agent() {
  return (
    <div className='mb-4 flex flex-col gap-6'>
      <Typography variant='h1' color='blue-gray'>
        Selecione o seu agente mais legal
        <strong className='text-pontua-orange-500'>.</strong>
      </Typography>
      <Typography color='gray' className='mt-1 font-normal'>
        Tenha a visão completa do seu agente.
      </Typography>
      <BaseSelect />
      <Button
        className='mt-6 bg-pontua-primary'
        size='lg'
        type='submit'
        fullWidth>
        entrar
      </Button>
    </div>
  )
}
