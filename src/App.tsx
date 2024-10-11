import * as React from "react";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useAppSelector } from "./hooks/hooks";
import List from "./components/list/list";
import Menu from "./components/menu/menu";
import Modal from "./components/modal/modal";
import { localNotes } from "./const";
import Dialog from "./components/dialog/dialog";
import Footer from "./components/footer/footer";
import Notes from "./components/notes/notes";

const App: React.FC = () => {
  const listOpen = useAppSelector((DATA) => DATA.listOpen);
  const notes = useAppSelector((DATA) => DATA.notes);
  const modalOpen = useAppSelector((DATA) => DATA.modalOpen);
  const dialogOpen = useAppSelector((DATA) => DATA.dialogOpen);

  useEffect(() => {
    localStorage.setItem(localNotes, JSON.stringify(notes));
  }, [notes]);

  return (
    <Box className="App">
      {modalOpen && <Modal />}
      {dialogOpen && <Dialog />}
      <Menu />
      <Box display="flex" m={8}>
        {/* {!isLoading && <CircularProgress color="secondary" />} */}
        {!listOpen ? <Notes /> : <List id={listOpen} />}
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
