import { cleanup, render, screen } from '@testing-library/react'
import PlayerTrackInfo from './PlayerTrackInfo'

describe('<PlayerTrackInfo />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<PlayerTrackInfo />)

    const playerTrackInfo = screen.getByTestId('player-track-info')

    expect(playerTrackInfo).toBeInTheDocument()
  })
})
