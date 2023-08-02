import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { HeroCard } from '../components/HeroCard'
import { SideBar } from '../components/SideBar'
import { Input } from '@material-tailwind/react'

export function Home() {
  const dados = [
    {
      id: 1,
      name: 'Volverine',
      autor: 'Marvel'
    },
    {
      id: 2,
      name: 'Volverine',
      autor: 'Marvel'
    },
    {
      id: 3,
      name: 'Volverine',
      autor: 'Marvel'
    },
    {
      id: 4,
      name: 'Volverine',
      autor: 'Marvel'
    }
  ]
  return (
    <main className='flex'>
      <SideBar />
      <div className='flex-1 my-8 mx-12'>
        <Input
          icon={<MagnifyingGlassIcon className='h-5 w-5' />}
          label='Busque um agente'
        />
        <div className='my-8 gap-6 flex flex-wrap'>
          {dados.map(hero => (
            <HeroCard key={hero.id} />
          ))}
        </div>
      </div>
    </main>
  )
}
