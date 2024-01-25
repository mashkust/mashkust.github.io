import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./App";

import { store } from "./store/store";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
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
    warning: {
      main: "#ffb300",
    },
    info: {
      main: "#b388ff",
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
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
