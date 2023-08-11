import { cleanup, render, screen } from '@testing-library/react'
import ArtistList from './ArtistList'

describe('<ArtistList />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<ArtistList />)

    const artistList = screen.getByTestId('artist-list')

    expect(artistList).toBeInTheDocument()
  })
})
