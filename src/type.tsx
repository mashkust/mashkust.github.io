import { store } from "./store/store";

export type State = ReturnType<typeof store.getState>;

export type Wish = {
  id: string;
  name: string;
  selected?: boolean;
  rating?: number;
  price?: number;
  link?: string;
  isNew: boolean;
};

export type TextFields = {
  title: string;
};

export type Wishlist = {
  id: string;
  name: string;
  list: Wish[];
  // search: string;
  // formOpen: boolean;
  // textFields: TextFields;
};
export type WishlistsData = {
  wishlists: Wishlist[];
  listOpen: string | null;
  modalOpen: boolean;
};
