import { cleanup, render, screen } from "@testing-library/react";
import PlaylistList from "./PlaylistList";

describe("<PlaylistList />", () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("#1. Exist - Render default", () => {
    render(<PlaylistList playlists={[]} />);

    const playlistList = screen.getByTestId("playlist-list");

    expect(playlistList).toBeInTheDocument();
  });
});
