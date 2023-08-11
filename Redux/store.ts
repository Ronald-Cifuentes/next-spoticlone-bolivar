import { configureStore } from "@reduxjs/toolkit";

import storeReducer from "./storeSlice";
import spotifyReducer from "./Spotify/storeSlice";

export function makeStore() {
  return configureStore({
    reducer: { storeReducer, spotifyReducer },
  });
}

const store = makeStore();

export default store;
