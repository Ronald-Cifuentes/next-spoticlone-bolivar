import { FC } from "react";
import { PlaylistListProps } from "./interfaces";
import { PlaylistType } from "../../types/types";
import CardItem from "../CardItem";
import CardItemGrid from "../CardItemGrid";

const PlaylistList: FC<PlaylistListProps> = ({
  dataTestId = "playlist-list",
  playlists,
}) => {
  return (
    <CardItemGrid dataTestId={dataTestId}>
      {playlists?.map((playlist) => (
        <CardItem
          key={playlist.id}
          id={playlist.id}
          heading={playlist.name}
          subheading={playlist.description}
          altTitle={playlist.name}
          images={playlist.images}
          type="playlist"
        />
      ))}
    </CardItemGrid>
  );
};

export default PlaylistList;
