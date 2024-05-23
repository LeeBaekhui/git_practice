import React from "react";
import { Box } from "@mui/material";

const ContentComponent = ({ currentComponent }) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      {currentComponent}
    </Box>
  );
};

export default ContentComponent;
