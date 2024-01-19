import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";
import { Wishlist } from "../../../type";

const WishlistsItem: React.FC = (el: Wishlist) => {
  const { name, id } = el;
  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 120,
    height: 120,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: "center",
  }));

  const clickHandler = () => {
    console.log(id);
    // setListOpen(id)
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
