import { store } from "./store/store";

export type State = ReturnType<typeof store.getState>;

export type Wish = {
  id: string;
  text: string;
  name: string;
  selected: boolean;
};

export type TextFields = {
  title: string;
};

export type Wishlist = {
  id: string;
  name: string;
  list: Wish[];
  // search: string;
  formOpen: boolean;
  // textFields: TextFields;
};
export type WishlistsData = {
  wishlists: Wishlist[];
};
