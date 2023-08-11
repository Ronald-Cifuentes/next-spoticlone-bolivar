import { useState } from "react";
import { Track } from "../../types/types";
import { fetchPlaylists, fetchSearchResults } from "./storeSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../types";

export const useSpotify = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { playlists, searchResults } = useSelector(
    (state: AppState) => state.spotifyReducer
  );

  const [tracksQueue, setTracksQueue] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [query, setQuery] = useState("");

  return {
    playlists,
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    query,
    setQuery,
    searchResults,
    fetchSearchResults: () => dispatch(fetchSearchResults(query)),
    currentTrack,
    setCurrentTrack,
    tracksQueue,
    setTracksQueue,
  };
};
