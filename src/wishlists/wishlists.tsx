import { useDispatch } from "react-redux";
import { Button, Box, Fab } from "@mui/material";

import WishlistsMap from "./wishlists-map/wishlists-map";
import { addWishlist } from "../store/wishlists-data";
import { useEffect } from "react";
import { useAppSelector } from "../hooks/hooks";
import AddIcon from "@mui/icons-material/Add";

const Wishlists: React.FC = () => {
  const dispatch = useDispatch();
  const listOpen = useAppSelector((DATA) => DATA.listOpen);

  const addWishlistHandler = () => {
    dispatch(addWishlist());
    // dispatch(setFormOpen(true));
  };

  return (
    <Box flexDirection="column" margin="80px auto auto auto">
      <WishlistsMap />
      <Fab
        color="primary"
        size="medium"
        aria-label="add"
        onClick={addWishlistHandler}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default Wishlists;
