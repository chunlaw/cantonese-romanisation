import {
  Box,
  Button,
  IconButton,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { GitHub as GitHubIcon, Info as InfoIcon } from "@mui/icons-material";
import npmLogo from "../assets/npm.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box sx={rootSx}>
      <Typography
        variant="h6"
        onClick={() => navigate("/")}
        sx={{ cursor: "pointer" }}
      >
        港拼 cantonese-romanisation
      </Typography>
      <Box>
        <Button
          variant="text"
          sx={{ textTransform: "none" }}
          onClick={() => navigate("/doc")}
          color="inherit"
        >
          <Typography variant="body1">Doc</Typography>
        </Button>
        <IconButton
          onClick={() => {
            window.open(
              "https://github.com/chunlaw/cantonese-romanisation",
              "_blank",
            );
          }}
          size="small"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            window.open(
              "https://www.npmjs.com/package/cantonese-romanisation",
              "_blank",
            );
          }}
          size="small"
        >
          <img src={npmLogo} width={24} height={24} alt="NPM logo" />
        </IconButton>
        <IconButton
          onClick={() => {
            window.open(
              "https://zh.wikipedia.org/zh-hk/%E9%A6%99%E6%B8%AF%E6%94%BF%E5%BA%9C%E7%B2%B5%E8%AA%9E%E6%8B%BC%E9%9F%B3",
              "_blank",
            );
          }}
          size="small"
        >
          <InfoIcon />
        </IconButton>
      </Box>
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
