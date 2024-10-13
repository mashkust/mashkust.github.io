import { Note } from "./type";
import { Theme, createTheme } from "@mui/material/styles";

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
}) as Theme;

export const NOTES: Note[] = [];
export const MODAL_KEY = "isFirstEntry";
export const PAGE_KEY = "listOpen";
export const NOTES_KEY = "notes";
