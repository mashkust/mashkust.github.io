import { Box, Fab } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Note } from "../../type";
import WishlistsItem from "./notes-item/notes-item";
import AddIcon from "@mui/icons-material/Add";
import { addNote } from "../../store/notes-data";
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
      {notes.map((el: Note) => (
        <WishlistsItem {...el} key={el.id} />
      ))}
      <Fab
        color="primary"
        size="large"
        aria-label="add"
        onClick={handleAddWishlist}
        sx={{
          marginTop: "100px",
        }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default Notes;
