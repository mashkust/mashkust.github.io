import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Box, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Note } from "../../../shared/type";
import {
  editNote,
  setDialogOpen,
  setListOpen,
} from "../../../store/notesSlice";
import { FC, useState } from "react";
import { useAppDispatch } from "../../../store/hooks";

const NotesItem: FC<Note> = ({ name, id }) => {
  const dispatch = useAppDispatch();
  const [isFocus, setIsFocus] = useState(false);

  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 120,
    height: 120,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: "center",
  }));

  const handleClick = () => {
    dispatch(setListOpen(id));
  };
  const handleStopClick = (evt: React.MouseEvent) => {
    evt.stopPropagation();
  };
  const handleStopMouseOut = (evt: React.MouseEvent) => {
    evt.stopPropagation();
    dispatch(editNote({ id, name: (evt.target as HTMLInputElement).value }));
  };
  const handleDelete = (evt: React.MouseEvent) => {
    evt.stopPropagation();
    dispatch(setDialogOpen(id));
  };
  const handleBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    dispatch(editNote({ id, name: evt.target.value }));
  };
  const handleMouseOut = () => {
    setIsFocus(false);
  };
  const handleMouseOver = () => {
    setIsFocus(true);
  };

  return (
    <Box m={1.5} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <DemoPaper
        sx={{
          height: "240px",
          width: "240px",
          position: "relative",
          cursor: "pointer",
        }}
        variant={isFocus ? "elevation" : "outlined"}
        onClick={handleClick}
      >
        <TextField
          variant="standard"
          sx={{
            position: "absolute",
            top: 85,
            left: 15,
          }}
          onClick={handleStopClick}
          onBlur={handleBlur}
          onMouseOut={handleStopMouseOut}
          color="success"
          defaultValue={name}
          data-testid="notes-item"
        />
        <IconButton
          title="Удалить"
          onClick={handleDelete}
          data-testid="delete-button"
          sx={{
            top: 0,
            right: 0,
            position: "absolute",
          }}
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </DemoPaper>
    </Box>
  );
};

export default NotesItem;
