import { cleanup, render, screen } from "@testing-library/react";
import AdditionalControllers from "./AdditionalControllers";

describe("<AdditionalControllers />", () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("#1. Exist - Render default", () => {
    render(<AdditionalControllers />);

    const additionalControllers = screen.getByTestId("additional-controllers");

    expect(additionalControllers).toBeInTheDocument();
  });
});
