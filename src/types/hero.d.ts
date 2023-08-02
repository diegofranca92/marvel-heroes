declare namespace Hero {
  type HeroCard = {
    thumbnail: {
      path: string
      extension: string
    }
    name: string
    id?: number
    description: string
  }
}