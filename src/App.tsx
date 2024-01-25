import { Box } from "@mui/material";
import { useEffect } from "react";

import List from "./components/list/list";
import Menu from "./components/menu/menu";
import { useAppSelector } from "./hooks/hooks";
import { localKey } from "./const";

import { createRoot } from "react-dom/client";
import Wishlists from "./components/wishlists/wishlists";
import Modal from "./components/modal/modal";

function App(): JSX.Element {
  const listOpen = useAppSelector((DATA) => DATA.listOpen);
  const wishlists = useAppSelector((DATA) => DATA.wishlists);
  const modalOpen = useAppSelector((DATA) => DATA.modalOpen);
  useEffect(() => {
    console.log(wishlists);
    localStorage.setItem(localKey, JSON.stringify(wishlists));
  }, [wishlists]);

  return (
    <Box className="App">
      <Menu />
      <Box display="flex" margin="50px">
        {!listOpen ? <Wishlists /> : <List id={listOpen} />}
      </Box>
      {modalOpen && <Modal />}
    </Box>
  );
}

export default App;
