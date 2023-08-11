import { cleanup, render, screen } from "@testing-library/react";
import CollectionTabs from "./CollectionTabs";

jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "",
  }),
}));

describe("<CollectionTabs />", () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("#1. Exist - Render default", () => {
    render(<CollectionTabs />);

    const collectionTabs = screen.getByTestId("collection-tabs");

    expect(collectionTabs).toBeInTheDocument();
  });
});
