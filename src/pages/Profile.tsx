import { useEffect, useState } from 'react';
import { BaseTab } from '../components/BaseTab'
import { SideBar } from '../components/SideBar'
import api from '../services/api';
import { useParams } from 'react-router-dom';

export function Profile() {
  const params = useParams()
  const id = params.id

  const [characterProfile, setCharacterProfile] = useState({} as Hero.HeroDetail)

  async function fetchCharacterProfile() {
    try {
      const response = await api.getById('characters', id!)
      const { data } = await response.json();

      setCharacterProfile(data.results[0])
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    fetchCharacterProfile()

  }, [])

  return (
    <main className='flex'>
      <SideBar />
      <BaseTab hero={characterProfile} />
    </main>
  )
}
