import { useMemo } from "react";
import { Typography, Box } from "@mui/material";

import { useAppSelector } from "../../hooks/hooks";
import { Wish, Wishlist } from "../../type";
import Wishlists from "../wishlists";
import WishlistsItem from "./wishlists-item/wishlists-item";

const WishlistsMap: React.FC = () => {
  const wishlists = useAppSelector((DATA) => DATA.wishlists);
  // const search = useAppSelector((DATA) => DATA.wishlists.search);

  // const filteredList = useMemo(
  //   () =>
  //     list.filter((el: Wish) =>
  //       el.name.toLowerCase().startsWith(search.toLowerCase())
  //     ),
  //   [list, search]
  // );

  // if (!filteredList.length) return <Typography>Не найдено</Typography>;
  return (
    <Box maxHeight="450px" overflow="scroll">
      {wishlists.map((el: Wishlist) => (
        <WishlistsItem {...el} key={el.id} />
      ))}
    </Box>
  );
};

export default WishlistsMap;
