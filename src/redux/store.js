import { configureStore } from "@reduxjs/toolkit";
import { movieDetailsReducer } from "./movieDetailsReducer";

export const store = configureStore({
  reducer: {
    movieDetails: movieDetailsReducer,
  },
});
