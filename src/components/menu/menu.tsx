import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import DraftsIcon from "@mui/icons-material/Drafts";
import { setModalOpen } from "../../store/notes-data";
import { useAppDispatch } from "../../hooks/hooks";
import { FC } from "react";

const Menu: FC = () => {
  const dispatch = useAppDispatch();
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
            TODO'шка
          </Typography>
          <Tooltip title="Сообщение" onClick={handleOpen}>
            <IconButton>
              <DraftsIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Menu;
