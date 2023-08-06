import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import HeroCard from '../components/HeroCard'
import { Input } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import api from '../services/api'
import { Loading } from '../components/Loading'
import { Pagination } from '../components/Pagination'

export function Home() {
  const [charactersData, setCharactersData] = useState({} as Hero.HeroDataApi)
  const [loading, setLoading] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [offset, setOffset] = useState<number>(0)
  const LIMIT = 9

  const heroesFiltered = charactersData?.results?.filter(hero =>
    hero.name.toLowerCase().includes(search)
  )

  useEffect(() => {
    async function fetchCharacters() {
      setLoading(true)
      try {
        const response = await api.getAll('characters', LIMIT, offset)
        const { data } = await response.json()
        setCharactersData(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    fetchCharacters()
  }, [offset])

  return (
    <>
      <Input
        icon={<MagnifyingGlassIcon className='h-5 w-5' />}
        label='Busque um agente'
        type='search'
        value={search.toLowerCase()}
        onChange={e => setSearch(e.target.value)}
      />
      {loading ? (
        <div className='flex justify-center items-center h-screen'>
          <Loading />
        </div>
      ) : (
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
          <Pagination
            setOffset={setOffset}
            limit={LIMIT}
            offset={offset}
            total={charactersData?.total}
          />
        </div>
      )}
    </>
  )
}
