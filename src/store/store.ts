import { configureStore } from "@reduxjs/toolkit";

import { notesData } from "./notes-data";

// const localStorageMiddleware = ({ getState }) => {
//   return (next) => (action) => {
//     const result = next(action);
//     localStorage.setItem("notes", JSON.stringify(getState()));
//     return result;
//   };
// };

// const reHydrateStore = () => {
//   if (localStorage.getItem("notes") !== null) {
//     return JSON.parse(String(localStorage.getItem("notes")));
//   }
// };

export const store = configureStore({
  reducer: notesData.reducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(localStorageMiddleware),
  // preloadedState: reHydrateStore(),
});

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;
