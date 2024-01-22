import { Box } from "@mui/material";
import { useEffect } from "react";

import List from "./wishlists/list/list";
import Menu from "./wishlists/menu/menu";
import { useAppSelector } from "./hooks/hooks";
import { localKey } from "./const";
import Wishlists from "./wishlists/wishlists";
import { createRoot } from "react-dom/client";

function App(): JSX.Element {
  const listOpen = useAppSelector((DATA) => DATA.listOpen);
  const wishlists = useAppSelector((DATA) => DATA.wishlists);

  //сохранение между сеансами
  useEffect(() => {
    localStorage.setItem(localKey, JSON.stringify(wishlists));
  }, [wishlists]);

  useEffect(() => {
    console.log(listOpen);
  }, [listOpen]);

  return (
    <div className="App">
      <Menu />
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {!listOpen ? <Wishlists /> : <List />}
      </Box>
    </div>
  );
}

export default App;
