import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { HeroCard } from '../components/HeroCard'
import { SideBar } from '../components/SideBar'
import { Input } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import api from '../services/api'

export function Home() {

  const [characters, setCharacters] = useState<Hero.HeroCard[]>()

  async function fetchCharacters() {
    try {
      const response = await api.getAll('characters')
      const { data } = await response.json();
      console.log(data.results);
      
      setCharacters(data.results)
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <main className='flex'>
      <SideBar />
      <div className='flex-1 my-8 mx-12'>
        <Input
          icon={<MagnifyingGlassIcon className='h-5 w-5' />}
          label='Busque um agente'
        />
        <div className='my-8 gap-6 flex flex-wrap'>
          {characters?.map(hero => (
            <HeroCard key={hero.id} description={hero.description} name={hero.name} thumbnail={hero.thumbnail} />
          ))}
        </div>
      </div>
    </main>
  )
}
