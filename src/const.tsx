import { Wishlist } from "./type";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#e8caee",
    },
    secondary: {
      main: "#ab47bc",
    },
    error: {
      main: "#f50057",
    },
    success: {
      main: "#f06292",
    },
    background: {
      default: "#2c2b2d",
      paper: "#262026",
    },
  },
});

export const WISHLISTS: Wishlist[] = [];
export const localKey = "wishlists";
export const localPage = "listOpen";
export const url = "https://wishlists-mashkust.amvera.io/wishlists/0";
