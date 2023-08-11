import { cleanup, render, screen } from '@testing-library/react'
import MainControllers from './MainControllers'

describe('<MainControllers />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<MainControllers />)

    const mainControllers = screen.getByTestId('main-controllers')

    expect(mainControllers).toBeInTheDocument()
  })
})
