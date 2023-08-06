import { render, screen } from '@testing-library/react'
import { Breadcrumb } from '../components/Breadcrumb'

describe('Breadcrumb', () => {
  test('should render props', () => {
    render(<Breadcrumb profile='breadTest' />)
    
    expect(screen.getByText('breadTest')).toBeDefined()
  })
})
