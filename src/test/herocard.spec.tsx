import { render, screen } from '@testing-library/react'
import HeroCard from '../components/HeroCard'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

const thumbImg = {
  path: 'https://i.pinimg.com/550x/a5/25/13/a525132e41b482e35697fcec5003fcc3',
  extension: '.jpg'
}

describe('HeroCard', () => {
  test('should render props', () => {
    render(
      <BrowserRouter>
        <HeroCard
          name='Homem de ferro'
          description='gente boa'
          thumbnail={thumbImg}
        />
      </BrowserRouter>
    )

    userEvent.click(screen.getByText('Ver mais'))

  })
})
