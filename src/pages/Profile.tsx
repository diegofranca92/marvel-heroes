import { useEffect, useState } from 'react';
import { BaseTab } from '../components/BaseTab'
import { SideBar } from '../components/SideBar'
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
      <SideBar />
      {characterProfile?.map(profile => (
        <BaseTab hero={profile} />
      ))}
    </main>
  )
}
