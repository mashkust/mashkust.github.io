import * as React from "react";
import { useDispatch } from "react-redux";
import { Box, Fab } from "@mui/material";
import { useAppSelector } from "../../hooks/hooks";
import { Wishlist } from "../../type";
import WishlistsItem from "./wishlists-item/wishlists-item";
import AddIcon from "@mui/icons-material/Add";
import { addWishlist } from "../../store/wishlists-data";
import { AppDispatch } from "../../store/store";

const Wishlists: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const wishlists = useAppSelector((DATA) => DATA.wishlists);
  const handleAddWishlist = () => {
    dispatch(addWishlist());
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="flex-start"
      alignContent="flex-start"
      width="100%"
    >
      {wishlists.map((el: Wishlist) => (
        <WishlistsItem {...el} key={el.id} />
      ))}
      <Fab
        color="primary"
        size="large"
        aria-label="add"
        onClick={handleAddWishlist}
        sx={{
          marginTop: "80px",
        }}
        disabled={wishlists.length > 11}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default Wishlists;
