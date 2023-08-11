import { cleanup, render, screen } from '@testing-library/react'
import CardItemGrid from './CardItemGrid'

describe('<CardItemGrid />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<CardItemGrid />)

    const cardItemGrid = screen.getByTestId('card-item-grid')

    expect(cardItemGrid).toBeInTheDocument()
  })
})
