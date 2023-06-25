import React from "react";
import { Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <div>
      <Typography
        variant="h4"
        component="h5"
        align="center"
        mt={5}
        sx={{ fontSize: "clamp(1.5rem, 2.5vw, 3.0rem)" }}
      >
        Admin Dashboard
      </Typography>
      <Typography variant="h6" align="center">Under Development!</Typography>
    </div>
  );
};

export default Dashboard;
