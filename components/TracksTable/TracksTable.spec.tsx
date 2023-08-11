import { cleanup, render, screen } from '@testing-library/react'
import TracksTable from './TracksTable'

describe('<TracksTable />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<TracksTable />)

    const tracksTable = screen.getByTestId('tracks-table')

    expect(tracksTable).toBeInTheDocument()
  })
})
