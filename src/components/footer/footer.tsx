import * as React from "react";
import { Box, Link, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box flexGrow="1" position="fixed" bottom="0" m={2} right={0}>
      <Typography variant="overline" lineHeight={0} sx={{ opacity: 0.3 }}>
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
