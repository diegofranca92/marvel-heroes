import React, { useEffect, useState } from 'react'
import { Select, Option } from '@material-tailwind/react'
import api from '../services/api'

type SelectProps = {
  selectedItem(data: any): void
}

export function BaseSelect({ selectedItem }: SelectProps) {
  const [characters, setCharacters] = useState<Hero.HeroCard[]>([])

  async function fetchCharacters() {
    try {
      const response = await api.getAll('characters')
      const { data } = await response.json();
      setCharacters(data.results)
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <div className='w-72'>
      <Select
        size='lg'
        label='Selecione um agente'
        onChange={selected => selectedItem(selected)}
        selected={element => {
          return element &&
            React.cloneElement(element, {
              className: 'flex items-center px-0 gap-2 pointer-events-none'
            })
        }
        }>
        {characters?.map((hero) => (
          <Option key={hero.id} value={hero.id?.toString()} className='flex items-center gap-2'>
            <img
              src={`${hero?.thumbnail?.path}.${hero?.thumbnail?.extension}`}
              alt={hero.name}
              className='h-5 w-5 rounded-full object-cover'
            />
            {hero.name}
          </Option>
        ))}
      </Select>
    </div>
  )
}
