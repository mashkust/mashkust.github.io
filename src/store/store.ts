import { configureStore } from "@reduxjs/toolkit";
import { NotesSlice } from "./notesSlice";

export const setupStore = (preloadedState?: RootState) => {
  return configureStore({
    reducer: NotesSlice.reducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof NotesSlice.reducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export default setupStore;
