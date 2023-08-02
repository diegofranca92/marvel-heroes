import { HeroCard } from "../components/HeroCard";

export function Profile() {
  const dados = [
    {
      id: 1,
      name: 'Volverine',
      autor: 'Marvel'
    }
  ]
  return (
    <>
      {dados.map(hero => (
        <HeroCard key={hero.id} />
      ))}
    </>
  )
}