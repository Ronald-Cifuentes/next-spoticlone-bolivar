import { cleanup, render, screen } from "@testing-library/react";
import PlayerTwo from "./PlayerTwo";

const mockAudio = jest.fn().mockImplementation(() => {
  const eventListeners = {};
  return {
    play: jest.fn(),
    pause: jest.fn(),
    addEventListener: jest.fn((event, listener) => {
      eventListeners[event] = listener;
    }),
    removeEventListener: jest.fn((event, listener) => {
      eventListeners[event] = listener;
    }),

    triggerEvent: (event) => {
      if (eventListeners[event]) {
        console.log("triggerEvent", { ev: eventListeners[event], e: event });
      }
    },
  };
});

jest.mock("../../Redux/Spotify/hook", () => ({
  useSpotify: () => ({}),
}));

global.Audio = mockAudio;

describe("<PlayerTwo />", () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("#1. Exist - Render default", () => {
    render(<PlayerTwo />);

    const playerTwo = screen.getByTestId("player-two");

    expect(playerTwo).toBeInTheDocument();
  });
});
