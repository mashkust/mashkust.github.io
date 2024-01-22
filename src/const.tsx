import { nanoid } from "nanoid";
import { Wish, TextFields, Wishlist } from "./type";

export const WISHLIST: Wishlist = {
  id: nanoid(3),
  name: "Заметка",
  list: [],
};

export const WISHLISTS: Wishlist[] = [WISHLIST];

export const defaultFields: TextFields = {
  title: "",
};

export const localKey = "wishlists";
