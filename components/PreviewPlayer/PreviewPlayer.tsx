import { FC } from "react";
import { PreviewPlayerProps } from "./interfaces";
import { usePlayer } from "../../context/PlayerContext";
import AdditionalControllers from "../AdditionalControllers";
import MainControllers from "../MainControllers";
import PlayerTrackInfo from "../PlayerTrackInfo";

const PreviewPlayer: FC<PreviewPlayerProps> = ({
  dataTestId = "preview-player",
}) => {
  const { currentTrack } = usePlayer();

  if (!currentTrack) {
    return null;
  }

  return (
    <footer
      data-testid={dataTestId}
      className={`sticky bottom-0 grid grid-cols-12 gap-12 items-center justify-between px-5 border-[#272727] bg-player ${
        currentTrack ? "py-3 border-t" : "py-0 border-0"
      }`}
    >
      <PlayerTrackInfo currentTrack={currentTrack} />
      <MainControllers />
      <AdditionalControllers />
    </footer>
  );
};

export default PreviewPlayer;
