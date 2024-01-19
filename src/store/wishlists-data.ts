import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

import { defaultFields, WISHLISTS } from "../const";
import { Wish, Wishlist, WishlistsData } from "../type";

//заметки при инициализации
const localWishlists = () => {
  const localWishlists = localStorage.getItem("wishlist");
  const initial =
    localWishlists !== null ? JSON.parse(localWishlists) : WISHLISTS;
  return initial;
};

const initialState: WishlistsData = {
  wishlists: localWishlists(),
};

export const wishlistsData = createSlice({
  name: "DATA",
  initialState,
  reducers: {
    //хранить состояние полей ввода
    // setTextFields: (
    //   state,
    //   action: {
    //     payload: { value: string; name: "description" | "title" | null };
    //     type: string;
    //   }
    // ) => {
    //   const { name, value } = action.payload;
    //   if (name) {
    //     name === "title"
    //       ? (state.textFields.title = value)
    //       : (state.textFields.description = value);
    //   } else {
    //     state.textFields = defaultFields;
    //   }
    // },
    //создает заметку
    addWishlist: (state) => {
      // const { title} = state.textFields;
      const newWishlist: Wishlist = {
        id: nanoid(3),
        list: [],
        formOpen: false,
        name: "",
      };
      state.wishlists.push(newWishlist);
    },
    //редактирует заметку
    editWishlist: (state, action) => {
      // const { payload } = action;
      // const { title, description } = state.textFields;
      // const notes = state.notes;
      // state.notes = notes.map((el) =>
      //   el.id === payload
      //     ? {
      //         id: payload,
      //         name: title,
      //         text: description,
      //         selected: false,
      //       }
      //     : el
      // );
    },
    //удаляет заметку
    // deleteWishlist: (state, action) => {
    //   const { payload } = action;
    //   const notes = state.notes;
    //   state.notes = notes.filter((note) => note.id !== payload);
    // },
  },
});

export const {
  addWishlist,
  editWishlist,
  // deleteWishlist,
} = wishlistsData.actions;
