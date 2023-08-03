import { useEffect, useState } from 'react';
import { BaseTab } from '../components/BaseTab'
import { MenuDrawer, SideBar } from '../components/SideBar'
import api from '../services/api';
import { useParams } from 'react-router-dom';

export function Profile() {
  const params = useParams()
  const id = params.id

  const [characterProfile, setCharacterProfile] = useState<Hero.HeroDetail[]>()

  useEffect(() => {
    async function fetchCharacterProfile() {
      try {
        const response = await api.getById('characters', id!)
        const { data } = await response.json();
        setCharacterProfile(data.results)
      } catch (error) {
        console.log(error);
      }
  
    }

    fetchCharacterProfile()
  }, [id])

  return (
    <main className='flex'>
      <div className='md:hidden'>
        <MenuDrawer />
      </div>
      <div className='hidden md:block'>
        <SideBar />
      </div>
      {characterProfile?.map(profile => (
        <BaseTab hero={profile} />
      ))}
    </main>
  )
}
