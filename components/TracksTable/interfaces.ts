import { Track } from "../../types/types";

export interface TracksTableProps {
  dataTestId?: string;
  tracks: Track[];
  noAlbum?: boolean;
  noArtist?: boolean;
}
