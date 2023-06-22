import { Typography } from "@mui/material";
import React from "react";
//import LoginPage from "./LoginPage";

const Home = () => {
  return (
    <div>
      <Typography
        variant="h3"
        component="h5"
        align="center"
        mt={5}
        sx={{ fontSize: "clamp(1.5rem, 2.5vw, 3.0rem)" }}
      >
        Admin Home Page
      </Typography>{" "}
      {/*   <LoginPage /> */}
    </div>
  );
};

export default Home;
