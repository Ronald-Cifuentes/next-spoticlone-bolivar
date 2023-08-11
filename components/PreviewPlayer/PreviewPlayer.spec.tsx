import { cleanup, render, screen } from "@testing-library/react";
import PreviewPlayer from "./PreviewPlayer";

jest.mock("../../context/PlayerContext", () => ({
  usePlayer: () => ({ currentTrack: { name: "", artists: [{ id: "" }] } }),
}));

describe("<PreviewPlayer />", () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("#1. Exist - Render default", () => {
    render(<PreviewPlayer />);

    const previewPlayer = screen.getByTestId("preview-player");

    expect(previewPlayer).toBeInTheDocument();
  });
});
