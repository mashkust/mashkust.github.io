import * as React from "react";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import List from "./components/list/list";
import Menu from "./components/menu/menu";
import { useAppSelector } from "./hooks/hooks";
import Wishlists from "./components/wishlists/wishlists";
import Modal from "./components/modal/modal";
import { isFirstEntry, url } from "./const";
import { fetchWishlists } from "./store/wishlists-data";
import Dialog from "./components/dialog/dialog";
import { AppDispatch } from "./store/store";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const listOpen = useAppSelector((DATA) => DATA.listOpen);
  const wishlists = useAppSelector((DATA) => DATA.wishlists);
  const modalOpen = useAppSelector((DATA) => DATA.modalOpen);
  const dialogOpen = useAppSelector((DATA) => DATA.dialogOpen);
  const isLoading = useAppSelector((DATA) => DATA.isLoading);

  useEffect(() => {
    dispatch(fetchWishlists());
  }, []);

  useEffect(() => {
    if (isLoading) {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: 0, list: wishlists }),
      });
    }
  }, [wishlists]);

  return (
    <Box className="App">
      {modalOpen && <Modal />}
      {dialogOpen && <Dialog />}
      <Menu />
      <Box display="flex" margin="50px">
        {!isLoading && <CircularProgress color="secondary" />}
        {isLoading && (!listOpen ? <Wishlists /> : <List id={listOpen} />)}
      </Box>
    </Box>
  );
};

export default App;
