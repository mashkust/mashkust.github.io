import { useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";

import { useAppSelector } from "../../../hooks/hooks";
// import { setEditNote, setSearch } from "../../../store/wishlists-data";
import { Search, SearchIconWrapper, StyledInputBase } from "./styled";

const SearchAppBar: React.FC = () => {
  // const search = useAppSelector((DATA) => DATA.wishlists.search);
  const dispatch = useDispatch();

  const onInputChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch(setSearch(evt.currentTarget.value));
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Поиск…"
        autoComplete="off"
        // value={search}
        onChange={onInputChangeHandler}
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchAppBar;
