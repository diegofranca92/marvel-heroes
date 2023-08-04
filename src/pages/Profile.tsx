import { useEffect, useState } from 'react';
import { BaseTab } from '../components/BaseTab'
import api from '../services/api';
import { useParams } from 'react-router-dom';
import { Loading } from '../components/Loading';

export function Profile() {
  const params = useParams()
  const id = params.id

  const [characterProfile, setCharacterProfile] = useState<Hero.HeroDetail[]>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    async function fetchCharacterProfile() {
      setLoading(true)
      try {
        const response = await api.getById('characters', id!)
        const { data } = await response.json();
        setCharacterProfile(data.results)
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }

    }

    fetchCharacterProfile()
  }, [id])

  return (
    <>
      {loading ?
        <div className='flex justify-center items-center h-screen'>
          <Loading />
        </div>
        : characterProfile?.map(profile => (
          <BaseTab hero={profile} />
        ))
      }
    </>
  )
}
