import { Box } from "@mui/material";
import { useEffect } from "react";

import List from "./wishlists/list/list";
import Menu from "./wishlists/menu/menu";
import { useAppSelector } from "./hooks/hooks";
import { localKey } from "./const";
import Wishlists from "./wishlists/wishlists";

function App(): JSX.Element {
  // const formOpen = useAppSelector((DATA) => DATA.wishlists.formOpen);
  const wishlists = useAppSelector((DATA) => DATA.wishlists);

  //сохранение между сеансами
  useEffect(() => {
    localStorage.setItem(localKey, JSON.stringify(wishlists));
  }, [wishlists]);

  return (
    <div className="App">
      <Menu />
      <Box sx={{ display: "flex" }}>
        <Wishlists />
      </Box>
    </div>
  );
}

export default App;
