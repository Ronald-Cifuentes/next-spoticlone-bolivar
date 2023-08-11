import { cleanup, render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";

jest.mock("next/router", () => ({ useRouter: () => ({ pathname: "" }) }));
jest.mock("../../Redux/Spotify/hook", () => ({
  useSpotify: () => ({ fetchPlaylists: jest.fn() }),
}));

describe("<Sidebar />", () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("#1. Exist - Render default", () => {
    render(<Sidebar />);

    const sidebar = screen.getByTestId("sidebar");

    expect(sidebar).toBeInTheDocument();
  });
});
