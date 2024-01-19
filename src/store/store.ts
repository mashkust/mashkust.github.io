import { configureStore } from "@reduxjs/toolkit";

import { wishlistsData } from "./wishlists-data";

export const store = configureStore({
  reducer: wishlistsData.reducer,
});
