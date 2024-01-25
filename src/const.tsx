import { nanoid } from "nanoid";
import { TextFields, Wishlist } from "./type";

export const WISHLIST: Wishlist = {
  id: nanoid(3),
  name: "Событие",
  list: [],
};

export const WISHLISTS: Wishlist[] = [WISHLIST];

export const defaultFields: TextFields = {
  title: "",
};

export const localKey = "wishlists";
