import { useMemo } from "react";
import { Typography, Box, Fab } from "@mui/material";

import { useAppSelector } from "../../hooks/hooks";
import { Wish, Wishlist } from "../../type";
import WishlistsItem from "./wishlists-item/wishlists-item";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { addWishlist } from "../../store/wishlists-data";

const Wishlists: React.FC = () => {
  const wishlists = useAppSelector((DATA) => DATA.wishlists);
  const dispatch = useDispatch();
  const listOpen = useAppSelector((DATA) => DATA.listOpen);

  const handleAddWishlist = () => {
    dispatch(addWishlist());
    // dispatch(setFormOpen(true));
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
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default Wishlists;
