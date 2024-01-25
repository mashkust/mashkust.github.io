import * as React from "react";
import { useDispatch } from "react-redux";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";
import { Wishlist } from "../../../type";
import { setListOpen } from "../../../store/wishlists-data";
import { useEffect, useState } from "react";

const WishlistsItem: React.FC<Wishlist> = ({ name, id }) => {
  const dispatch = useDispatch();
  const [isFocus, setIsFocus] = useState(false);
  // const { name, id } = el;
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
  return (
    <Box
      margin="20px"
      onFocus={() => {
        console.log("jjjjj");
        setIsFocus(true);
      }}
    >
      <DemoPaper
        sx={{
          height: "200px",
          width: "200px",
        }}
        variant={isFocus ? "elevation" : "outlined"}
        onClick={handleClick}
      >
        {name}
      </DemoPaper>
    </Box>
  );
};

export default WishlistsItem;
