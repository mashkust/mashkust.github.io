import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { isFirstEntry, localPage, WISHLISTS } from "../const";
import { Wishlist, WishlistsData } from "../type";
import { url } from "../const";

export const fetchWishlists = createAsyncThunk(
  "wishlists/fetchWishlists",
  async () => {
    return fetch(url).then((res) => res.json());
  }
);

const initial = () => {
  const localListOpen = localStorage.getItem(localPage);
  const wishlists = WISHLISTS;
  const listOpen = localListOpen !== null ? JSON.parse(localListOpen) : null;
  const modalOpen = localStorage.getItem(isFirstEntry) === null;
  return { wishlists, listOpen, modalOpen };
};

const initialState: WishlistsData = initial();

export const wishlistsData = createSlice({
  name: "DATA",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlists.fulfilled, (state, action) => {
        state.wishlists = action.payload.list;
        state.isLoading = true;
      })
      .addDefaultCase((state, action) => {
        setTimeout(() => (state.isLoading = false), 10000);
      });
  },
  reducers: {
    editList: (state, action) => {
      const { payload } = action;
      const wishlists = state.wishlists;
      wishlists.forEach((wishlist) => {
        if (state.listOpen === wishlist.id) wishlist.list = payload;
      });
    },
    setListOpen: (state, action) => {
      const { payload } = action;
      state.listOpen = payload;
      localStorage.setItem(localPage, JSON.stringify(state.listOpen));
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
      localStorage.setItem(isFirstEntry, "");
    },
    setDialogOpen: (state, action) => {
      const { payload } = action;
      state.dialogOpen = payload;
    },
    editWishlist: (state, action) => {
      const { payload } = action;
      const wishlists = state.wishlists;
      wishlists.forEach((wishlist) => {
        if (wishlist.id === payload.id) wishlist.name = payload.name;
      });
    },
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
  setDialogOpen,
} = wishlistsData.actions;
