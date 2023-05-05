import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Upskill from "../../images/UpskillToday Logo.bmp";
import "./navbar.css";

const NavBar = ({ toggle }) => {
  return (
    <nav
      className="navbar"
      style={{ position: "fixed", backgroundColor: "white", zIndex: 100 }}
    >
      <Link className="link" to="/" >
        <img src={Upskill} alt="logo" className="navbar-logo" />
      </Link>
      <div>
        <i className="icon" onClick={toggle} style={{ fontSize: "2.0rem" }}>
          <FaBars />
        </i>
      </div>
      <div className="menu">
        <Link className="link" to="/Home">
          Home
        </Link>

        <Link className="link" to="/About">
          About Us
        </Link>

        <Link className="link" to="/CareerPathway">
          Career Pathway
        </Link>

        <Link className="link" to="/Corporate">
          Corporate
        </Link>

        <Link className="link navbtn" to="/Contact">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
