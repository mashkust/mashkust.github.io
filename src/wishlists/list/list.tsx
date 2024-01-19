import { useDispatch } from "react-redux";
import { Button, Box } from "@mui/material";

// import { setEditNote, setFormOpen } from "../../store/wishlists-data";

const List: React.FC = () => {
  const dispatch = useDispatch();

  // const addNoteHandler = () => {
  //   dispatch(setEditNote(null));
  //   dispatch(setFormOpen(true));
  // };

  return (
    <Box flexDirection="column" display="flex" margin="80px auto auto auto">
      {/*<ListMap />*/}
      {/*<Button*/}
      {/*  onClick={addNoteHandler}*/}
      {/*  sx={{*/}
      {/*    mt: "40px",*/}
      {/*    width: "130px",*/}
      {/*  }}*/}
      {/*  variant="contained"*/}
      {/*>*/}
      {/*  Добавить*/}
      {/*</Button>*/}
    </Box>
  );
};

export default List;
