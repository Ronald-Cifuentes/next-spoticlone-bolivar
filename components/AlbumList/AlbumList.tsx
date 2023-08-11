import { FC } from "react";
import { AlbumListProps } from "./interfaces";
import CardItem from "../../components/CardItem";
import CardItemGrid from "../CardItemGrid";

const AlbumList: FC<AlbumListProps> = ({
  dataTestId = "album-list",
  albums,
}) => {
  return (
    <CardItemGrid dataTestId={dataTestId}>
      {albums?.map((album) => (
        <CardItem
          key={album.id}
          id={album.id}
          heading={album.name}
          images={album.images}
          altTitle={album.name}
          subheading={album.artists[0].name}
          type="album"
        />
      ))}
    </CardItemGrid>
  );
};

export default AlbumList;
