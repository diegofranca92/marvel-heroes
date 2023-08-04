import { Typography, Button } from '@material-tailwind/react'
import { BaseSelect } from '../../components/BaseSelect'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { useState } from 'react'

export function Agent() {
  const navigate = useNavigate()
  const { user, checkUserAuth } = useAuth()
  const [agentId, setAgentId] = useState<string>('')

  async function handleLogin() {
    localStorage.setItem('@Auth:user', JSON.stringify(user))
     checkUserAuth()
     if (agentId) {
       navigate(`/profile/${agentId}`)
     }
  }

  return (
    <div className='mb-4 flex flex-col gap-6'>
      <Typography variant='h2' color='blue-gray'>
        Selecione o seu agente mais legal
        <strong className='text-pontua-orange-500'>.</strong>
      </Typography>
      <Typography color='gray' className='mt-1 font-normal'>
        Tenha a visão completa do seu agente.
      </Typography>
      <BaseSelect selectedItem={(data) => {
        if (data) {
          setAgentId(data)
        }
      }} />
      <Button onClick={handleLogin}
        className='mt-6 bg-pontua-primary'
        size='lg'
        disabled={!agentId.length}
        >
        entrar
      </Button>
    </div>
  )
}
