import { PlaylistType, SearchResults } from "../../types/types";

export interface StateSpotify {
  playlists: PlaylistType[];
  searchResults: SearchResults;
}
