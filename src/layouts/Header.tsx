import { Box, SxProps, Theme, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box sx={rootSx}>
      <Typography variant="h4">Cantonese Romanisation</Typography>
    </Box>
  );
};

export default Header;

const rootSx: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  gap: 1,
  width: "100%",
};
