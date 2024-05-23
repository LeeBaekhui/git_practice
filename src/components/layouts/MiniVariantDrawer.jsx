import React, { useState } from "react";
import { Box, CssBaseline, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppBar from "./AppBar";
import Drawer from "./Drawer";
import Content from "./Content";
import MemberCreate from "../members/MemberCreate";

export default function MiniVariantDrawer() {
  const [open, setOpen] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(
    <Typography paragraph>내용이 들어가는 곳</Typography>
  );
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuItemClick = (text) => {
    if (text === "회원가입") {
      setCurrentComponent(<MemberCreate />);
    } else {
      setCurrentComponent(
        <Typography paragraph>{text} 내용이 들어가는 곳</Typography>
      );
    }
  };

  const handleLogout = () => {
    navigate("/signup");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleLogout={handleLogout}
      />
      <Drawer
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleMenuItemClick={handleMenuItemClick}
      />
      <Content currentComponent={currentComponent} />
    </Box>
  );
}
