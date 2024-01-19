import { useDispatch } from "react-redux";
import { Button, Box } from "@mui/material";

import WishlistsMap from "./wishlists-map/wishlists-map";
import { addWishlist } from "../store/wishlists-data";

const Wishlists: React.FC = () => {
  const dispatch = useDispatch();

  const addWishlistHandler = () => {
    dispatch(addWishlist());
    // dispatch(setFormOpen(true));
  };

  return (
    <Box flexDirection="column" display="flex" margin="80px auto auto auto">
      <WishlistsMap />
      <Button
        onClick={addWishlistHandler}
        sx={{
          mt: "40px",
          width: "130px",
        }}
        variant="contained"
      >
        Добавить
      </Button>
    </Box>
  );
};

export default Wishlists;
