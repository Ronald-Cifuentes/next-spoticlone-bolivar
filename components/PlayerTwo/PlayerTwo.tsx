import { FC } from "react";
import { PlayerTwoProps } from "./interfaces";
import { useEffect, useState } from "react";

import AdditionalControllers from "../AdditionalControllers";
import PlayerTrackInfo from "../PlayerTrackInfo";
import { useSpotify } from "../../Redux/Spotify/hook";

const PlayerTwo: FC<PlayerTwoProps> = ({ dataTestId = "player-two" }) => {
  const { currentTrack } = useSpotify();

  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    setPlaying((prev) => !prev);
  };

  useEffect(() => {
    setAudio(new Audio(currentTrack?.preview_url));
  }, [currentTrack?.preview_url]);

  useEffect(() => {
    playing ? audio?.play() : audio?.pause();
  }, [audio, playing]);

  useEffect(() => {
    if (audio) {
      audio.addEventListener("ended", () => setPlaying(false));
    }
    return () => {
      audio?.removeEventListener("ended", () => setPlaying(false));
    };
  });

  return (
    <footer
      data-testid={dataTestId}
      className={`sticky bottom-0 grid grid-cols-12 items-center justify-between px-5 border-[#272727] bg-player ${
        currentTrack ? "py-3 border-t" : "py-0 border-0"
      }`}
    >
      {currentTrack && (
        <>
          <PlayerTrackInfo currentTrack={currentTrack} />
          <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
          {JSON.stringify(audio, null, 4)}
          <AdditionalControllers />
        </>
      )}
    </footer>
  );
};

export default PlayerTwo;
