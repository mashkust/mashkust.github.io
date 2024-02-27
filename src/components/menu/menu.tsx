import * as React from "react";
import { useDispatch } from "react-redux";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DraftsIcon from "@mui/icons-material/Drafts";
import { setModalOpen } from "../../store/wishlists-data";
import { AppDispatch } from "../../store/store";

const Menu: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleOpen = () => {
    dispatch(setModalOpen(true));
  };

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
            Мероприятие Марии Кустовой
            <AutoAwesomeIcon />
          </Typography>
          <Tooltip title="Приглашение" onClick={handleOpen}>
            <IconButton>
              <DraftsIcon />
            </IconButton>
          </Tooltip>
          <Avatar
            alt="Avatar"
            src="https://i.ibb.co/gDjg6CY/2024-01-25-10-16-00.png"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Menu;
