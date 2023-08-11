import { cleanup, render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";

jest.mock("next/router", () => ({
  useRouter: () => ({ pathname: "/search" }),
}));
jest.mock("../../Redux/Spotify/hook", () => ({
  useSpotify: () => ({
    query: "",
    setQuery: jest.fn(),
  }),
}));

describe("<SearchInput />", () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("#1. Exist - Render default", () => {
    render(<SearchInput />);

    const searchInput = screen.getByTestId("search-input");

    expect(searchInput).toBeInTheDocument();
  });
});
