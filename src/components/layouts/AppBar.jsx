import React from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Input,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";

const CustomAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 240,
    width: `calc(100% - 240px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AppBarComponent = ({ open, handleDrawerOpen, handleLogout }) => {
  return (
    <CustomAppBar position="fixed" open={open}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            GymFit
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f0f0f0",
              borderRadius: "5px 0 0 5px",
              padding: "5px 10px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              marginRight: 0,
              width: 300,
              height: 40,
            }}
          >
            <SearchIcon sx={{ color: "gray", marginRight: 1 }} />
            <Input
              disableUnderline
              placeholder="Search"
              sx={{ fontSize: 14, width: "100%" }}
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f0f0f0",
              borderRadius: "0 5px 5px 0",
              padding: "5px 10px",
              height: 40,
              color: "gray",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            검색
          </Button>
        </Box>
        <Button
          variant="contained"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
          sx={{
            backgroundColor: "#1976d2",
            color: "white",
            borderRadius: "5px",
            padding: "5px 15px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "#115293",
            },
          }}
        >
          로그아웃
        </Button>
      </Toolbar>
    </CustomAppBar>
  );
};

export default AppBarComponent;
