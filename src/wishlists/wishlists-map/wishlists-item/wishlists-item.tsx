import * as React from "react";
import { useDispatch } from "react-redux";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";
import { Wishlist } from "../../../type";
import { setListOpen } from "../../../store/wishlists-data";
import { useEffect } from "react";

const WishlistsItem: React.FC<Wishlist> = (el) => {
  const dispatch = useDispatch();
  const { name, id } = el;
  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 120,
    height: 120,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: "center",
  }));
  // useEffect(() => {}, [formOpen]);
  const clickHandler = () => {
    dispatch(setListOpen(id));
  };
  return (
    <Box maxHeight="450px" overflow="scroll">
      <DemoPaper variant="outlined" onClick={clickHandler}>
        {name}
      </DemoPaper>
    </Box>
  );
};

export default WishlistsItem;
