import { cleanup, render, screen } from '@testing-library/react'
import AlbumList from './AlbumList'

describe('<AlbumList />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<AlbumList />)

    const albumList = screen.getByTestId('album-list')

    expect(albumList).toBeInTheDocument()
  })
})
