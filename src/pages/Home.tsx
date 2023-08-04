import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { HeroCard } from '../components/HeroCard'
import { Input } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import api from '../services/api'
import { Loading } from '../components/Loading'
import { Pagination } from '../components/Pagination'

export function Home() {

  const [characters, setCharacters] = useState<Hero.HeroCard[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  const heroesFiltered = characters?.filter(hero => hero.name.toLowerCase().includes(search))

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
    <>
      <Input
        icon={<MagnifyingGlassIcon className='h-5 w-5' />}
        label='Busque um agente'
        type='search'
        value={search.toLowerCase()}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ?
        <div className='flex justify-center items-center h-screen'>
          <Loading />
        </div>
        : (
          <div className='my-8 gap-6 flex flex-wrap justify-center'>
            {heroesFiltered?.map(hero => (
              <HeroCard
                key={hero.id}
                id={hero.id}
                description={hero.description}
                name={hero.name}
                thumbnail={hero.thumbnail}
              />
            ))}
            <Pagination limit={10} offset={240} total={1200} />
          </div>
        )}
    </>
  )
}
