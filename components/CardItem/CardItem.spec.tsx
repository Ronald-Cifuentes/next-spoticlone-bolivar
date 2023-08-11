import { cleanup, render, screen } from '@testing-library/react'
import CardItem from './CardItem'

describe('<CardItem />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<CardItem />)

    const cardItem = screen.getByTestId('card-item')

    expect(cardItem).toBeInTheDocument()
  })
})
