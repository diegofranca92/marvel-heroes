declare namespace Hero {
  interface HeroCard {
    thumbnail: {
      path: string
      extension: string
    }
    name: string
    id?: number
    description: string
  }

  interface HeroDetail extends HeroCard {
    comics: string
  }
}
