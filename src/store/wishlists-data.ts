import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

import { defaultFields, localKey, WISHLISTS } from "../const";
import { Wish, Wishlist, WishlistsData } from "../type";

//заметки при инициализации
const initial = () => {
  const localWishlists = localStorage.getItem(localKey);
  const localListOpen = localStorage.getItem("listOpen");
  const wishlists =
    localWishlists !== null ? JSON.parse(localWishlists) : WISHLISTS;
  const listOpen = localListOpen !== null ? JSON.parse(localListOpen) : null;
  const modalOpen = false;
  return { wishlists, listOpen, modalOpen };
};

const initialState: WishlistsData = initial();

export const wishlistsData = createSlice({
  name: "DATA",
  initialState,
  reducers: {
    editList: (state, action) => {
      const { payload } = action;

      const wishlists = state.wishlists;
      wishlists.forEach((wishlist) => {
        if (state.listOpen === wishlist.id) wishlist.list = payload;
      });
    },
    setListOpen: (state, action) => {
      console.log(state.listOpen);
      const { payload } = action;
      state.listOpen = payload;
      localStorage.setItem("listOpen", JSON.stringify(state.listOpen));
    },
    addWishlist: (state) => {
      const newWishlist: Wishlist = {
        id: nanoid(3),
        list: [],
        name: "",
      };
      state.wishlists.push(newWishlist);
    },
    setModalOpen: (state, action) => {
      const { payload } = action;
      state.modalOpen = payload;
    },
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
    deleteWishlist: (state, action) => {
      const { payload } = action;
      const wishlists = state.wishlists;
      state.wishlists = wishlists.filter((wishlist) => wishlist.id !== payload);
    },
  },
});

export const {
  editList,
  addWishlist,
  editWishlist,
  deleteWishlist,
  setListOpen,
  setModalOpen,
} = wishlistsData.actions;
