import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StateSpotify } from "./types";
import axios from "axios";
import { PlaylistType } from "../../types/types";

export const fetchPlaylists = createAsyncThunk(
  "search/fetchPlaylistsStatus",
  async (): Promise<PlaylistType> => {
    try {
      const resp = await axios.get("/api/playlists");
      const data = resp.data;
      return data.items;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResultsStatus",
  async (query: string) => {
    try {
      const resp = await axios.get(`/api/search?q=${query}`);
      return resp.data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const initialState: StateSpotify = {
  playlists: [{ id: "", name: "" }],
  searchResults: {},
};

export const Slice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaylists.fulfilled, (state, action) => {
        state.playlists.push(action.payload);
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.searchResults = action.payload;
      });
  },
});

export default Slice.reducer;
