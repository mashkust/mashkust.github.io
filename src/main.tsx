import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { theme } from "./shared/const.ts";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { setupStore } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={setupStore()}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
