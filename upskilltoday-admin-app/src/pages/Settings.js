import React from "react";
import { Typography } from "@mui/material";

const Settings = () => {
  return (
    <div>
      <Typography
        variant="h4"
        component="h3"
        align="center"
        mt={5}
        sx={{ fontSize: "clamp(1.5rem, 2.5vw, 3.0rem)" }}
      >
        Admin Settings
      </Typography>
    </div>
  );
};

export default Settings;
