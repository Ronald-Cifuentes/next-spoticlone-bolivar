import { cleanup, render, screen } from "@testing-library/react";
import Header from "./Header";

jest.mock("next/router", () => ({ useRouter: () => ({ pathname: "" }) }));
jest.mock("next-auth/react", () => ({ useSession: () => ({ data: {} }) }));
jest.mock("../../Redux/Spotify/hook", () => ({
  useSpotify: () => ({}),
}));

describe("<Header />", () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("#1. Exist - Render default", () => {
    render(<Header />);

    const header = screen.getByTestId("header");

    expect(header).toBeInTheDocument();
  });
});
