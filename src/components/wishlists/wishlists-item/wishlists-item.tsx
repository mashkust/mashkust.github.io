import * as React from "react";
import { useDispatch } from "react-redux";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Box, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Wishlist } from "../../../type";
import {
  editWishlist,
  setDialogOpen,
  setListOpen,
} from "../../../store/wishlists-data";
import { useState } from "react";
import { useAppSelector } from "../../../hooks/hooks";
import { AppDispatch } from "../../../store/store";

const WishlistsItem: React.FC<Wishlist> = ({ name, id }) => {
  const dispatch = useDispatch<AppDispatch>();
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
    dispatch(
      editWishlist({ id, name: (evt.target as HTMLInputElement).value })
    );
  };
  const handleDelete = (evt: React.MouseEvent) => {
    evt.stopPropagation();
    dispatch(setDialogOpen(id));
  };
  const handleBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    dispatch(editWishlist({ id, name: evt.target.value }));
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
        />
        <IconButton
          title="Удалить"
          onClick={handleDelete}
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

export default WishlistsItem;
