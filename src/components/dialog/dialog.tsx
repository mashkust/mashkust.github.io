import * as React from "react";
import Button from "@mui/material/Button";
import { Dialog as DialogBase } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { deleteNote, setDialogOpen } from "../../store/notes-data";

const Dialog: React.FC = () => {
  const dispatch = useAppDispatch();
  const dialogOpen = useAppSelector((DATA) => DATA.dialogOpen);

  const handleClose = () => {
    dispatch(setDialogOpen(null));
  };
  const handleOk = () => {
    dispatch(deleteNote(dialogOpen));
    dispatch(setDialogOpen(null));
  };
  return (
    <React.Fragment>
      <DialogBase
        open={!!dialogOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Вы уверены?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Иногда так хочется немного вернуть время назад и исправить те
            ошибки, которые были допущены раньше.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Оставить</Button>
          <Button onClick={handleOk} autoFocus>
            Удалить
          </Button>
        </DialogActions>
      </DialogBase>
    </React.Fragment>
  );
};

export default Dialog;
