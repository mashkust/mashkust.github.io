import { Box } from "@mui/material";
import { FC, useEffect } from "react";
import { useAppSelector } from "./store/hooks.ts";
import { setJsonLs } from "./utils/ls.ts";
import { NOTES_KEY } from "./shared/const.ts";
import { NotesData } from "./shared/type.ts";
import Dialog from "./components/dialog/Dialog.tsx";
import Modal from "./components/modal/Modal.tsx";
import Notes from "./components/notes/Notes.tsx";
import Footer from "./components/footer/Footer.tsx";
import List from "./components/list/List.tsx";
import Menu from "./components/menu/Menu.tsx";

const App: FC = () => {
  const listOpen = useAppSelector((DATA) => DATA.listOpen);
  const notes = useAppSelector((DATA) => DATA.notes);
  const modalOpen = useAppSelector((DATA) => DATA.modalOpen);
  const dialogOpen = useAppSelector((DATA) => DATA.dialogOpen);

  useEffect(() => {
    setJsonLs<NotesData["notes"]>(NOTES_KEY, notes);
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
