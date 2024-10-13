import { Box, Fab } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Note } from "../../shared/type";
import NotesItem from "./notes-item/NotesItem";
import AddIcon from "@mui/icons-material/Add";
import { addNote } from "../../store/notesSlice";
import { FC } from "react";

const Notes: FC = () => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((DATA) => DATA.notes);
  const handleAddWishlist = () => {
    dispatch(addNote());
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="flex-start"
      alignContent="flex-start"
      width="100%"
      mb={8}
    >
      {notes?.map((el: Note) => (
        <NotesItem {...el} key={el.id} />
      ))}
      <Fab
        color="primary"
        size="large"
        aria-label="add"
        onClick={handleAddWishlist}
        sx={{
          marginTop: "100px",
        }}
        data-testid="add-note"
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default Notes;
