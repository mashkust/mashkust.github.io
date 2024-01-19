import * as React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

// import SearchAppBar from "./search/search";

const Menu: React.FC = () => {
  return (
    <Box flexGrow="1">
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            flexGrow="1"
            display="block"
          >
            Wishlist by mashkust
            <AutoAwesomeIcon />
          </Typography>
          {/*<SearchAppBar />*/}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Menu;
