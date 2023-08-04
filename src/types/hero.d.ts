declare namespace Hero {
  interface HeroCard {
    thumbnail: {
      path: string
      extension: string
    }
    name: string
    id?: number
    description?: string
  }

  interface DetailItems {
    resourceURI: string
    name: string
  }

  interface HeroDetail extends HeroCard {
    comics: {
      items: DetailItems[]
    }
    series: {
      items: DetailItems[]
    }
    stories: {
      items: DetailItems[]
    }
    events: {
      items: DetailItems[]
    }
  }
}
