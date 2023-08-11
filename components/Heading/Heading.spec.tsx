import { cleanup, render, screen } from '@testing-library/react'
import Heading from './Heading'

describe('<Heading />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<Heading />)

    const heading = screen.getByTestId('heading')

    expect(heading).toBeInTheDocument()
  })
})
