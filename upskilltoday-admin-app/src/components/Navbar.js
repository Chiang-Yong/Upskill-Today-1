import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import "./navbar.css";
import UpskillTodayLogo from "../images/UpskillToday Logo.jpg";

const pages = [
  { title: "Log In", link: "/login" },
  { title: "Register New User", link: "/addusers" },
];

const Navbar = ({ toggle }) => {
  return (
    <nav className="navbar">
      <img src={UpskillTodayLogo} alt="Upskill Today Logo" loading="lazy" />
    {/* <Diversity1Icon sx={{ display: { xs: "none", md: "flex" }, ml: 3 }} /> */}  
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          ml: 1,
          mr: 2,
          pl: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "sans-serif",
          fontWeight: 700,
          letterSpacing: ".1rem",
          color: "black",
          textDecoration: "none",
        }}
      >
      
      </Typography>
      <Box className="menu">
        {pages.map((page, index) => (
          <div key={index}>
            {index <= 1 ? (
              <Button
                href={page.link}
                sx={{ mr: 3, color: "black", display: "block" }}
                className="menu-text"
              >
                <Link to={page.link} className="link menu-text">
                  {page.title}
                </Link>
              </Button>
            ) : (
              <Button
                href={page.link}
                className="navbtn"
                sx={{ ml: 5, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
            )}
          </div>
        ))}
      </Box>
    </nav>
  );
};

export default Navbar;
