import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { HeroCard } from '../components/HeroCard'
import { MenuDrawer, SideBar } from '../components/SideBar'
import { Input } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import api from '../services/api'
import { Loading } from '../components/Loading'

export function Home() {

  const [characters, setCharacters] = useState<Hero.HeroCard[]>()
  const [loading, setLoading] = useState<boolean>(false)

  async function fetchCharacters() {
    setLoading(true)
    try {
      const response = await api.getAll('characters')
      const { data } = await response.json();
      console.log(data.results);

      setCharacters(data.results)
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }

  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <main className='flex'>
      <div className='md:hidden'>
        <MenuDrawer />
      </div>
      <div className='hidden md:block'>
        <SideBar />
      </div>
      <div className='flex-1 mt-24 mx-12 md:my-8'>
        <Input
          icon={<MagnifyingGlassIcon className='h-5 w-5' />}
          label='Busque um agente'
        />
        {loading ?
          <div className='flex justify-center items-center h-screen'>
            <Loading />
          </div>
          : (
            <div className='my-8 gap-6 flex flex-wrap justify-center'>
              {characters?.map(hero => (
                <HeroCard
                  key={hero.id}
                  id={hero.id}
                  description={hero.description}
                  name={hero.name}
                  thumbnail={hero.thumbnail}
                />
              ))}
            </div>
          )}
      </div>

    </main>
  )
}
