import * as React from "react";
import Button from "@mui/material/Button";
import { Dialog as DialogBase } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useAppSelector } from "../../hooks/hooks";
import { useDispatch } from "react-redux";
import { deleteWishlist, setDialogOpen } from "../../store/wishlists-data";

const Dialog: React.FC = () => {
  const dispatch = useDispatch();
  const dialogOpen = useAppSelector((DATA) => DATA.dialogOpen);

  const handleClose = () => {
    dispatch(setDialogOpen(null));
  };
  const handleOk = () => {
    dispatch(deleteWishlist(dialogOpen));
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
        <DialogTitle id="alert-dialog-title">
          {"Ты хорошо подумал, удалим вишлист?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Иногда так хочется немного вернуть время назад и исправить те
            ошибки, которые были допущены раньше...
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Что же я наделал</Button>
          <Button onClick={handleOk} autoFocus>
            Продолжу
          </Button>
        </DialogActions>
      </DialogBase>
    </React.Fragment>
  );
};

export default Dialog;
