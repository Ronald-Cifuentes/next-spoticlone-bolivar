import { FC } from "react";
import { ArtistListProps } from "./interfaces";
import CardItem from "../CardItem";
import CardItemGrid from "../CardItemGrid";

const ArtistList: FC<ArtistListProps> = ({
  dataTestId = "artist-list",
  artists,
}) => {
  return (
    <CardItemGrid dataTestId={dataTestId}>
      {artists?.map((artist) => (
        <CardItem
          key={artist.id}
          id={artist.id}
          heading={artist.name}
          images={artist.images}
          altTitle={artist.name}
          subheading="Artist"
          imageRounded
          type="artist"
        />
      ))}
    </CardItemGrid>
  );
};

export default ArtistList;
