import { cleanup, render, screen } from "@testing-library/react";
import Layout from "./Layout";

jest.mock("next/router", () => ({ useRouter: () => ({ pathname: "" }) }));

describe("<Layout />", () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("#1. Exist - Render default", () => {
    render(<Layout />);

    const layout = screen.getByTestId("layout");

    expect(layout).toBeInTheDocument();
  });
});
