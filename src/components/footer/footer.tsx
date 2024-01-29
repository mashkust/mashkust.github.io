import * as React from "react";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DraftsIcon from "@mui/icons-material/Drafts";

const Footer: React.FC = () => {
  return (
    <Box flexGrow="1" position="fixed" bottom="0" m={2} right={0}>
      <Typography variant="overline" lineHeight={0} sx={{ opacity: 0.3 }}>
        Постоянно ведутся технические работы. Изменения видны всем - общий
        доступ. Если все плохо, обращайcя&nbsp;
        <Link
          href="https://t.me/mashkust"
          variant="body2"
          underline="none"
          target="_blank"
        >
          mashkust.
        </Link>
      </Typography>
    </Box>
  );
};
export default Footer;
